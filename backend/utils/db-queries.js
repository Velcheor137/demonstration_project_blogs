const {db} = require('../db/pool');

class DbQueriesHelper {

    async selectEmployeesUser(employee) {
        return await db.result(
            `SELECT n_user FROM adm.r_users_employees WHERE n_employee=$1`,
            [employee]
        );
    }

    async selectPositionsUser(position) {
        return await db.result(
            `SELECT n_user
            FROM adm.r_company_employee rce
            JOIN adm.r_users_employees rue ON rce.n_employee = rue.n_employee
            WHERE n_post=$1`,
            [position]
        );
    }

    async selectGroupsUser(group) {
        return await db.result(
            `SELECT n_user FROM service.r_user_group WHERE s_group=$1`,
            [group]
        );
    }

}

module.exports = new DbQueriesHelper();
