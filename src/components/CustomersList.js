import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ cutomers }) => {
    return (
        <div>
            <div className='customer-list'>
                {
                    customers.map( c => 
                    <CustomerListItem
                        ket={c.dni}
                        customer={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </CustomerListItem>)
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;