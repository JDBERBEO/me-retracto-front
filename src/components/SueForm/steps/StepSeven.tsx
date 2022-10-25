import React, {useEffect} from 'react'
import { Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getClaimsAsync } from '../../../store/features/claims/claimsSlice'

export const StepSeven = () => {
  const dispatch = useDispatch()
  const { previousCheckoutClaim } = useSelector((state:any) => (state.claims));
  

  const checkout = new WidgetCheckout({
    currency: 'COP',
    amountInCents: previousCheckoutClaim.claimCreated.payment.amount,
    reference: previousCheckoutClaim.claimCreated._id,
    publicKey: 'pub_test_SyUVrIhwhjflROZsU0f133Pl3z6Bm2TZ',
    redirectUrl: 'http://localhost:3000/transactionResult', // Opcional
  })

  const payment = (e) => {
    e.preventDefault()
    checkout.open(function ( result ) {
      // e.preventDefault()
      const transaction = result.transaction
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
    })
  }

  useEffect(() => {
    dispatch(getClaimsAsync())
  }, []);

  return (
    <>
      <Col className='d-flex justify-content-center align-items-center flex-column' xs={12}>
        <p className='form-label py-5'>Solo falta un paso para finalizar el proceso</p>
        <div style={{height: '250px'}}>
          <button className='outlinedButton mb-5' onClick={payment}>PAGAR</button>
        </div>
      </Col>
    </>
  )
}
