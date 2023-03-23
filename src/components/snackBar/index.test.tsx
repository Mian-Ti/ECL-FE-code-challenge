import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Snackbar } from './index';
import { NotificationType } from '../popup';

describe('<Snackbar />', () => {
    const mockMessages = [
        {
            id: 1,
            type: NotificationType.error,
            show: true,
            message: 'Error Message',
        },
        {
            id: 2,
            type: NotificationType.success,
            show: true,
            message: 'Success Message',
        },
    ];
    const duration = 1000;

    it('should render snackbar with all of message', () => {
        render(<Snackbar messages={mockMessages} duration={duration} />);
        expect(screen.getByText('Error Message')).toBeDefined();
        expect(screen.getByText('Success Message')).toBeDefined();
    });
});