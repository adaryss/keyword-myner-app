import { GoogleAdsApi } from "google-ads-api";

const client = new GoogleAdsApi({
    client_id:
        "301471814791-95gsuggiipi2f3t4f5mo1d31808qic7i.apps.googleusercontent.com",
    client_secret: "Y6-jhc0ixXTa4wvvC8om_MQA",
    developer_token: "AHwO6OuwOVpcY6feK1rXvQ",
});

const customer = client.Customer({
    customer_account_id: "162-177-8480",
    refresh_token:
        "1//09gll7_w0K5G4CgYIARAAGAkSNwF-L9IrwcUEby8RSSQ0PJ01nU3JUN-yXzdSz_yKsP_ezcvhllVB9T9VGQhq5VoHFr8vLF0KOPc",
});

export const test = customer.campaigns.list();
