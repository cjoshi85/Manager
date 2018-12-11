import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, Button, CardItem, Confirm } from './common';
import EmployeeForm from './EmployeeForm'; 
import { saveEmployeeInfo, editEmployee, deleteEmployee } from '../actions';


class EmployeeEdit extends Component {

    state = {
        showModal: false
    };

    componentWillMount() {
        _.each(this.props.employeeData, (value, prop) => {
            this.props.saveEmployeeInfo({ prop, value });
        });
    }

    onDecline = () => {
        this.setState({
            showModal: false
        });
    }

    onAccept = () => {
        this.props.deleteEmployee(this.props.employeeData.uid);
    }

    onButtonPress = () => {
        const { name, phone, shift } = this.props.employee;
        this.props.editEmployee({ name, phone, shift, uid: this.props.employeeData.uid });
    }
    render() {
        return (
            <Card>
            <EmployeeForm props={this.props} />
                          <CardItem>
                <Button onPress={this.onButtonPress}>
                    Update Data
                </Button>
            </CardItem>
            <CardItem>
                <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                    Fire Employee
                </Button>
            </CardItem>
            <Confirm
                visible={this.state.showModal}
                onDecline={this.onDecline}
                onAccept={this.onAccept}
            >
            Are you sure you want to delete?
            </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        employee: state.employee
    };
};

export default connect(mapStateToProps, 
    { saveEmployeeInfo, editEmployee, deleteEmployee })(EmployeeEdit);
