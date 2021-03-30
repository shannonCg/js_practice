var test = [
    ['1', '組織A', '-', '-'],
    ['2', '組織A', '組織B', '-'],
    ['3', '組織A', '組織B', '組織C']
];

var orgNameMap = new Map();

function transToOrg(dataArr){
    // set orgNameMap
    for(const data of dataArr){
        // set orgId
        let orgId = data[0];
        
        // set orgName
        let orgName = data[1];
        if("-" !== data[3]){
            orgName = data[3];
        }else if ("-" !== data[2]){
            orgName = data[2];
        }
        orgNameMap.set(orgName, orgId);
    }

    // set orgArr
    let org = [];
    for(const data of dataArr){
        let orgId = data[0];
        let orgName = data[1];
        let orgParentId = "AAA";
        let orgLevel = "1";
        let orgLevelSeq = "AAA_";

        if("-" !== data[3]){
            orgName = data[3];
            orgParentId = orgNameMap.get(data[2]);
            orgLevel = "3";
            orgLevelSeq += orgNameMap.get(data[1])+"_"+orgParentId+"_";
        }else if ("-" !== data[2]){
            orgName = data[2];
            orgParentId = orgNameMap.get(data[1]);
            orgLevel = "2";
            orgLevelSeq += orgParentId+"_";
        }

        org.push({orgId, orgName, orgParentId, orgLevel, orgLevelSeq});
    }

    return org;
}

function insertOrgSql(org){
    return `
    insert into organize (
        organize_id,
        organize_name,
        parent_organize_id,
        organize_level,
        organize_level_seq
    )values(
        '${org.orgId}',
        '${org.orgName}',
        '${org.orgParentId}',
        '${org.orgLevel}',
        '${org.orgLevelSeq}',
    );
    `;
}

var parseOrgArr = transToOrg(test);
print(parseOrgArr);
for(const org of parseOrgArr){
    print(insertOrgSql(org));
}
