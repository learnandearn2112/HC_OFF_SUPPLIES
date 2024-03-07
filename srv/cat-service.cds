// using my.bookshop as my from '../db/data-model';

// service CatalogService {
//     entity Books as projection on my.Books;
// }

using hc450.officesupplies as officesupplies from '../db/data-model';

service CatalogService {
    @odata.draft.enabled: true
    entity Products  as projection on officesupplies.Products;

    entity Suppliers as projection on officesupplies.Suppliers;
};
