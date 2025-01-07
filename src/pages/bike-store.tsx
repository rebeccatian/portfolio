import Link from 'next/link';
import React from 'react';

const BikeStore = () => (
    <div className="border m-10 sm:m-14 p-10">
      <Link className="text-green-500 ml-2 sm:ml-10 sm:pt-8 block" href="/">Back to Portfolio</Link>
      <div className="text-white m-2 sm:m-10">
        <h1 className="text-3xl mb-4">Bike Store SQL & Excel Project</h1>
        <h4 className="mb-2">
          Objective: Analyze bike sales data from multiple stores 
          across the U.S. for the years 2016, 2017, and 2018, using key
          business metrics to provide actionable insights through an 
          interactive Excel dashboard.
        </h4>
        <p className="text-sm mb-2 italic">The data sample is sourced from the <a href="https://www.sqlservertutorial.net/getting-started/sql-server-sample-database/" target="_blank" rel="noopener noreferrer">SQLServer Tutorial</a>.</p>
        <p>I selected the following metrics to evaluate business performance, including revenue and total units sold:</p>
        <ul className="list-disc ml-10">
            <li>Year</li>
            <li>Month</li>
            <li>Product Name</li>
            <li>Store Name</li>
            <li>Location</li>
        </ul>

        <div className="w-full h-1 bg-slate-300 opacity-30 my-4"></div>

        <h3 className="mb-4 text-2xl">Database Setup and SQL Query Development</h3>
        <p>First, I set up the database in Microsoft SQL Server, then wrote SQL queries to extract the relevant data. This process involved joining multiple tables and applying SQL functions to calculate revenue and total units sold. 
          See the <a href="https://github.com/rebeccatian/bike-store-sql/blob/main/query-data.sql">query-data.sql</a> file for the full code
        </p>
        <img className="m-4" width="400" src="/carbon.png" alt="SQL Query Screenshot"/>

        <div className="w-full h-1 bg-slate-300 opacity-30 my-4"></div>

        <h3 className="mb-4 text-2xl">Data Import and Pivot Table Creation</h3>
        <p>After obtaining the desired dataset, I imported it into Excel and created pivot tables to summarize key metrics. These pivot tables served as the foundation for visualizing business trends across different stores.
        </p>
        <img className="m-4" width="600" src="https://github.com/user-attachments/assets/d82b30f7-d67c-445a-a5f6-ad694a424b4b" alt="Excel Pivot Tables"/>

        <div className="w-full h-1 bg-slate-300 opacity-30 my-4"></div>

        <h3 className="mb-4 text-2xl">Chart Mapping and Interactive Dashboard</h3>
        <p>Once the pivot tables were configured, I mapped them to corresponding charts, carefully adjusting formatting and axis labels for clarity. Finally, I incorporated slicers to enable dynamic filtering, resulting in an interactive dashboard that allows users to easily explore and visualize the data.
        You can download the <a href="/Bike Store Project copy.xlsx">Excel file here</a> and see the tables and dashboards in action.
        </p>
        <video className="m-4" width="500" height="500" controls>
          <source src="/interactive-tables.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
  </div>
  
);

export default BikeStore;