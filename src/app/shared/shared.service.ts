export class SharedService {

    public static baseUrl = 'http://localhost:5000/api';
    public static productUrl = `${SharedService.baseUrl}/product`;
    public static orderUrl = `${SharedService.baseUrl}/order`;
    public static adminUrl = `${SharedService.baseUrl}/admin`;
}