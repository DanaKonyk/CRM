import React from 'react';
import Header from '../components/header';
import ToolBar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/status-label';

export interface PageProps {}

export default function Page(params: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <ToolBar action={<AddCompanyButton />}>
        <SearchInput />
      </ToolBar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="02.19.2023"
        />
      </CompanyTable>
    </>
  );
}
