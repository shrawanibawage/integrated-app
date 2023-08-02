import React from 'react';



  return (
    <div style={bgstyle}>
    <h1 style={{color:'#171732'}}>1</h1>
    <Paper style={stylePaper}>
        <table>
            <thead>
                <tr>
                <th>Hardware</th>
                <th>Capacity</th>
                <th>Availability</th>
                <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Set 1</td>
                    <td>{this.state.hardware_set1_capacity}</td>
                    <td>{this.state.hardware_set1_availability}</td>
                    <td> <input type="text" value={this.state.hardware_set1_checkin} onChange={this.handlehardware_set1_checkin} />
                    </td>
                    <td> <input type="text" value={this.state.hardware_set2_checkin} onChange={this.handlehardware_set2_checkin} />
                    </td>
                    <Button
                    type="primary"
                    htmlType="small"
                    onclick={this.handlecheckin}
                    className="hardware-button"
                    >
                    CHECKIN
                    </Button>
                </tr>
                <tr>
                    <td> Set 2</td>
                    <td>{this.state.hardware_set2_capacity}</td>
                    <td>{this.state.hardware_set2_availability}</td>
                    <td> <input type="text" value={this.state.hardware_set1_checkout} onChange={this.handlehardware_set1_checkout} />
                    </td>
                    <td> <input type="text" value={this.state.hardware_set2_checkout} onChange={this.handlehardware_set2_checkout} />
                    </td>
                    <Button
                    type="primary"
                    htmlType="small"
                    onclick={this.handlecheckout}
                    className="hardware-button"
                    >
                    CHECKOUT
                    </Button>
                </tr>
            </tbody>
        </table>
    </Paper>
    </div>
);


export default TableComponent;
