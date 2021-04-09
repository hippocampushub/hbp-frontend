import * as React from 'react';
import {Button, ButtonBaseProps} from '@material-ui/core';
import buttonsStyle from "./button.module.scss";
import {SvgIconComponent} from "@material-ui/icons";
import {ForwardedRef, forwardRef, PropsWithChildren} from "react";

export interface IExpandButton extends PropsWithChildren<any> {
    label: string,
    icon: React.ReactNode,
    variant?: string,
    expanded: boolean,
    onClick?: () => void
}

const ExpandButton = React.forwardRef((props: any, ref: ForwardedRef<any>) =>
        <Button
            {...props}
            ref={ref}
            onClick={props?.onClick}
            className={`${buttonsStyle['expand-button']}`}>
            {props?.expanded ?
                <div>
                    {props?.icon} {props?.label}
                </div> :
                <div>
                    {props?.icon}
                </div>
            }
        </Button>);

export default ExpandButton;