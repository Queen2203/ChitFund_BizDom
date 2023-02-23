import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'
import {
  slideFadeinUp,
  slideFadeinRight,
  zoomFadein,
  fadein,
} from '../../../layouts/router-animations'
import * as moment from 'moment'
import { NzNotificationService } from 'ng-zorro-antd'
import { io, Socket } from 'socket.io-client'
import { NzTabPosition } from 'ng-zorro-antd/tabs'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [slideFadeinUp, slideFadeinRight, zoomFadein, fadein],
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
