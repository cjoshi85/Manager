import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Button } from './common';
import { saveEmployeeInfo, saveEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress = () => {
        const { name, phone, shift } = this.props.employee;
        this.props.saveEmployee({ name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
            <Card>
                <EmployeeForm props={this.props} />
                              <CardItem>
                    <Button onPress={this.onButtonPress}>
                        Create Employee
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee
    };
};

export default connect(mapStateToProps, { saveEmployeeInfo, saveEmployee })(EmployeeCreate);
