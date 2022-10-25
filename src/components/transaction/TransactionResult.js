import React from 'react'
import { Row } from 'react-bootstrap'
import { FooterMain } from '../common/footer/FooterMain'
import { DefaultNavbar} from '../navbar/DefaultNavbar.tsx'
import { SueCard } from '../SueCard/SueCard.tsx'

export const TransactionResult = () => {
  return (
    <>
      <DefaultNavbar type={'black'} />
      <Row>
        <SueCard title={'Resultado de tu transacción.'} description={'jijoi'} background={'#4e4b99'} buttonColor={'containerButton__size-m__purple'} buttonText={'REGRESA AL COMERCIO'}/>
      </Row>
      <Row style={{backgroundColor: '#F3F3F3'}}>
        <FooterMain />
      </Row>
    </>
  )
}
