import { NotificationType } from '../popup';
import { render } from '@testing-library/react';
import { SnackBarItem, SnackBarItemProps } from './index';

describe('SnackBarItem', () => {
    const setup = (props: Partial<SnackBarItemProps> = {}) => {
        const initialProps: SnackBarItemProps = {
            id: 1,
            message: '',
            duration: 1000,
            show: true,
            type: NotificationType.success
        };
        const utils = render(<SnackBarItem {...initialProps} {...props} />);
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const snackbarItem = utils.getByTestId('snackbarItemTestId')
        return {
            ...utils,
            snackbarItem
        };
    }

    test('it should render the component', () => {
        const { snackbarItem } = setup();
        expect(snackbarItem).toBeTruthy();
    });

    test('it should render the ErrorIcon when props type is NotificationType.error', () => {
        const { queryByTestId } = setup({ type: NotificationType.error });
        const errorIcon = queryByTestId('errorIconTestId');
        expect(errorIcon).toBeTruthy();
    });
});