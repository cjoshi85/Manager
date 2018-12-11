import React from 'react';
import { View, Text, Picker } from 'react-native';
import { CardItem, Input } from './common';

const LoginForm = (props) => {
    const { employee, saveEmployeeInfo } = props.props;
    return (
        <View>
         <CardItem>
                    <Input
                        label="Name"
                        placeholder="Enter name"
                        value={employee.name}
                        onChangeText={
                            value => saveEmployeeInfo({ prop: 'name', value })
                        }
                    />
                </CardItem>
                <CardItem>
                    <Input
                        label="Phone"
                        placeholder="9832259346"
                        value={employee.phone}
                        onChangeText={
                            value => saveEmployeeInfo({ prop: 'phone', value })
                        }
                    />
                </CardItem>
                <CardItem style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}> Shift </Text>
                    <Picker
                        selectedValue={employee.shift}
                        onValueChange={
                            value => saveEmployeeInfo({ prop: 'shift', value })
                        }   
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardItem>
        </View>
    );
};

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default LoginForm;
