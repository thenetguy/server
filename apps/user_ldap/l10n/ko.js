OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "매핑을 비울 수 없습니다.",
    "Failed to delete the server configuration" : "서버 설정을 삭제할 수 없습니다.",
    "The configuration is valid and the connection could be established!" : "설정 정보가 올바르고 연결할 수 있습니다!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "설정 정보가 올바르지만 바인딩이 실패하였습니다. 서버 설정과 인증 정보를 확인하십시오.",
    "The configuration is invalid. Please have a look at the logs for further details." : "설정이 올바르지 않습니다. 자세한 사항은 로그를 참고하십시오.",
    "No action specified" : "동작이 지정되지 않음",
    "No configuration specified" : "설정이 지정되지 않음",
    "No data specified" : "데이터가 지정되지 않음",
    " Could not set configuration %s" : " 설정 %s을(를) 지정할 수 없음",
    "Deletion failed" : "삭제 실패",
    "Take over settings from recent server configuration?" : "최근 서버 설정을 다시 불러오시겠습니까?",
    "Keep settings?" : "설정을 유지하겠습니까?",
    "{nthServer}. Server" : "{nthServer}. 서버",
    "Cannot add server configuration" : "서버 설정을 추가할 수 없음",
    "mappings cleared" : "매핑 삭제됨",
    "Success" : "성공",
    "Error" : "오류",
    "Please specify a Base DN" : "기본 DN을 입력하십시오",
    "Could not determine Base DN" : "기본 DN을 결정할 수 없음",
    "Please specify the port" : "포트를 입력하십시오",
    "Configuration OK" : "설정 올바름",
    "Configuration incorrect" : "설정 올바르지 않음",
    "Configuration incomplete" : "설정 불완전함",
    "Select groups" : "그룹 선택",
    "Select object classes" : "객체 클래스 선택",
    "Select attributes" : "속성 선택",
    "Connection test succeeded" : "연결 시험 성공",
    "Connection test failed" : "연결 시험 실패",
    "Do you really want to delete the current Server Configuration?" : "현재 서버 설정을 지우시겠습니까?",
    "Confirm Deletion" : "삭제 확인",
    "_%s group found_::_%s groups found_" : ["그룹 %s개 찾음"],
    "_%s user found_::_%s users found_" : ["사용자 %s명 찾음"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "사용자 표시 이름을 결정할 수 없습니다. 고급 LDAP 설정에서 직접 입력하십시오.",
    "Could not find the desired feature" : "필요한 기능을 찾을 수 없음",
    "Invalid Host" : "잘못된 호스트",
    "Server" : "서버",
    "User Filter" : "사용자 필터",
    "Login Filter" : "로그인 필터",
    "Group Filter" : "그룹 필터",
    "Save" : "저장",
    "Test Configuration" : "설정 시험",
    "Help" : "도움말",
    "Groups meeting these criteria are available in %s:" : "이 조건을 만족하는 그룹은 %s에 있습니다:",
    "only those object classes:" : "다음 객체 클래스만:",
    "only from those groups:" : "다음 그룹에서만:",
    "Edit raw filter instead" : "필터 직접 편집",
    "Raw LDAP filter" : "LDAP 필터",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "이 필터는 %s에 접근할 수 있는 LDAP 그룹을 설정합니다.",
    "Test Filter" : "필터 시험",
    "groups found" : "그룹 찾음",
    "Users login with this attribute:" : "다음 속성으로 사용자 로그인:",
    "LDAP Username:" : "LDAP 사용자 이름:",
    "LDAP Email Address:" : "LDAP 이메일 주소:",
    "Other Attributes:" : "기타 속성:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "로그인을 시도할 때 적용할 필터를 입력하십시오. %%uid는 로그인 동작의 사용자 이름으로 대체됩니다. 예: \"uid=%%uid\"",
    "1. Server" : "1. 서버",
    "%s. Server:" : "%s. 서버:",
    "Add Server Configuration" : "서버 설정 추가",
    "Delete Configuration" : "설정 삭제",
    "Host" : "호스트",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "SSL을 사용하지 않으면 프로토콜을 입력하지 않아도 됩니다. SSL을 사용하려면 ldaps://를 입력하십시오.",
    "Port" : "포트",
    "User DN" : "사용자 DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "바인딩 작업을 수행할 클라이언트 사용자 DN입니다. 예를 들어서 uid=agent,dc=example,dc=com입니다. 익명 접근을 허용하려면 DN과 암호를 비워 두십시오.",
    "Password" : "암호",
    "For anonymous access, leave DN and Password empty." : "익명 접근을 허용하려면 DN과 암호를 비워 두십시오.",
    "One Base DN per line" : "기본 DN을 한 줄에 하나씩 입력하십시오",
    "You can specify Base DN for users and groups in the Advanced tab" : "고급 탭에서 사용자 및 그룹에 대한 기본 DN을 지정할 수 있습니다.",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "자동 LDAP 요청을 줄입니다. 대형 사이트에서 유용하지만 LDAP에 관한 지식이 필요합니다.",
    "Manually enter LDAP filters (recommended for large directories)" : "수동으로 LDAP 필터 입력(대형 사이트에 추천)",
    "Limit %s access to users meeting these criteria:" : "다음 조건을 만족하는 사용자만 %s 접근 허용:",
    "The filter specifies which LDAP users shall have access to the %s instance." : "이 필터는 %s에 접근할 수 있는 LDAP 사용자를 설정합니다.",
    "users found" : "사용자 찾음",
    "Saving" : "저장 중",
    "Back" : "뒤로",
    "Continue" : "계속",
    "LDAP" : "LDAP",
    "Expert" : "전문가",
    "Advanced" : "고급",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>경고:</b> user_ldap, user_webdavauth 앱은 서로 호환되지 않습니다. 예상하지 못한 행동을 할 수도 있습니다. 시스템 관리자에게 연락하여 둘 중 하나의 앱의 사용을 중단하십시오.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>경고:</b> PHP LDAP 모듈이 비활성화되어 있거나 설치되어 있지 않습니다. 백엔드를 사용할 수 없습니다. 시스템 관리자에게 설치를 요청하십시오.",
    "Connection Settings" : "연결 설정",
    "Configuration Active" : "구성 활성",
    "When unchecked, this configuration will be skipped." : "선택하지 않으면 이 설정을 무시합니다.",
    "Backup (Replica) Host" : "백업(복제) 호스트",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "추가적인 백업 호스트를 지정합니다. 기본 LDAP/AD 서버의 복사본이어야 합니다.",
    "Backup (Replica) Port" : "백업(복제) 포트",
    "Disable Main Server" : "주 서버 비활성화",
    "Only connect to the replica server." : "복제 서버에만 연결합니다.",
    "Case insensitive LDAP server (Windows)" : "LDAP 서버에서 대소문자 구분하지 않음(Windows)",
    "Turn off SSL certificate validation." : "SSL 인증서 유효성 검사를 해제합니다.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "테스트 목적으로만 사용하십시오! 이 옵션을 사용해야만 연결할 수 있으면 %s 서버에 LDAP 서버의 SSL 인증서를 설치하십시오.",
    "Cache Time-To-Live" : "캐시 유지 시간",
    "in seconds. A change empties the cache." : "초 단위입니다. 항목 변경 시 캐시가 갱신됩니다.",
    "Directory Settings" : "디렉터리 설정",
    "User Display Name Field" : "사용자의 표시 이름 필드",
    "The LDAP attribute to use to generate the user's display name." : "사용자 표시 이름을 생성할 때 사용할 LDAP 속성입니다.",
    "Base User Tree" : "기본 사용자 트리",
    "One User Base DN per line" : "사용자 DN을 한 줄에 하나씩 입력하십시오",
    "User Search Attributes" : "사용자 검색 속성",
    "Optional; one attribute per line" : "추가적, 한 줄에 하나의 속성을 입력하십시오",
    "Group Display Name Field" : "그룹의 표시 이름 필드",
    "The LDAP attribute to use to generate the groups's display name." : "그룹 표시 이름을 생성할 때 사용할 LDAP 속성입니다.",
    "Base Group Tree" : "기본 그룹 트리",
    "One Group Base DN per line" : "그룹 기본 DN을 한 줄에 하나씩 입력하십시오",
    "Group Search Attributes" : "그룹 검색 속성",
    "Group-Member association" : "그룹-구성원 연결",
    "Nested Groups" : "그룹 안의 그룹",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "이 설정을 사용하면 그룹 안의 그룹을 지원합니다.(그룹 구성원 속성이 DN을 포함하는 경우에만 사용 가능)",
    "Paging chunksize" : "페이지 청크 크기",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "사용자와 그룹 목록 가져오기와 같은 다량의 결과를 반환하는 페이지를 지정한 LDAP 검색에 사용할 청크 크기입니다.(0으로 설정하면 이러한 검색을 할 때 페이지를 사용하지 않습니다.)",
    "Special Attributes" : "특수 속성",
    "Quota Field" : "할당량 필드",
    "Quota Default" : "기본 할당량",
    "in bytes" : "바이트 단위",
    "Email Field" : "이메일 필드",
    "User Home Folder Naming Rule" : "사용자 홈 폴더 이름 규칙",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "사용자 이름을 사용하려면 비워 두십시오(기본값). 기타 경우 LDAP/AD 속성을 지정하십시오.",
    "Internal Username" : "내부 사용자 이름",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "기본적으로 내부 사용자 이름은 UUID 속성에서 생성됩니다. 사용자 이름이 중복되지 않고 문자열을 변환할 필요가 없도록 합니다. 내부 사용자 이름에는 다음과 같은 문자열만 사용할 수 있습니다: [a-zA-Z0-9_.@-] 다른 문자열은 ASCII에 해당하는 문자열로 변경되거나 없는 글자로 취급됩니다. 충돌하는 경우 숫자가 붙거나 증가합니다. 내부 사용자 이름은 내부적으로 사용자를 식별하는 데 사용되며, 사용자 홈 폴더의 기본 이름입니다. 또한 *DAV와 같은 외부 URL의 일부로 사용됩니다. 이 설정을 사용하면 기본 설정을 재정의할 수 있습니다. ownCloud 5 이전의 행동을 사용하려면 아래 필드에 사용자의 표시 이름 속성을 입력하십시오. 비워 두면 기본 설정을 사용합니다. 새로 추가되거나 매핑된 LDAP 사용자에게만 적용됩니다.",
    "Internal Username Attribute:" : "내부 사용자 이름 속성:",
    "Override UUID detection" : "UUID 확인 재정의",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "기본적으로 UUID 속성은 자동적으로 감지됩니다. UUID 속성은 LDAP 사용자와 그룹을 정확히 식별하는 데 사용됩니다. 지정하지 않은 경우 내부 사용자 이름은 UUID를 기반으로 생성됩니다. 이 설정을 다시 정의하고 임의의 속성을 지정할 수 있습니다. 사용자와 그룹 모두에게 속성을 적용할 수 있고 중복된 값이 없는지 확인하십시오. 비워 두면 기본 설정을 사용합니다. 새로 추가되거나 매핑된 LDAP 사용자와 그룹에만 적용됩니다.",
    "UUID Attribute for Users:" : "사용자 UUID 속성:",
    "UUID Attribute for Groups:" : "그룹 UUID 속성:",
    "Username-LDAP User Mapping" : "사용자 이름-LDAP 사용자 매핑",
    "Clear Username-LDAP User Mapping" : "사용자 이름-LDAP 사용자 매핑 비우기",
    "Clear Groupname-LDAP Group Mapping" : "그룹 이름-LDAP 그룹 매핑 비우기"
},
"nplurals=1; plural=0;");
