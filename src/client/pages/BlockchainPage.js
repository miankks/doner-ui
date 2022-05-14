import React, { Component } from 'react'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

import ProgressIndicatorStatic from '../components/ProgressBarIndicator/ProgressIndicatorStatic'
import HomePageIcon from '../components/HomePageIcon/HomePageIcone'

class BlockchainPage extends Component {
  componentDidMount() {
  }

  toggle() {
    let moreinfo = document.getElementById('moreinfo')

    moreinfo.style.display = moreinfo.style.display == 'none' ? 'block' : 'none'
  }

  render() {
    return (
      <div className='BlockChain-Fulldiv' style={{ float: 'center', marginLeft: '350px' }}>
        <div className='row' >
          <BreadcrumbsItem to='/'><HomePageIcon /></BreadcrumbsItem>
          <BreadcrumbsItem to='/blockchain'>Blockkedjeteknik</BreadcrumbsItem>
          <h2 style={{ fontWeight: 'bold', paddingTop: '30px' }}>Blockchain håller koll på din gåva</h2>
          <br />
          <p style={{ fontWeight: 'bold', marginRight: '450px' }}>
            Du som givare har tack vare blockchain full insyn
            i vart dina pengar tar vägen.
          </p>
          <p style={{ marginRight: '450px' }}>
            Nedanför kan du se de olika etapperna som din gåva går igenom fram tills att den resulterar
            i en redovisning om forskningen som du har bidragit till.<br />
            Klicka på milstolparna för att läsa mer om vad som händer under varje etapp.
          </p>
          <br />
          <div style={{ width: '50%', paddingRight: '10px' }}><ProgressIndicatorStatic /></div>

          <div id='moreinfo' style={{ marginRight: '450px', paddingBottom: '20px' }}>
            <br />
            <p style={{ fontWeight: 'bold' }}>Hur fungerar blockchain?</p>
            <p>
              Blockchain är ett distribuerat register över allt som sker med din gåva.
              Alla i kedjan, dvs du, Fonden samt forskningsorganisationerna som tar emot din gåva i form av ett forskningsanslag,
              har tillgång till den information som är nödvändig för deras uppgift. Alla har alltså en identisk kopia av samma register.
            </p>
            <p>
              Varje gång som du ger en gåva, Fonden betalar ut din gåva, en forskningsinstitution
              tar emot din gåva eller redovisar forskning som genomförts tack vare din gåva,
              så uppdateras automatiskt samtliga kopior av det här registret. Information som läggs till bildar
              s k block, där varje block är krypterat och kopplas ihop med det block som skapades innan med
              hjälp av en krypterad kod. Detta gör att informationen som läggs till kan verifieras på ett säkert sätt.
              Man kan inte radera block, bara lägga till nya, vilket gör att det inte kan göras ändringar utan att det märks.
            </p>
            <p>
              Blockchain ger dig som givare åtkomst till det register över dina gåvor som inte går att manipulera.
              Du kan se exakt var din gåva befinner sig just nu och försäkra dig om att den används precis så som du bestämt.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default {
  component: BlockchainPage
}
