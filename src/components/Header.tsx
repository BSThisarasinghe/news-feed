import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;
type AppRoutesProps = {
}

const PageHeader = ({ }: AppRoutesProps) => {


    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" >
                News Feed
            </div>
        </Header>
    );
}

export { PageHeader };