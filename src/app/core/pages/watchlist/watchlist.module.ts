import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WatchlistComponent } from './watchlist.component';
import { StockHttpService } from './services/watchlist-http.service';
import { SparklineModule } from '../../../shared/components/sparkline/sparkline.module';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule, RouterModule, SparklineModule],
  providers: [StockHttpService],
})
export class WatchlistModule {}
