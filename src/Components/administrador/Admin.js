import React, {useState} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

import AdminProducts from './AdminProducts';

function Admin(){
    const [key, setKey] = useState('products');

    return(
        <Container>
            <h2> Administración</h2>
            <Tabs activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey='products' title="Productos">
                    <AdminProducts />
                </Tab>

            </Tabs>
        </Container>
    )
}

export default Admin;