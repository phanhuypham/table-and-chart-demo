import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import Table from '../components/Table';
import Chart from '../components/Chart';

const tabIndexMapping = {
  TABLE_INDEX: 0,
  CHART_INDEX: 1,
}

const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {label: 'Table', icon: 'pi pi-fw pi-table'},
        {label: 'Chart', icon: 'pi pi-fw pi-chart-line'},
    ];

    const renderTabContent = () => {
      switch(activeIndex) {
        case tabIndexMapping.TABLE_INDEX:
          return <Table />
        case tabIndexMapping.CHART_INDEX:
          return <Chart />
        default:
          return null
      }
    }
    return (
        
        <div>
            <div className="card">
                <h5>Demo</h5>
                <TabMenu activeIndex={activeIndex} model={items} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
            <div>
              {renderTabContent()}
            </div>
        </div>
    );
}

export default Home;