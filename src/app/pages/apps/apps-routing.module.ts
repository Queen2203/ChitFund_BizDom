import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Apps
import { AppsMessagingComponent } from 'src/app/pages/apps/messaging/messaging.component'
import { AppsCalendarComponent } from 'src/app/pages/apps/calendar/calendar.component'
import { AppsProfileComponent } from 'src/app/pages/apps/profile/profile.component'
import { AppsGalleryComponent } from 'src/app/pages/apps/gallery/gallery.component'
import { AppsMailComponent } from 'src/app/pages/apps/mail/mail.component'
import { GithubExploreComponent } from 'src/app/pages/apps/github-explore/github-explore.component'
import { GithubDiscussComponent } from 'src/app/pages/apps/github-discuss/github-discuss.component'
import { JiraDashboardComponent } from 'src/app/pages/apps/jira-dashboard/jira-dashboard.component'
import { JiraAgileBoardComponent } from 'src/app/pages/apps/jira-agile-board/jira-agile-board.component'
import { TodoistListComponent } from 'src/app/pages/apps/todoist-list/todoist-list.component'
import { DigitaloceanDropletsComponent } from 'src/app/pages/apps/digitalocean-droplets/digitalocean-droplets.component'
import { DigitaloceanCreateComponent } from 'src/app/pages/apps/digitalocean-create/digitalocean-create.component'
import { GoogleAnalyticsComponent } from 'src/app/pages/apps/google-analytics/google-analytics.component'
import { HelpdeskDashboardComponent } from 'src/app/pages/apps/helpdesk-dashboard/helpdesk-dashboard.component'
import { WordpressPostComponent } from 'src/app/pages/apps/wordpress-post/wordpress-post.component'
import { WordpressPostsComponent } from 'src/app/pages/apps/wordpress-posts/wordpress-posts.component'
import { WordpressAddComponent } from 'src/app/pages/apps/wordpress-add/wordpress-add.component'
import { ExampleQueenComponent } from 'src/app/pages/apps/example-queen/example-queen.component'
import { GroupComponent } from './group/group.component'
import { ContactsComponent } from './contacts/contacts.component'
import { ReceiveComponent } from './receive/receive.component'
import { AssigntoComponent } from './assignto/assignto.component'
import { PayComponent } from './pay/pay.component'
import { TransactionsComponent } from './transactions/transactions.component'
import { UserComponent } from './user/user.component'
import { PlansComponent } from './plans/plans.component'
import { PaymentTypesComponent } from './payment-types/payment-types.component'
import { SettingsComponent } from './settings/settings.component'
import { ReportsComponent } from './reports/reports.component'

const routes: Routes = [
  {
    path: 'messaging',
    component: AppsMessagingComponent,
    data: { title: 'Messaging App' },
  },
  {
    path: 'calendar',
    component: AppsCalendarComponent,
    data: { title: 'Calendar App' },
  },
  {
    path: 'profile',
    component: AppsProfileComponent,
    data: { title: 'Profile App' },
  },
  {
    path: 'gallery',
    component: AppsGalleryComponent,
    data: { title: 'Gallery App' },
  },
  {
    path: 'mail',
    component: AppsMailComponent,
    data: { title: 'Mail App' },
  },
  {
    path: 'github-explore',
    component: GithubExploreComponent,
    data: { title: 'Github Explore' },
  },
  {
    path: 'github-discuss',
    component: GithubDiscussComponent,
    data: { title: 'Github Discuss' },
  },
  {
    path: 'jira-dashboard',
    component: JiraDashboardComponent,
    data: { title: 'Jira Dashboard' },
  },
  {
    path: 'jira-agile-board',
    component: JiraAgileBoardComponent,
    data: { title: 'Jira Agile Board' },
  },
  {
    path: 'todoist-list',
    component: TodoistListComponent,
    data: { title: 'Todoist List' },
  },
  {
    path: 'digitalocean-droplets',
    component: DigitaloceanDropletsComponent,
    data: { title: 'Digitalocean Droplets' },
  },
  {
    path: 'digitalocean-create',
    component: DigitaloceanCreateComponent,
    data: { title: 'Digitalocean Create' },
  },
  {
    path: 'google-analytics',
    component: GoogleAnalyticsComponent,
    data: { title: 'Google Analytics' },
  },
  {
    path: 'helpdesk-dashboard',
    component: HelpdeskDashboardComponent,
    data: { title: 'Helpdesk Dashboard' },
  },
  {
    path: 'wordpress-post',
    component: WordpressPostComponent,
    data: { title: 'Wordpress Post' },
  },
  {
    path: 'wordpress-posts',
    component: WordpressPostsComponent,
    data: { title: 'Wordpress Posts' },
  },
  {
    path: 'wordpress-add',
    component: WordpressAddComponent,
    data: { title: 'Wordpress Add' },
  },
  {
    path: 'example-queen',
    component: ExampleQueenComponent,
    data: { title: 'Test App' },
  },
  {
    path: 'group',
    component: GroupComponent,
    data: { title: 'Groups' },
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts' },
  },
  {
    path: 'assignto',
    component: AssigntoComponent,
    data: { title: 'Assign To' },
  },
  {
    path: 'receive',
    component: ReceiveComponent,
    data: { title: 'Receive' },
  },
  {
    path: 'pay',
    component: PayComponent,
    data: { title: 'Pay' },
  }
  ,
  {
    path: 'transactions',
    component: TransactionsComponent,
    data: { title: 'Transactions' },
  }
  ,
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User' },
  }
  ,
  {
    path: 'plans',
    component: PlansComponent,
    data: { title: 'Plans' },
  },
  {
    path: 'payment-types',
    component: PaymentTypesComponent,
    data: { title: 'PaymentTypes' },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' },
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { title: 'Reports' },
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AppsRouterModule {}
