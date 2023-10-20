import { socketService } from '../../services';

// api example:

export const getMarketData = () => {
    return socketService.get('/');
};

