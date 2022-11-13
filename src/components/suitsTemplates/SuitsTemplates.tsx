import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTemplatesAsync,
  deleteTemplateAsync
} from '../../store/features/templates/templatesSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { DefaultNavbar } from '../navbar/DefaultNavbar.tsx';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { LoadingMain } from '../common/LoadingMain.tsx';

export const SuitsTemplates = () => {
  const dispatch = useDispatch();
  const { templates, loading } = useSelector((state) => state.templates);

  let rows;
  if (templates) {
    rows = templates.map((template) => {
      return {
        id: template._id,
        docType: template.name,
        docDate: new Date(template.createdAt).toDateString()
      };
    });
  }

  const columns: GridColDef[] = [
    {
      headerName: 'TIPO DE DOCUMENTO',
      field: 'docType',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 400
    },
    {
      headerName: 'FECHA DE DOCUMENTO',
      field: 'docDate',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 400
    },
    {
      headerName: 'ACCIONES',
      field: 'actions',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 400,
      renderCell: (params) => {
        return (
          <div className="stepNumberContainer">
            <div className="iconBorder">
              <button
                className="iconBorder__icon"
                style={{ backgroundColor: 'transparent', border: 'none' }}
                onClick={() => handleOnClick(params.row.id)}
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        );
      }
    }
  ];

  const handleOnClick = (id) => {
    dispatch(deleteTemplateAsync(id));
    setId('');
  };

  useEffect(() => {
    dispatch(getTemplatesAsync());
  }, []);

  if (loading) return <LoadingMain variant={'danger'} />;

  return (
    <div>
      <DefaultNavbar />
      <Box
        sx={{
          height: 600,
          width: '100%',
          '& .super-app-theme--header': {
            fontFamily: 'Raleway, sans-serif',
            letterSpacing: '2px',
            textAlign: 'justify',
            fontWeight: 1000,
            color: 'white',
            fontSize: '30px',
            paddingRight: '40px',
            paddingLeft: '40px'
          }
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            backgroundColor: '#4E4B99',
            boxShadow: 2,
            border: 2,
            borderRadius: '25px',
            fontFamily: 'Raleway, sans-serif',
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '15px',
            letterSpacing: '1px',
            color: 'white',
            marginRight: '40px',
            marginLeft: '40px',
            borderColor: 'white',
            '& .MuiDataGrid-cell:hover': {
              color: '#F3F3F3'
            }
          }}
        />
      </Box>
      {/* </div> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}
      >
        <Link to="/templateForm">
          <button className="outlinedButton__red">AGREGAR NUEVO FORMATO</button>
        </Link>
      </div>
    </div>
  );
};
