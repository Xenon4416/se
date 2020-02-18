import {Breadcrumb} from "react-bootstrap";
import React from "react";

export class BreadcrumbV extends React.Component{
    render()
    {
        return (

                <Breadcrumb style={{backgroundColor: '#353a40'}}>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Teacher
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>View</Breadcrumb.Item>
                </Breadcrumb>

            );
    }
}
