import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {IonInfiniteScroll, MenuController, ModalController, ToastController} from '@ionic/angular';
import {HomePage} from '../home/home.page';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;



    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    remoteVideoSourceArr = [];
    public storageBaseUrl = ROOT_URL + 'storage';
  constructor(private router: Router,
              private http: HttpClient,
              public toastController: ToastController,
              private menu: MenuController,
              private modalController: ModalController
  ) {
  }

  ngOnInit() {

      if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
          console.log('test');
          // this.router.navigate(['/mine']).then(res => {
          //     console.log(res);
          // });
          // this.router.navigate(['/welcome']).then(res => {
          //     console.log(res);
          // });
      }else {
          if (localStorage.getItem('welcomeTime') && localStorage.getItem('welcomeTime') == '1') {
              console.log('we');
          }else {
              localStorage.setItem('welcomeTime','1');
              this.router.navigate(['/welcome']).then(res => {
                  console.log(res);
              });
          }
      }
      this.http.get(ROOT_URL + 'feeds').subscribe(res => {
          console.log(res);
          if (res['code'] === 200) {
              res['data']['data'].forEach(item => {
                  // item['playId'] = this.playId;
                  this.remoteVideoSourceArr.push(item);
              });
          }
      });
  }

    goIndex() {
        this.router.navigate(['/feeds']).then(res => {
            console.log(res);
        });
    }

    goPublish() {
        if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
            this.router.navigate(['/create']).then(res => {
                console.log(res);
            });
        }else {
            this.router.navigate(['/login']).then(res => {
                console.log(res);
            });
        }

    }

    goMine() {
        if (localStorage.getItem('anshi_id') && localStorage.getItem('anshi_id') !== '') {
            this.router.navigate(['/mine']).then(res => {
                console.log(res);
            });
        }else {
            this.router.navigate(['/login']).then(res => {
                console.log(res);
            });
        }
    }

    getCurPlayer(e) {
        console.log(e);
        // this.router.navigate(['/player']);
        // this.presentModal(e);
        this.router.navigate(['home'],{queryParams: {insertId: e['id']}}).then(res => {
          console.log(res);
        });
    }

    async presentModal(e) {
    console.log(e);
        const modal = await this.modalController.create({
            component: HomePage,
            componentProps: {insertId: e['id']},
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        console.log(data);
        // return await modal.present();
    }

    noSupport() {
        this.presentToast('功能暂未开放！').then(() => {
            console.log('功能暂未开放！');
            this.menu.close('third');
        });
    }

    openThird() {
        this.menu.enable(true, 'third');
        this.menu.open('third');
    }


    goSearch() {
        console.log('功能暂未开放！');
        this.noSupport();
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    }


    goNote() {
        this.router.navigate(['/note']).then( () => {
            console.log('note');
        });
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll

        }, 500);
    }
}
