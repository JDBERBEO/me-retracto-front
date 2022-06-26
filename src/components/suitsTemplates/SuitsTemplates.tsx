import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showSuitsTemplates, getClaimsSuitsAsync } from '../../store/features/claims/claimsSlice'

export const SuitsTemplates = () => {
  const dispatch = useDispatch()
  const suitsTemplates = useSelector((state) => (state.claims.claimsTemplates));

  console.log('suitsTemplates: ', suitsTemplates)


  useEffect(() => {
    dispatch(getClaimsSuitsAsync())
  }, []);

  return (
    <div>
      {suitsTemplates.map((template, i) => {
        console.log('template: ', template)
        return <p key={i}>name: {template.name}</p>;
      })}
      <button>hol</button>
    </div >
  )
}
