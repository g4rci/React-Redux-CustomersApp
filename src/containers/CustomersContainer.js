import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        'dni': '27000000',
        'name': 'Juan Perez',
        'age': 37
    },
    {
        'dni': '30000000',
        'name': 'Otro',
        'age': 37
    },
    {
        'dni': '24000000',
        'name': 'Luis Martinez',
        'age': 32
    }
];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    } 
    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'} >
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);