import {useState, useRef} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import Typography from '@mui/material/Typography';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import {RocketInfoRenderer, MissionDateRenderer} from './CustomCellRenderers';
import {MissionData} from "../features/missionsSlice";
import TextField from '@mui/material/TextField';

type MissionGridViewProps =
  {
    missionData: MissionData[]
  }


const MissionGridView = ({missionData}: MissionGridViewProps) => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState(missionData);
  const [selectedMission, setSelectedMission] = useState(null)

  const gridRef = useRef(null);
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  };

  const onSelectionChanged = () => {
    // @ts-ignore
    const selectedRows = gridApi.getSelectedRows();
    if (selectedRows) {
      setSelectedMission(selectedRows[0].missionName)
    }
  }

  const searchHandler = (e: any) => setRowData(missionData.filter(data => data.missionName.includes(e.target.value)))

  return (
    <>
      <TextField sx={{mb: 4}} id="standard-basic" label="Search Mission Name" variant="standard"
                 onChange={searchHandler}/>
      <div data-testid="missionsGrid" className="ag-theme-alpine-dark" style={{height: 720, width: '100%'}}>
        <AgGridReact
          frameworkComponents={{
            rocketInfoRenderer: RocketInfoRenderer,
            missionDateRenderer: MissionDateRenderer,
          }}
          ref={gridRef}
          rowData={rowData}
          rowSelection={'single'}
          onGridReady={onGridReady}
          onSelectionChanged={onSelectionChanged}>
          <AgGridColumn field="flightNumber"/>
          <AgGridColumn field="missionName" sortable={true} filter={true}/>
          <AgGridColumn field="missionDate" sortable={true} cellRenderer="missionDateRenderer"/>
          <AgGridColumn field="" cellRenderer="rocketInfoRenderer"/>
        </AgGridReact>
        {selectedMission &&
          <Typography variant="body1" sx={{color: 'aliceblue'}} gutterBottom>
            {selectedMission}
          </Typography>
        }
      </div>
    </>
  );
};


export default MissionGridView;