import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { PageHeader, PageFooter } from '../components';

const { Content, Footer } = Layout;

type AppRoutesProps = {
}

const RestrictedRoutes: FC<AppRoutesProps> = ({ }) => {

    return (
        <Layout>
            <PageHeader />
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 380 }}><Outlet /></div>
            </Content>
            <PageFooter />
        </Layout>
    )
}

export default RestrictedRoutes;