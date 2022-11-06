import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteClaimAsync, getClaimsAsync } from '../../store/features/claims/claimsSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { claimsStatusTraductor } from '../../helpers/claimsStatusTraductor';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { LoadingMain } from '../common/LoadingMain.tsx';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

export const SuitsTable = () => {
  const dispatch = useDispatch()
  const { claims, loading } = useSelector((state:any) => (state.claims));
  const navigate = useNavigate()

  let rows 
  if(!!claims) {
    rows = claims.map((claim) => {
      return {
        id: claim._id,
        templateType: claim.templateType,
        claimDate:  new Date( claim.createdAt).toDateString(),
        claimerName: claim.claimFields.claimerName,
        defendantName: claim.claimFields.defendantName,
        revisionStatus: claimsStatusTraductor(claim.revisionStatus)
      }
    })
  }

  const columns: GridColDef[] = [
    {
      headerName: 'TIPO DE RECLAMACIÓN',
      field: 'templateType',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 300
    },
    {
      headerName: 'FECHA DE RECLAMACIÓN',
      field: 'claimDate',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 200
    },
    {
      headerName: 'DEMANDANTE',
      field: 'claimerName',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 200

    },
    {
      headerName: 'DEMANDADO',
      field: 'defendantName',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 200
    },
    {
      headerName: 'ESTADO',
      field: 'revisionStatus',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 200,
    },
    {
      headerName: 'ACCIONES',
      field: 'actions',
      headerClassName: 'header',
      headerAlign: 'center',
      width: 200,
      renderCell: (params) => {
        return <>
          <button style={{border: 'none', background: 'transparent'}} onClick={() => handleOnClick(params.row.id)}>
            <div className='iconBorder'>
              <p className='iconBorder__icon'>+</p>
            </div>
          </button>
          { token ? (<div className="stepNumberContainer">
          <div className='iconBorder'>
            <button className='iconBorder__icon' style={{backgroundColor: 'transparent', border:'none'}} onClick={() => handleDeleteClaim(params.row.id)}><RiDeleteBin6Line /></button>
          </div>
        </div>): null}
        </>
      }
    },
  ]
  const token = localStorage.getItem("admin");

    const handleOnClick = (id) => {
      if(id) {
        navigate(`/EditedClaimForm/${id}`)
      }
    }
    
    const handleDeleteClaim = (id) => {
      dispatch(deleteClaimAsync(id))
    }

    useEffect(() => {
      dispatch(getClaimsAsync())
    }, []);
  
    if (loading) return <LoadingMain  variant={'success'}/>
  return (
    <div>
      <DefaultNavbar />
      <Box sx={{
        height: 600,
        width: '100%',
        '& .header': {
          fontFamily: 'Raleway, sans-serif',  letterSpacing: '2px', textAlign: 'justify', fontWeight: 400, color:'white', fontSize: '15px', paddingRight:'40px', paddingLeft: '40px'
        },
      }}>
        <DataGrid
        rows={rows} 
        columns={columns} 
        sx={{
          backgroundColor:'#00AC9E',
          boxShadow: 2,
          border: 2,
          borderRadius: '25px',
          fontFamily: 'Raleway, sans-serif',  
          textAlign: 'center', 
          fontWeight: 400, 
          fontSize: '13px', 
          letterSpacing: '1px', 
          color: 'white',
          marginRight:'40px', 
          marginLeft: '40px',
          borderColor: 'white',
          '& .MuiDataGrid-cell:hover': {
            color: '#F3F3F3',
          },
      }}
        />
      </Box>
    </div >
  )
}
