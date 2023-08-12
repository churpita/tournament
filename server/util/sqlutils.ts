export class SqlUtils {
    public static AddWhereClauses(query: string, parameters: {column_name: string, value: any}[]): string {
        parameters.forEach(p => {
            if (p.value != undefined) {
                query = query.concat(`AND ${p.column_name} = ? `);
            }
        });
        return query;
    }
}