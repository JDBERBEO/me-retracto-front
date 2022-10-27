import React, {useEffect} from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getClaimbyTransactionIdAsync } from '../../store/features/claims/claimsSlice'
import { FooterMain } from '../common/footer/FooterMain'
import { DefaultNavbar} from '../navbar/DefaultNavbar.tsx'
import { SueCard } from '../SueCard/SueCard.tsx'

export const TransactionResult = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const transactionId = searchParams.get("id")

  console.log('transactionId: ', transactionId)
  const claim = useSelector((state) => (state.claims.currentClaim))

  // console.log('claim: ', claim)
  // Object.keys(obj).length === 0
  useEffect(() => {
    dispatch(getClaimbyTransactionIdAsync(transactionId))
  }, [])
  if (claim.claim === undefined) {
    console.log('loquese')
  }
  return (
    <>
      <DefaultNavbar type={'black'} />
      <Row>
        { claim.claim !== undefined }
        <SueCard 
        title={'Resultado de tu transacción.'}
        description={!!claim.claim && claim.claim[0].payment.status === 'APPROVED' ? 'Tu transacción ha sido APROBADA' : 'Tu transacción NO HA SIDO APROBADA, comunícate con tu entidad bancaria'} 
        background={!!claim.claim && claim.claim[0].payment.status === 'APPROVED' ? '#4e4b99' : '#eb646f'} 
        buttonColor={!!claim.claim && claim.claim[0].payment.status === 'APPROVED' ? 'containerButton__size-m__purple' : 'containerButton__size-m__red' } 
        buttonText={'HACER OTRA DEMANDA'} 
        imgUrl={'https://res.cloudinary.com/me-retracto/image/upload/v1654053822/platform%20Imgs/a3_1_ppqexe.png'} />
      </Row>
      <Row style={{backgroundColor: '#F3F3F3'}}>
        <FooterMain />
      </Row>
    </>
  )
}