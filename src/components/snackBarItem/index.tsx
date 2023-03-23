import { useEffect, useMemo, useState } from 'react';
import './index.css';
import { NotificationType, removeMessage } from '../popup';
import { ErrorIcon } from '../../assets/error';
import { InfoIcon } from '../../assets/info';
import { SuccessIcon } from '../../assets/success';
import { WarnIcon } from '../../assets/warn';

export interface SnackBarItemProps {
    id: number;
    message: string;
    duration: number;
    show: boolean;
    type: NotificationType;
}

// SnackBarItem is used for render each item. and manage item show or hide.
export const SnackBarItem = (props: SnackBarItemProps) => {
    const { message, id, duration, type, show: _show } = props;
    const [show, setShow] = useState(_show);
    
    useEffect(() => {
        if (show) {
            const timeId = setTimeout(() => {
                setShow(!show);
                removeMessage(id);
            }, duration);
            return () => clearTimeout(timeId);
        }
    }, [duration, id, show]);
    
    const typeClass = useMemo(() => { 
        switch (type) { 
            case NotificationType.error:
                return "error";
            case NotificationType.info:
                return "info";
            case NotificationType.success:
                return "success";
            case NotificationType.warning:
                return "warning";
        }
    }, [type])

    const typeIcon = useMemo(() => { 
        switch (type) { 
            case NotificationType.error:
                return <ErrorIcon />;
            case NotificationType.info:
                return <InfoIcon />;
            case NotificationType.success:
                return <SuccessIcon />
            case NotificationType.warning:
                return <WarnIcon />
        }
    }, [type]);

    return ( 
        <div data-testid="snackbarItemTestId" className={`${show ? "snackbar" : "snackbar hide"} ${typeClass}`}> 
            <div className="alert-wrapper">
                <div data-testid="errorIconTestId" className="alert-icon-box">
                    { typeIcon }
                </div>
                <div className="alert-text-box">
                    <p className="alert-text">{ message }</p>
                </div>
            </div>
        </div> 
    );
}