import { Component } from '@angular/core';

@Component({
  selector: 'app-affiliate-links',
  templateUrl: './affiliate-links.component.html',
  styleUrls: ['./affiliate-links.component.scss'],
})
export class AffiliateLinksComponent {
  referralLinks = [
  {
    name: 'DEGIRO',
    logo: 'assets/logo/affiliate/logo-degiro.svg',
    description: 'Plateforme européenne d’investissement réputée pour ses faibles frais, idéale pour les ETF et actions internationales.',
    bonus: '🎁 100 € de frais de transaction',
    link: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbll4dV9YRDNDM3lGeElDQlVKQkxpTmtidVZkQXxBQ3Jtc0trQWp6M0xoSGRmRUFlRVV1MVlTRFN0X0ZXZ0x5QTdpMzF0cDZFMi1PeWcxVThkQ1N4V01KUVAwQjNmSnVIN0FKYTlfVm1ZR3piMHA2ZEl1WUlvVFkyLUFIY3B1MnpmTmhTTUZ5VFdKR2lwUlRCSVlnYw&q=https%3A%2F%2Fwww.degiro.fr%2Fparrainage%2Fcommencez-a-investir%3Fid%3D3DA049E5%26utm_source%3Dmgm&v=iFYSgyMChrA'
  },
  {
    name: 'RealT',
    logo: 'assets/logo/affiliate/logo-realt.svg',
    description: 'Investissez dans l’immobilier tokenisé aux États-Unis avec des loyers versés en crypto.',
    bonus: '🎁 $50 offerts',
    link: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkhGcVFiS3lQUHdXNVlLYk8zX2l0TU1VbExCQXxBQ3Jtc0tsMERoMVpRc0piVTVfam5NRUNXd2xyMU5LMS1lNDczMDhmcDRFMEN5QnlfaFdTS1IweDktRzNvMnYzX21zWElNOUlVX3BNSm15SWYxTVV3ZnNUOUtENUQtU1RkX3p0cG1kcEFqN21HV3FxNGp3Rjh1bw&q=https%3A%2F%2Frealt.co%2Fref%2FTristanFinance%2F&v=iFYSgyMChrA'
  },
  {
    name: 'Interactive Brokers',
    logo: 'assets/logo/affiliate/logo-ibkg.svg',
    description: 'Courtier reconnu mondialement, adapté aux investisseurs expérimentés avec accès à tous les marchés.',
    bonus: '🎁 Jusqu’à $1,000 d’actions gratuites selon dépôt',
    link: 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFR0QVc1ZTRiX3lNNnNKbVM5Ym5sR0w2WjFDZ3xBQ3Jtc0trQkxqYkFmVWNrTGpjd2dBRFNDVmcyZjRQcjdmNWt6ei1mbkVVelFQOUlOVHlxVVpVMnN4MDgtdWFsekoyclVkZkc3eVlKdHNTZGdQVG5SN29SR2RMNXlNLWN0cWZVbGotWUkwa3RXcWIxMEdLRU1ZOA&q=https%3A%2F%2Fibkr.com%2Freferral%2Ftristan558&v=iFYSgyMChrA'
  }
];


  constructor() {}

  redirectToAffiliate(link: string): void {
    window.open(link, '_blank');
  }
}
