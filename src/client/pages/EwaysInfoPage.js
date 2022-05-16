import React, { Component } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

// import ProgressIndicatorStatic from '../components/ProgressBarIndicator/ProgressIndicatorStatic'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'

class EwaysInfoPage extends Component {
  componentDidMount() {}

  toggle() {
    let moreinfo = document.getElementById('moreinfo')

    moreinfo.style.display = moreinfo.style.display == 'none' ? 'block' : 'none'
  }

  render() {
    return (
      <div
        className="BlockChain-Fulldiv"
        style={{ float: 'center', marginLeft: '350px' }}
      >
        <div className="row">
          <BreadcrumbsItem to="/">
            <HomePageIcon />
          </BreadcrumbsItem>
          <BreadcrumbsItem to="/ewaysinfo">Eways</BreadcrumbsItem>
          <h2 style={{ fontWeight: 'bold', paddingTop: '30px' }}>
            Hej då Macken!
          </h2>
          <br />
          {/* <p style={{ fontWeight: 'bold', marginRight: '450px' }}>
            Du som givare har tack vare blockchain full insyn i vart dina pengar
            tar vägen.
          </p> */}
          <p style={{ marginRight: '450px' }}>
            Bilen är enormt framgångsrik globalt. Den är central i miljarder
            människors dagliga liv och den definierar hur våra städer byggs och
            byggs ut. Bilen lever tyvärr i en osund allians med fossila ämnen
            och miljarder människor åker rutinmässigt till den smutsiga
            bensinmacken för att tanka fossilt.
            <br />
            Nu finns det äntligen ett finare och bättre alternativ och då inser
            vi vilken dålig vana som har gått i arv i flera generationer. Det är
            dags för något nytt!
          </p>
          <br />
          {/* <div style={{ width: '50%', paddingRight: '10px' }}>
            <ProgressIndicatorStatic />
          </div> */}

          <div
            id="moreinfo"
            style={{ marginRight: '450px', paddingBottom: '20px' }}
          >
            <br />
            <p style={{ fontWeight: 'bold' }}>Team Eways</p>
            <p>
              Vi är en snabbväxande oberoende laddoperatör som hjälper samhället
              att ställa om till fossilfrihet genom att göra det enkelt att köra
              elbil. Niclas & Petra grundade företaget vid köksbordet i
              Stocksund 2015 efter många och långa diskussioner om det nya
              fossilfria samhället. Vi är i dag den ledande oberoende
              laddoperatören med över 16 000 smarta laddpunkter över hela
              landet.
            </p>
            <p>
              Vi är har kontor i Stockholm, Ängelholm, Lund, Göteborg, Borås,
              Karlstad, Falun, Umeå, Linköping, Jönköping, Kalmar, Trollhättan
              och Uppsala där vi arbetar med de lokala marknaderna. Vi är
              ingenjörer, entreprenörer, säljare, tekniker, ekonomer och
              servicepersoner med många olika erfarenheter, bakgrunder och
              kompetenser. Totalt ca 85 personer. Det som förenar oss alla är
              förändringsviljan och tron på en fossilfri framtid.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default {
  component: EwaysInfoPage,
}
