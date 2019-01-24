import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  meatNum: number[] = [0, 0, 0, 0, 0, 0];
  meatName: string[] = ['鸡肉', '牛肉', '猪肉', '鸭子', '羊', '大虾'];
  vegetables: string;
  vegAdded = false;
  cooked = false;
  mealName: string;
  cookMethod: string[] = ['炒', '红烧', '炖'];


  addItem(type: String) {
    switch (type) {
      case 'chicken': {
        this.meatNum[0] ++;
        break;
      }
      case 'beef': {
        this.meatNum[1]++;
        break;
      }
      case 'pork': {
        this.meatNum[2]++;
        break;
      }
      case 'duck': {
        this.meatNum[3]++;
        break;
      }
      case 'lamb': {
        this.meatNum[4]++;
        break;
      }
      case 'shrimp': {
        this.meatNum[5]++;
        break;
      }
    }
  }
  resetItem() {
    this.meatNum = [0, 0, 0, 0, 0 , 0];
    this.vegAdded = false;
    this.cooked = false;
    this.vegetables = null;
    this.mealName = null;
  }

  addVegetables() {
    this.vegAdded = true;
  }

  makeCook() {
    this.cooked = true;
    this.mealName = this.cookTheMeal();
  }
  cookTheMeal(): string {
    let count = 0;
    let meatType = '';
    for (let i = 0; i < this.meatNum.length; i++) {
      if (this.meatNum[i] !== 0) {
        count = count + this.meatNum[i];
        meatType = meatType + this.meatName[i];
      }
    }
    const method = this.cookMethod[Math.floor(Math.random() * (this.cookMethod.length - 1))];
    let temp = '';
    if (count >= 5) {
      temp = temp + '大份';
    } else {
      temp = temp + '小份';
    }
    if (this.vegetables !== null) {
      temp = temp + this.vegetables;
    }
    return temp + method + meatType;
  }
}
