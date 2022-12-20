import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getClaimbyTransactionIdAsync } from '../../store/features/claims/claimsSlice';
import { FooterMain } from '../common/footer/FooterMain';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { SueCard } from '../SueCard/SueCard.tsx';
import { LoadingMain } from '../common/LoadingMain.tsx';

export const TransactionResult = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const transactionId = searchParams.get('id');

  const { currentClaim: claim, loading } = useSelector((state) => state.claims);

  useEffect(() => {
    dispatch(getClaimbyTransactionIdAsync(transactionId));
  }, []);

  if (loading) return <LoadingMain variant={'danger'} />;

  return (
    <>
      <DefaultNavbar type={'black'} />
      <Row>
        {claim.claim !== undefined}
        <SueCard
          title={'Resultado de tu transacción.'}
          description={
            !!claim.claim && claim.claim[0].payment.status === 'APPROVED'
              ? 'Tu transacción ha sido APROBADA'
              : 'Tu transacción NO HA SIDO APROBADA, comunícate con tu entidad bancaria'
          }
          background={
            !!claim.claim && claim.claim[0].payment.status === 'APPROVED' ? '#4e4b99' : '#eb646f'
          }
          buttonColor={
            !!claim.claim && claim.claim[0].payment.status === 'APPROVED'
              ? 'containerButton__size-m__purple'
              : 'containerButton__size-m__red'
          }
          buttonText={'HACER OTRA DEMANDA'}
          imgUrl={
            !!claim.claim && claim.claim[0].payment.status === 'APPROVED'
              ? 'https://res.cloudinary.com/me-retracto/image/upload/v1671556661/a6_eced5y.png'
              : 'https://res.cloudinary.com/me-retracto/image/upload/v1671556661/a7_qm1jnl.png'
          }
        />
      </Row>
      <Row style={{ backgroundColor: '#F3F3F3' }}>
        <FooterMain />
      </Row>
    </>
  );
};
