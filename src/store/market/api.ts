import { httpService } from '../../services';

// api example:

export const getMarketData = () => {
    return httpService.get('/mkt/markets/');
};
export const getConnectionOfSocket = () => {
    return httpService.get('/mkt/markets');
};
