/* DP-700 question bank — extracted from source.pdf; answers strictly from PDF (answer image when present, else 官方答案 text). Image content transcribed to text. */
const QUESTIONS_DP_700 = [
 {
  "id": "dp700-q001",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "将DataAnalyst组添加到WorkspaceA的Viewer角色。",
    "textEn": "Add the DataAnalyst group to the Viewer role for WorkspaceA.",
    "textZh": "将DataAnalyst组添加到WorkspaceA的Viewer角色。"
   },
   {
    "id": "B",
    "text": "与DataAnalysts 组共享lakehouse，并授予默认语义模型上的Build reports 权限。",
    "textEn": "Share the lakehouse with the DataAnalysts group and grant the Build reports on the default semantic model permission.",
    "textZh": "与DataAnalysts 组共享lakehouse，并授予默认语义模型上的Build reports 权限。"
   },
   {
    "id": "C",
    "text": "与DataAnalysts组共享lakehouse，并授予Read all SQL Endpoint data权限。",
    "textEn": "Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.",
    "textZh": "与DataAnalysts组共享lakehouse，并授予Read all SQL Endpoint data权限。"
   },
   {
    "id": "D",
    "text": "与 DataAnalysts 组共享lakehouse，并授予 Read all Apache Spark 权限。",
    "textEn": "Share the lakehouse with the DataAnalysts group and grant the Read all Apache Spark permission.",
    "textZh": "与 DataAnalysts 组共享lakehouse，并授予 Read all Apache Spark 权限。"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "您需要确保数据分析师可以访问gold层lakehouse。\n您应该怎么做？",
  "stemZh": "您需要确保数据分析师可以访问gold层lakehouse。\n您应该怎么做？",
  "stemEn": "You need to ensure that the data analysts can access the gold layer lakehouse.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nFabric权限管理：如何为用户或用户组分配适当的权限以访问数据。\nSQL Endpoint权限：理解如何通过SQL Endpoint访问数据。\n数据安全：确保不同用户组的权限符合业务需求和安全要求。\n2. 选项分析\nA. Add the DataAnalyst group to the Viewer role for WorkspaceA.\n错误：Viewer角色仅允许查看工作区内容，但无法提供对Lakehouse中SQLEndpoin数据的访问权限。\nB. Share the lakehouse with the DataAnalysts group and grant the Build reports on the default semantic model permission.\n错误：此权限仅允许用户基于默认语义模型构建报告，但无法直接访问Lakehouse中的SQL Endpoint数据。\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n正确：此选项充许DataAnalysts组访问Lakehouse中的SQL Endpoint数据，同时符合题目要求，即数据分析师只能访问金层数据。\nD. Share the lakehouse with the DataAnalysts group and grant the Read all Apache Spark permission.\n错误：Apache Spark权限主要用于数据工程师进行数据处理和分析，与数据分析师的需求不符。\n3. 我选的答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n4. 官方答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据题自要求，数据分析师只能访问金层数据，而SQL Endpoint权限是最适合的选择，能够满足数据分析师的访问需求，同时符合安全要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nFabric权限管理：如何为用户或用户组分配适当的权限以访问数据。\nSQL Endpoint权限：理解如何通过SQL Endpoint访问数据。\n数据安全：确保不同用户组的权限符合业务需求和安全要求。\n2. 选项分析\nA. Add the DataAnalyst group to the Viewer role for WorkspaceA.\n错误：Viewer角色仅允许查看工作区内容，但无法提供对Lakehouse中SQLEndpoin数据的访问权限。\nB. Share the lakehouse with the DataAnalysts group and grant the Build reports on the default semantic model permission.\n错误：此权限仅允许用户基于默认语义模型构建报告，但无法直接访问Lakehouse中的SQL Endpoint数据。\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n正确：此选项充许DataAnalysts组访问Lakehouse中的SQL Endpoint数据，同时符合题目要求，即数据分析师只能访问金层数据。\nD. Share the lakehouse with the DataAnalysts group and grant the Read all Apache Spark permission.\n错误：Apache Spark权限主要用于数据工程师进行数据处理和分析，与数据分析师的需求不符。\n3. 我选的答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n4. 官方答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据题自要求，数据分析师只能访问金层数据，而SQL Endpoint权限是最适合的选择，能够满足数据分析师的访问需求，同时符合安全要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nFabric权限管理：如何为用户或用户组分配适当的权限以访问数据。\nSQL Endpoint权限：理解如何通过SQL Endpoint访问数据。\n数据安全：确保不同用户组的权限符合业务需求和安全要求。\n2. 选项分析\nA. Add the DataAnalyst group to the Viewer role for WorkspaceA.\n错误：Viewer角色仅允许查看工作区内容，但无法提供对Lakehouse中SQLEndpoin数据的访问权限。\nB. Share the lakehouse with the DataAnalysts group and grant the Build reports on the default semantic model permission.\n错误：此权限仅允许用户基于默认语义模型构建报告，但无法直接访问Lakehouse中的SQL Endpoint数据。\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n正确：此选项充许DataAnalysts组访问Lakehouse中的SQL Endpoint数据，同时符合题目要求，即数据分析师只能访问金层数据。\nD. Share the lakehouse with the DataAnalysts group and grant the Read all Apache Spark permission.\n错误：Apache Spark权限主要用于数据工程师进行数据处理和分析，与数据分析师的需求不符。\n3. 我选的答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n4. 官方答案\nC. Share the lakehouse with the DataAnalysts group and grant the Read all SQL Endpoint data permission.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据题自要求，数据分析师只能访问金层数据，而SQL Endpoint权限是最适合的选择，能够满足数据分析师的访问需求，同时符合安全要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 1,
  "pdfPage": 1,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 1",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 1",
  "pdfQuestionNum": 1,
  "topic": 1,
  "caseStudyId": "dp700-case-1",
  "caseStudyText": "案例研究-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕充许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。\n单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个“所有信息“选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击问题\"按钮返回到问题。\n概述。公司概述-\nContoso，Ltd.是一家在线零售公司，计划通过迁移到Fabric来现代化其分析平台。公司计划开始使用Fabric进行营销分析。\n概述。IT 结构-\n公司的IT部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用Power Query和T-SQL编写查询。\n现有环境。Fabric-\nContoso有一个名为Cap1的F64容量。所有Fabric用户都被允许创建项目。\nContoso有两个工作区，分别是WorkspaceA和WorkspaceB，目前使用Pro license模式。\n现有环境。源系统-\nContoso有一个名为POS1的销售点（POS）系统，该系统使用Azure Virtual Machines上的SQL Server实例，与Fabric位于同一个Microsoft Entra租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为MAR1的软件即服务(SaaS）在线营销应用程序。MAR1有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用REST APIs从MAR1导出数据。每个实体都有不同的端点。\nContoso已使用MAR1一年。前几年的数据存储在Amazon Simple Storage Service(Amazon S3）存储桶中的Parquet文件中。这些文件共有12个，大小从300 MB到900 MB不等，与电子邮件交互相关。\n现有环境。产品数据-\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure-\nContoso有一个Microsoft Entra租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的Azure DevOps组织，并为与Fabric相关的存储库创建了一个新项目。\n现有环境。用户问题-\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso希望通过使用Fabric将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso计划创建以下两个lakehouses:\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso计划在Fabric中使用Azure Repos 进行源代码控制。\n需求。技术需求-\n新的lakehouses必须遵循使用以下三个层次的medallion architecture：bronze、silver和gold。将需要广泛的数据清理以将MAR1数据填充到silver层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充lakehouses的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自Amazon S3存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在lakehouses中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以Delta格式落地到Lakehouse1的 bronze层。\n在数据落地到bronze层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和notebooks必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在WorkspaceB中。\n每周一次，必须删除不再被Delta表日志引用的旧文件。\n需求。数据转换-\n在POS1产品数据中，ProductID值是唯一的。gold层中的产品维度必须仅包含产品列表中的活跃产品。活跃产品由IsActive值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。数据安全-\nFabric中的安全性必须满足以下要求：\n数据工程师必须对所有lakehouses及其底层文件具有读写访问权限。\n数据分析师只能对gold层中的Delta表具有读取访问权限。\n数据分析师不得访问bronze和silver层中的数据。\n数据工程师必须能够在WorkspaceA中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕充许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。\n单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个“所有信息“选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击问题\"按钮返回到问题。\n概述。公司概述-\nContoso，Ltd.是一家在线零售公司，计划通过迁移到Fabric来现代化其分析平台。公司计划开始使用Fabric进行营销分析。\n概述。IT 结构-\n公司的IT部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用Power Query和T-SQL编写查询。\n现有环境。Fabric-\nContoso有一个名为Cap1的F64容量。所有Fabric用户都被允许创建项目。\nContoso有两个工作区，分别是WorkspaceA和WorkspaceB，目前使用Pro license模式。\n现有环境。源系统-\nContoso有一个名为POS1的销售点（POS）系统，该系统使用Azure Virtual Machines上的SQL Server实例，与Fabric位于同一个Microsoft Entra租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为MAR1的软件即服务(SaaS）在线营销应用程序。MAR1有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用REST APIs从MAR1导出数据。每个实体都有不同的端点。\nContoso已使用MAR1一年。前几年的数据存储在Amazon Simple Storage Service(Amazon S3）存储桶中的Parquet文件中。这些文件共有12个，大小从300 MB到900 MB不等，与电子邮件交互相关。\n现有环境。产品数据-\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure-\nContoso有一个Microsoft Entra租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的Azure DevOps组织，并为与Fabric相关的存储库创建了一个新项目。\n现有环境。用户问题-\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso希望通过使用Fabric将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso计划创建以下两个lakehouses:\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso计划在Fabric中使用Azure Repos 进行源代码控制。\n需求。技术需求-\n新的lakehouses必须遵循使用以下三个层次的medallion architecture：bronze、silver和gold。将需要广泛的数据清理以将MAR1数据填充到silver层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充lakehouses的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自Amazon S3存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在lakehouses中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以Delta格式落地到Lakehouse1的 bronze层。\n在数据落地到bronze层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和notebooks必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在WorkspaceB中。\n每周一次，必须删除不再被Delta表日志引用的旧文件。\n需求。数据转换-\n在POS1产品数据中，ProductID值是唯一的。gold层中的产品维度必须仅包含产品列表中的活跃产品。活跃产品由IsActive值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。数据安全-\nFabric中的安全性必须满足以下要求：\n数据工程师必须对所有lakehouses及其底层文件具有读写访问权限。\n数据分析师只能对gold层中的Delta表具有读取访问权限。\n数据分析师不得访问bronze和silver层中的数据。\n数据工程师必须能够在WorkspaceA中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions.\nClicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q002",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a lakehouse",
    "textEn": "a lakehouse",
    "textZh": "a lakehouse"
   },
   {
    "id": "B",
    "text": "an eventhouse",
    "textEn": "an eventhouse",
    "textZh": "an eventhouse"
   },
   {
    "id": "C",
    "text": "a datamart",
    "textEn": "a datamart",
    "textZh": "a datamart"
   },
   {
    "id": "D",
    "text": "a warehouse",
    "textEn": "a warehouse",
    "textZh": "a warehouse"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区。\n你有半结构化数据。\n你需要使用 T-SQL、KQL 和 Apache Spark 来读取数据。数据将仅通过 Spark 写入。\n你应该使用什么来存储数据？",
  "stemZh": "你有一个 Fabric 工作区。\n你有半结构化数据。\n你需要使用 T-SQL、KQL 和 Apache Spark 来读取数据。数据将仅通过 Spark 写入。\n你应该使用什么来存储数据？",
  "stemEn": "You have a Fabric workspace.\nYou have semi-structured data.\nYou need to read the data by using T-SQL, KQL, and Apache Spark. The data will only be written by using Spark.\nWhat should you use to store the data?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中不同存储选项的用途和适用场景，包括Lakehouse、Eventhouse、Datamart和Warehouse。\n重点在于理解如何选择适合的存储类型以支持T-SQL、KQL和Apache Spark的读取，同时满足数据写入方式为Spark的要求。\n2. 独立分析每个选项\nA. a lakehouse：正确。Lakehouse是专为处理半结构化和非结构化数据而设计的存储解决方案。它支持Apache Spark进行数据写入，同时可以通过T-SQL和KQL进行数据读取，非常适合本题的需求。\nB. an eventhouse：错误。Eventhouse主要用于处理事件驱动的数据流，通常与实时数据处理相关，不适合存储半结构化数据，也不支持Spark写入。\nC. a datamart：错误。Datamart主要用于结构化数据的分析，通常与T-SQL查询相关，但不支持KQL或Spark写入，且不适合半结构化数据的存储。\nD. a warehouse：错误。Warehouse是专为结构化数据设计的存储解决方案，适合传统的SQL分析，但不支持KQL或Spark写入，也不适合半结构化数据。\n3. 我的选择\n我选择的答案是：A. a lakehouse\n4. 官方答案\n官方答案是：A. a lakehouse\n5. 比较与重新思考\n我的答案与官方答案一致。\n原因：Lakehouse是唯一能够满足题目要求的存储选项，支持半结构化数据的存储、Spark写入以及T-SQL和KQL读取。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中不同存储选项的用途和适用场景，包括Lakehouse、Eventhouse、Datamart和Warehouse。\n重点在于理解如何选择适合的存储类型以支持T-SQL、KQL和Apache Spark的读取，同时满足数据写入方式为Spark的要求。\n2. 独立分析每个选项\nA. a lakehouse：正确。Lakehouse是专为处理半结构化和非结构化数据而设计的存储解决方案。它支持Apache Spark进行数据写入，同时可以通过T-SQL和KQL进行数据读取，非常适合本题的需求。\nB. an eventhouse：错误。Eventhouse主要用于处理事件驱动的数据流，通常与实时数据处理相关，不适合存储半结构化数据，也不支持Spark写入。\nC. a datamart：错误。Datamart主要用于结构化数据的分析，通常与T-SQL查询相关，但不支持KQL或Spark写入，且不适合半结构化数据的存储。\nD. a warehouse：错误。Warehouse是专为结构化数据设计的存储解决方案，适合传统的SQL分析，但不支持KQL或Spark写入，也不适合半结构化数据。\n3. 我的选择\n我选择的答案是：A. a lakehouse\n4. 官方答案\n官方答案是：A. a lakehouse\n5. 比较与重新思考\n我的答案与官方答案一致。\n原因：Lakehouse是唯一能够满足题目要求的存储选项，支持半结构化数据的存储、Spark写入以及T-SQL和KQL读取。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中不同存储选项的用途和适用场景，包括Lakehouse、Eventhouse、Datamart和Warehouse。\n重点在于理解如何选择适合的存储类型以支持T-SQL、KQL和Apache Spark的读取，同时满足数据写入方式为Spark的要求。\n2. 独立分析每个选项\nA. a lakehouse：正确。Lakehouse是专为处理半结构化和非结构化数据而设计的存储解决方案。它支持Apache Spark进行数据写入，同时可以通过T-SQL和KQL进行数据读取，非常适合本题的需求。\nB. an eventhouse：错误。Eventhouse主要用于处理事件驱动的数据流，通常与实时数据处理相关，不适合存储半结构化数据，也不支持Spark写入。\nC. a datamart：错误。Datamart主要用于结构化数据的分析，通常与T-SQL查询相关，但不支持KQL或Spark写入，且不适合半结构化数据的存储。\nD. a warehouse：错误。Warehouse是专为结构化数据设计的存储解决方案，适合传统的SQL分析，但不支持KQL或Spark写入，也不适合半结构化数据。\n3. 我的选择\n我选择的答案是：A. a lakehouse\n4. 官方答案\n官方答案是：A. a lakehouse\n5. 比较与重新思考\n我的答案与官方答案一致。\n原因：Lakehouse是唯一能够满足题目要求的存储选项，支持半结构化数据的存储、Spark写入以及T-SQL和KQL读取。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 2,
  "pdfPage": 8,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 2",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 2",
  "pdfQuestionNum": 2,
  "topic": 1
 },
 {
  "id": "dp700-q003",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a Dataflow Gen1 dataflow",
    "textEn": "a Dataflow Gen1 dataflow",
    "textZh": "a Dataflow Gen1 dataflow"
   },
   {
    "id": "B",
    "text": "a data pipeline",
    "textEn": "a data pipeline",
    "textZh": "a data pipeline"
   },
   {
    "id": "C",
    "text": "a KQL queryset",
    "textEn": "a KQL queryset",
    "textZh": "a KQL queryset"
   },
   {
    "id": "D",
    "text": "a notebook",
    "textEn": "a notebook",
    "textZh": "a notebook"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地 Microsoft SQL Server 数据库名为 Database1，通过本地数据网关进行访问。\n你需要将数据从 Database1 复制到 Warehouse1。\n你应该使用哪项？",
  "stemZh": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地 Microsoft SQL Server 数据库名为 Database1，通过本地数据网关进行访问。\n你需要将数据从 Database1 复制到 Warehouse1。\n你应该使用哪项？",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用合适的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道（Data Pipeline）、数据流（Dataflow Gen1）、KQL 查询集（KQL Queryset）和笔记本（Notebook）的功能和适用场景。\n2. 选项分析\nA. Dataflow Gen1 dataflow:\nDataflow Gen1 是一种用于数据准备的工具，主要用于处理和转换数据，而不是直接用于数据复制到仓库。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. Data pipeline:\n数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。此选项是正确的选择。\nC. KQL queryset:\nKQL 查询集主要用于查询和分析数据，而不是用于数据复制或集成。此选项不适合用于将数据从本地 SQL Server 数据库复制到Fabric 仓库。\nD. Notebook:\nNotebook 是一种交互式工具，通常用于数据科学和机器学习任务。虽然可以编写代码来处理数据，但它不是专门设计用于数据复制的工具。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n3. 我的答案\n我的选择是：B. Data pipeline\n4. 官方答案\n官方答案是：B. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具，能够通过数据网关将本地 SQL Server 数据库中的数据复制到 Fabric 仓库。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用合适的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道（Data Pipeline）、数据流（Dataflow Gen1）、KQL 查询集（KQL Queryset）和笔记本（Notebook）的功能和适用场景。\n2. 选项分析\nA. Dataflow Gen1 dataflow:\nDataflow Gen1 是一种用于数据准备的工具，主要用于处理和转换数据，而不是直接用于数据复制到仓库。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. Data pipeline:\n数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。此选项是正确的选择。\nC. KQL queryset:\nKQL 查询集主要用于查询和分析数据，而不是用于数据复制或集成。此选项不适合用于将数据从本地 SQL Server 数据库复制到Fabric 仓库。\nD. Notebook:\nNotebook 是一种交互式工具，通常用于数据科学和机器学习任务。虽然可以编写代码来处理数据，但它不是专门设计用于数据复制的工具。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n3. 我的答案\n我的选择是：B. Data pipeline\n4. 官方答案\n官方答案是：B. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具，能够通过数据网关将本地 SQL Server 数据库中的数据复制到 Fabric 仓库。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用合适的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道（Data Pipeline）、数据流（Dataflow Gen1）、KQL 查询集（KQL Queryset）和笔记本（Notebook）的功能和适用场景。\n2. 选项分析\nA. Dataflow Gen1 dataflow:\nDataflow Gen1 是一种用于数据准备的工具，主要用于处理和转换数据，而不是直接用于数据复制到仓库。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. Data pipeline:\n数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。此选项是正确的选择。\nC. KQL queryset:\nKQL 查询集主要用于查询和分析数据，而不是用于数据复制或集成。此选项不适合用于将数据从本地 SQL Server 数据库复制到Fabric 仓库。\nD. Notebook:\nNotebook 是一种交互式工具，通常用于数据科学和机器学习任务。虽然可以编写代码来处理数据，但它不是专门设计用于数据复制的工具。此选项不适合用于将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n3. 我的答案\n我的选择是：B. Data pipeline\n4. 官方答案\n官方答案是：B. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：数据管道是 Microsoft Fabric 中专门用于数据集成和数据移动的工具，能够通过数据网关将本地 SQL Server 数据库中的数据复制到 Fabric 仓库。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 3,
  "pdfPage": 10,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 3",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 3",
  "pdfQuestionNum": 3,
  "topic": 1
 },
 {
  "id": "dp700-q004",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "an Apache Spark job definition",
    "textEn": "an Apache Spark job definition",
    "textZh": "an Apache Spark job definition"
   },
   {
    "id": "B",
    "text": "a data pipeline",
    "textEn": "a data pipeline",
    "textZh": "a data pipeline"
   },
   {
    "id": "C",
    "text": "a Dataflow Gen1 dataflow",
    "textEn": "a Dataflow Gen1 dataflow",
    "textZh": "a Dataflow Gen1 dataflow"
   },
   {
    "id": "D",
    "text": "an eventstream",
    "textEn": "an eventstream",
    "textZh": "an eventstream"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地Microsoft SQL Server数据库名为Database1，通过本地数据网关进行访问。\n你需要将数据从Database1复制到Warehouse1。\n你应该使用哪项？",
  "stemZh": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地Microsoft SQL Server数据库名为Database1，通过本地数据网关进行访问。\n你需要将数据从Database1复制到Warehouse1。\n你应该使用哪项？",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中使用合适的工具将数据从本地SQL Server数据库复制到Fabric仓库。\n涉及的知识点包括数据集成、数据管道的使用以及Microsoft Fabric的相关功能。\n2. 选项分析\nA. an Apache Spark job definition\n错误。Apache Spark 作业定义主要用于处理大规模数据分析任务，而不是用于数据复制或集成。它不适合直接将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. a data pipeline\n正确。数据管道是Microsoft Fabric中用于数据集成和传输的工具。它支持通过本地数据网关连接到本地SQL Server数据库，并将数据复制到 Fabric 仓库。\nC. a Dataflow Gen1 dataflow\n错误。Dataflow Gen1主要用于数据准备和转换，而不是直接用于数据复制到Fabric仓库。它的功能与题目要求不完全匹配。\nD. an eventstream\n错误。Eventstream用于处理实时数据流，而不是用于从本地SQL Server数据库复制数据到Fabric仓库。它与题目场景不符。\n3. 我的答案\n我的答案是：B. a data pipeline\n4. 官方答案\n官方答案是：B. a data pipeline\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中使用合适的工具将数据从本地SQL Server数据库复制到Fabric仓库。\n涉及的知识点包括数据集成、数据管道的使用以及Microsoft Fabric的相关功能。\n2. 选项分析\nA. an Apache Spark job definition\n错误。Apache Spark 作业定义主要用于处理大规模数据分析任务，而不是用于数据复制或集成。它不适合直接将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. a data pipeline\n正确。数据管道是Microsoft Fabric中用于数据集成和传输的工具。它支持通过本地数据网关连接到本地SQL Server数据库，并将数据复制到 Fabric 仓库。\nC. a Dataflow Gen1 dataflow\n错误。Dataflow Gen1主要用于数据准备和转换，而不是直接用于数据复制到Fabric仓库。它的功能与题目要求不完全匹配。\nD. an eventstream\n错误。Eventstream用于处理实时数据流，而不是用于从本地SQL Server数据库复制数据到Fabric仓库。它与题目场景不符。\n3. 我的答案\n我的答案是：B. a data pipeline\n4. 官方答案\n官方答案是：B. a data pipeline\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中使用合适的工具将数据从本地SQL Server数据库复制到Fabric仓库。\n涉及的知识点包括数据集成、数据管道的使用以及Microsoft Fabric的相关功能。\n2. 选项分析\nA. an Apache Spark job definition\n错误。Apache Spark 作业定义主要用于处理大规模数据分析任务，而不是用于数据复制或集成。它不适合直接将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\nB. a data pipeline\n正确。数据管道是Microsoft Fabric中用于数据集成和传输的工具。它支持通过本地数据网关连接到本地SQL Server数据库，并将数据复制到 Fabric 仓库。\nC. a Dataflow Gen1 dataflow\n错误。Dataflow Gen1主要用于数据准备和转换，而不是直接用于数据复制到Fabric仓库。它的功能与题目要求不完全匹配。\nD. an eventstream\n错误。Eventstream用于处理实时数据流，而不是用于从本地SQL Server数据库复制数据到Fabric仓库。它与题目场景不符。\n3. 我的答案\n我的答案是：B. a data pipeline\n4. 官方答案\n官方答案是：B. a data pipeline\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 4,
  "pdfPage": 12,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 4",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 4",
  "pdfQuestionNum": 4,
  "topic": 1
 },
 {
  "id": "dp700-q005",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "将 MD5 哈希更改为 SHA256。",
    "textEn": "Change the MD5 hash to SHA256.",
    "textZh": "将 MD5 哈希更改为 SHA256。"
   },
   {
    "id": "B",
    "text": "增加容量。",
    "textEn": "Increase the capacity.",
    "textZh": "增加容量。"
   },
   {
    "id": "C",
    "text": "启用V-Order。",
    "textEn": "Enable V-Order.",
    "textZh": "启用V-Order。"
   },
   {
    "id": "D",
    "text": "修改代理键以使用不同的数据类型。",
    "textEn": "Modify the surrogate keys to use a different data type.",
    "textZh": "修改代理键以使用不同的数据类型。"
   },
   {
    "id": "E",
    "text": "创建视图。",
    "textEn": "Create views.",
    "textZh": "创建视图。"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "您拥有一个Fabric F32容量，其中包含一个工作区。该工作区包含一个名为DW1的仓库，该仓库使用MD5哈希代理键进行建模。\nDW1 包含一个事实表，在过去一年中从 2 亿行增长到 5 亿行。\n您有基于Direct Lake的MicrosoftPowerBl报表。这些报表显示了年度同比值。\n用户报告称，部分报表的性能随着时间的推移有所下降，并且某些可视化显示错误。\n您需要解决性能问题。解决方案必须满足以下要求：\n提供最佳查询性能。\n尽量减少运营成本。\n您应该怎么做？",
  "stemZh": "您拥有一个Fabric F32容量，其中包含一个工作区。该工作区包含一个名为DW1的仓库，该仓库使用MD5哈希代理键进行建模。\nDW1 包含一个事实表，在过去一年中从 2 亿行增长到 5 亿行。\n您有基于Direct Lake的MicrosoftPowerBl报表。这些报表显示了年度同比值。\n用户报告称，部分报表的性能随着时间的推移有所下降，并且某些可视化显示错误。\n您需要解决性能问题。解决方案必须满足以下要求：\n提供最佳查询性能。\n尽量减少运营成本。\n您应该怎么做？",
  "stemEn": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys.\nDW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year.\nYou have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values.\nUsers report that the performance of some of the reports has degraded over time and some visuals show errors.\nYou need to resolve the performance issues. The solution must meet the following requirements:\nProvide the best query performance.\nMinimize operational costs.\nWhich should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库优化、PowerBlDirectLake性能提升以及如何通过技术手段解决性能问题。\n涉及的知识点包括：数据存储优化（如V-Order）、哈希算法的选择、容量管理、数据类型优化和视图创建。\n2. 独立分析每个选项\nA. Change the MD5 hash to SHA256\nMD5和SHA256都是哈希算法，主要用于生成唯一标识符或加密。更改哈希算法对查询性能的影响非常有限，因为哈希算法的主要作用是生成键值，而不是直接影响查询性能。\n此选项无法解决性能问题，也不会显著降低操作成本。\n错误\nB. Increase the capacity\n增加容量可以解决性能问题，但这会显著增加操作成本，不符合题目要求的\"最小化操作成本\"。\n此选项虽然有效，但不是最佳解决方案。\n错误\nC. Enable V-Order\nV-Order是一种数据存储优化技术，可以显著提高查询性能，尤其是在处理大型数据集时。启用V-Order可以减少I/O操作并提高数据读取效率。\n此选项符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。\n正确\nD. Modify the surrogate keys to use a different data type修改代理键的数据类型可能会对性能产生一定影响，但这种优化通常是微不足道的，尤其是在数据量较大的情况下。\n此选项无法显著提高查询性能，也不符合题目要求的\"最佳查询性能\"。\n错误\nE. Create views\n创建视图可以简化查询逻辑，但不会直接提高查询性能。视图本质上是查询的封装，性能提升依赖于底层数据的优化。\n此选项无法解决性能问题，也不符合题目要求的\"最佳查询性能\"。\n错误\n3. 我的答案\nC. Enable V-Order\n4. 官方答案\nC. Enable V-Order\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：启用V-Order是解决性能问题的最佳选择，符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库优化、PowerBlDirectLake性能提升以及如何通过技术手段解决性能问题。\n涉及的知识点包括：数据存储优化（如V-Order）、哈希算法的选择、容量管理、数据类型优化和视图创建。\n2. 独立分析每个选项\nA. Change the MD5 hash to SHA256\nMD5和SHA256都是哈希算法，主要用于生成唯一标识符或加密。更改哈希算法对查询性能的影响非常有限，因为哈希算法的主要作用是生成键值，而不是直接影响查询性能。\n此选项无法解决性能问题，也不会显著降低操作成本。\n错误\nB. Increase the capacity\n增加容量可以解决性能问题，但这会显著增加操作成本，不符合题目要求的\"最小化操作成本\"。\n此选项虽然有效，但不是最佳解决方案。\n错误\nC. Enable V-Order\nV-Order是一种数据存储优化技术，可以显著提高查询性能，尤其是在处理大型数据集时。启用V-Order可以减少I/O操作并提高数据读取效率。\n此选项符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。\n正确\nD. Modify the surrogate keys to use a different data type修改代理键的数据类型可能会对性能产生一定影响，但这种优化通常是微不足道的，尤其是在数据量较大的情况下。\n此选项无法显著提高查询性能，也不符合题目要求的\"最佳查询性能\"。\n错误\nE. Create views\n创建视图可以简化查询逻辑，但不会直接提高查询性能。视图本质上是查询的封装，性能提升依赖于底层数据的优化。\n此选项无法解决性能问题，也不符合题目要求的\"最佳查询性能\"。\n错误\n3. 我的答案\nC. Enable V-Order\n4. 官方答案\nC. Enable V-Order\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：启用V-Order是解决性能问题的最佳选择，符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库优化、PowerBlDirectLake性能提升以及如何通过技术手段解决性能问题。\n涉及的知识点包括：数据存储优化（如V-Order）、哈希算法的选择、容量管理、数据类型优化和视图创建。\n2. 独立分析每个选项\nA. Change the MD5 hash to SHA256\nMD5和SHA256都是哈希算法，主要用于生成唯一标识符或加密。更改哈希算法对查询性能的影响非常有限，因为哈希算法的主要作用是生成键值，而不是直接影响查询性能。\n此选项无法解决性能问题，也不会显著降低操作成本。\n错误\nB. Increase the capacity\n增加容量可以解决性能问题，但这会显著增加操作成本，不符合题目要求的\"最小化操作成本\"。\n此选项虽然有效，但不是最佳解决方案。\n错误\nC. Enable V-Order\nV-Order是一种数据存储优化技术，可以显著提高查询性能，尤其是在处理大型数据集时。启用V-Order可以减少I/O操作并提高数据读取效率。\n此选项符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。\n正确\nD. Modify the surrogate keys to use a different data type修改代理键的数据类型可能会对性能产生一定影响，但这种优化通常是微不足道的，尤其是在数据量较大的情况下。\n此选项无法显著提高查询性能，也不符合题目要求的\"最佳查询性能\"。\n错误\nE. Create views\n创建视图可以简化查询逻辑，但不会直接提高查询性能。视图本质上是查询的封装，性能提升依赖于底层数据的优化。\n此选项无法解决性能问题，也不符合题目要求的\"最佳查询性能\"。\n错误\n3. 我的答案\nC. Enable V-Order\n4. 官方答案\nC. Enable V-Order\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：启用V-Order是解决性能问题的最佳选择，符合题目要求的\"提供最佳查询性能\"和\"最小化操作成本\"。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 5,
  "pdfPage": 14,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 5",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 5",
  "pdfQuestionNum": 5,
  "topic": 1
 },
 {
  "id": "dp700-q006",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "SELECT YEAR",
   "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))"
  ],
  "pdfAnswer": [
   "SELECT YEAR",
   "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "SELECT CAST",
      "en": "SELECT CAST",
      "zh": "SELECT CAST"
     },
     {
      "key": "SELECT CONVERT",
      "en": "SELECT CONVERT",
      "zh": "SELECT CONVERT"
     },
     {
      "key": "SELECT YEAR",
      "en": "SELECT YEAR",
      "zh": "SELECT YEAR"
     }
    ],
    "answer": "SELECT YEAR"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "CUBE(YEAR(SO.ModifiedDate), P.Name)",
      "en": "CUBE(YEAR(SO.ModifiedDate), P.Name)",
      "zh": "CUBE(YEAR(SO.ModifiedDate), P.Name)"
     },
     {
      "key": "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))",
      "en": "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))",
      "zh": "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))"
     },
     {
      "key": "ROLLUP(YEAR(SO.ModifiedDate), P.Name)",
      "en": "ROLLUP(YEAR(SO.ModifiedDate), P.Name)",
      "zh": "ROLLUP(YEAR(SO.ModifiedDate), P.Name)"
     },
     {
      "key": "YEAR(SO.ModifiedDate), P.Name",
      "en": "YEAR(SO.ModifiedDate), P.Name",
      "zh": "YEAR(SO.ModifiedDate), P.Name"
     }
    ],
    "answer": "GROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))"
   }
  ],
  "template": "{{1}} (SO.ModifiedDate) AS OrderDate\n    ,P.Name AS ProductName\n    ,SUM(SO.OrderQty) AS OrderQty\nFROM [dbo].[SalesOrderDetail] SO\nINNER JOIN [dbo].[Product] P\n    ON P.ProductID = SO.ProductID\nGROUP BY\n    {{2}}\nORDER BY OrderDate",
  "templateEn": "{{1}} (SO.ModifiedDate) AS OrderDate\n    ,P.Name AS ProductName\n    ,SUM(SO.OrderQty) AS OrderQty\nFROM [dbo].[SalesOrderDetail] SO\nINNER JOIN [dbo].[Product] P\n    ON P.ProductID = SO.ProductID\nGROUP BY\n    {{2}}\nORDER BY OrderDate",
  "templateZh": "{{1}} (SO.ModifiedDate) AS OrderDate\n    ,P.Name AS ProductName\n    ,SUM(SO.OrderQty) AS OrderQty\nFROM [dbo].[SalesOrderDetail] SO\nINNER JOIN [dbo].[Product] P\n    ON P.ProductID = SO.ProductID\nGROUP BY\n    {{2}}\nORDER BY OrderDate",
  "templateKind": "code",
  "answerSource": "text",
  "stem": "您有一个Fabric工作区，其中包含一个名为DW1的仓库。DW1包含以下表和列。\n```\nTable name | Column name | Description\nSalesOrderDetail | ProductID | Contains the product ID of the ordered product\nSalesOrderDetail | ModifiedDate | Contains the date of an order\nSalesOrderDetail | OrderQty | Contains the order quantity\nProduct | ProductID | Contains the unique ID of a product\nProduct | Name | Contains a product name\n```\n您需要创建一个输出，展示按年份和产品汇总的所有订单数量的值。结果必须包括所有产品在年份级别的订单数量汇总。\n您应该如何完成代码？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemZh": "您有一个Fabric工作区，其中包含一个名为DW1的仓库。DW1包含以下表和列。\n```\nTable name | Column name | Description\nSalesOrderDetail | ProductID | Contains the product ID of the ordered product\nSalesOrderDetail | ModifiedDate | Contains the date of an order\nSalesOrderDetail | OrderQty | Contains the order quantity\nProduct | ProductID | Contains the unique ID of a product\nProduct | Name | Contains a product name\n```\n您需要创建一个输出，展示按年份和产品汇总的所有订单数量的值。结果必须包括所有产品在年份级别的订单数量汇总。\n您应该如何完成代码？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains a warehouse named DW1. DW1 contains the following tables and columns.\n```\nTable name | Column name | Description\nSalesOrderDetail | ProductID | Contains the product ID of the ordered product\nSalesOrderDetail | ModifiedDate | Contains the date of an order\nSalesOrderDetail | OrderQty | Contains the order quantity\nProduct | ProductID | Contains the unique ID of a product\nProduct | Name | Contains a product name\n```\nYou need to create an output that presents the summarized values of all the order quantities by year and product. The results must include a summary of the order quantities at the year level for all the products.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 16 页「官方答案」文字（该题 PDF 无答案图）\n【说明】PDF has no answer image (Correct Answer shows \"A\" + watermark only); answer from PDF 官方答案 section.\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是SQLSerVer中的聚合函数和分组操作，包括GROUP BY子句的高级功能，如ROLLUP、CUBE和GROUPING SETS。\n同时涉及日期函数YEARO的使用，以及如何通过JOIN操作连接表以获取相关数据。\n2. 选项分析\nSELECTCAST：错误。CAST是用于数据类型转换的函数，与本题的需求无关。\nSELECTCONVERT：错误。CONVERT也是用于数据类型转换的函数，与本题的需求无关。\nSELECTYEAR：正确。YEAR函数可以提取日期中的年份，符合题目要求按年份进行分组。\nCUBE(YEAR(SO.ModifiedDate)，P.Name)：错误。CUBE会生成所有可能的组合，超出了题目要求的范围。\nGROUPING SETS (YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate):正确。 GROUPING SETS 可以明确指定分组的组合，符合题目要求。\nROLLUP(YEAR(SO.ModifiedDate)，P.Name)：错误。ROLLUP会生成层次化的汇总数据，超出了题目要求的范围YEAR(SO.ModifiedDate), P.Name:错误。直接使用YEAR(SO.ModifiedDate), P.Name作为GROUP BY的分组条件无法满足题目中要求的汇总功能。\n3. 我选的答案\nSELECT YEAR\nGROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))\n4. 官方答案\nSELECT YEAR\nGROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationZh": "【答案来源】PDF 第 16 页「官方答案」文字（该题 PDF 无答案图）\n【说明】PDF has no answer image (Correct Answer shows \"A\" + watermark only); answer from PDF 官方答案 section.\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是SQLSerVer中的聚合函数和分组操作，包括GROUP BY子句的高级功能，如ROLLUP、CUBE和GROUPING SETS。\n同时涉及日期函数YEARO的使用，以及如何通过JOIN操作连接表以获取相关数据。\n2. 选项分析\nSELECTCAST：错误。CAST是用于数据类型转换的函数，与本题的需求无关。\nSELECTCONVERT：错误。CONVERT也是用于数据类型转换的函数，与本题的需求无关。\nSELECTYEAR：正确。YEAR函数可以提取日期中的年份，符合题目要求按年份进行分组。\nCUBE(YEAR(SO.ModifiedDate)，P.Name)：错误。CUBE会生成所有可能的组合，超出了题目要求的范围。\nGROUPING SETS (YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate):正确。 GROUPING SETS 可以明确指定分组的组合，符合题目要求。\nROLLUP(YEAR(SO.ModifiedDate)，P.Name)：错误。ROLLUP会生成层次化的汇总数据，超出了题目要求的范围YEAR(SO.ModifiedDate), P.Name:错误。直接使用YEAR(SO.ModifiedDate), P.Name作为GROUP BY的分组条件无法满足题目中要求的汇总功能。\n3. 我选的答案\nSELECT YEAR\nGROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))\n4. 官方答案\nSELECT YEAR\nGROUPING SETS ((YEAR(SO.ModifiedDate), P.Name), (YEAR(SO.ModifiedDate)))\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationEn": "[Answer source] PDF p.16 \"official answer\" text (no answer image in PDF)\n[Note] PDF has no answer image (Correct Answer shows \"A\" + watermark only); answer from PDF 官方答案 section.",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 6,
  "pdfPage": 16,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 6",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 6",
  "pdfQuestionNum": 6,
  "topic": 1
 },
 {
  "id": "dp700-q007",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "Date",
    "textEn": "Date",
    "textZh": "Date"
   },
   {
    "id": "B",
    "text": "ProductName",
    "textEn": "ProductName",
    "textZh": "ProductName"
   },
   {
    "id": "C",
    "text": "ProductColor",
    "textEn": "ProductColor",
    "textZh": "ProductColor"
   },
   {
    "id": "D",
    "text": "TransactionID",
    "textEn": "TransactionID",
    "textZh": "TransactionID"
   },
   {
    "id": "E",
    "text": "SalesAmount",
    "textEn": "SalesAmount",
    "textZh": "SalesAmount"
   },
   {
    "id": "F",
    "text": "ProductID",
    "textEn": "ProductID",
    "textZh": "ProductID"
   }
  ],
  "answer": [
   "B",
   "C",
   "F"
  ],
  "pdfAnswer": [
   "B",
   "C",
   "F"
  ],
  "answerSource": "text",
  "stem": "你有一个Fabric工作区，其中包含一个名为Lakehouse1的lakehouse。数据以一个平面表的形式导入到Lakehouse1。该表包含以下列。\n```\nName | Description\nTransactionID | Contains a unique ID for each transaction\nDate | Contains the date of a transaction\nProductID | Contains a unique ID for each product\nProductColor | Contains a descriptive attribute that describes the color of each product\nProductName | Contains a unique name for each product\nSalesAmount | Contains the sales amount of a transaction\n```\n你计划将数据加载到一个维度模型中并实现星型架构。从原始平面表中，你创建了两个表，分别是FactSales和DimProduct。你将跟踪 DimProduct中的变化。\n你需要准备数据。\n在DimProduct表中应包含哪三个列？每个正确答案都是解决方案的一部分。\n注意：每个正确选择值一分。",
  "stemZh": "你有一个Fabric工作区，其中包含一个名为Lakehouse1的lakehouse。数据以一个平面表的形式导入到Lakehouse1。该表包含以下列。\n```\nName | Description\nTransactionID | Contains a unique ID for each transaction\nDate | Contains the date of a transaction\nProductID | Contains a unique ID for each product\nProductColor | Contains a descriptive attribute that describes the color of each product\nProductName | Contains a unique name for each product\nSalesAmount | Contains the sales amount of a transaction\n```\n你计划将数据加载到一个维度模型中并实现星型架构。从原始平面表中，你创建了两个表，分别是FactSales和DimProduct。你将跟踪 DimProduct中的变化。\n你需要准备数据。\n在DimProduct表中应包含哪三个列？每个正确答案都是解决方案的一部分。\n注意：每个正确选择值一分。",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Data is ingested into Lakehouse1 as one flat table. The table contains the following columns.\n```\nName | Description\nTransactionID | Contains a unique ID for each transaction\nDate | Contains the date of a transaction\nProductID | Contains a unique ID for each product\nProductColor | Contains a descriptive attribute that describes the color of each product\nProductName | Contains a unique name for each product\nSalesAmount | Contains the sales amount of a transaction\n```\nYou plan to load the data into a dimensional model and implement a star schema. From the original flat table, you create two tables named FactSales and DimProduct. You will track changes in DimProduct.\nYou need to prepare the data.\nWhich three columns should you include in the DimProduct table? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是数据仓库设计中的维度建模（Dimensional Modeling），特别是星型模型（Star Schema）的构建。\n需要理解如何将平面表转换为事实表（Fact Table）和维度表（Dimension Table），并正确选择维度表的列。\n2. 选项分析\nA。Date－错误。日期通常是事实表中的列，用于记录事务发生的时间，而不是维度表中的属性。\nB。ProductName-正确。产品名称是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nC。ProductColor-正确。产品颜色是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nD.TransactionID－错误。事务ID是事实表中的主键，用于唯一标识每个事务，而不是维度表中的属性。\nE。SalesAmount-错误。销售金额是事实表中的度量值，用于进行聚合和分析，而不是维度表中的属性。\nF.ProductID－正确。产品ID是维度表的主键，用于唯一标识每个产品，并与事实表建立关联。\n3. 我的答案\nB. ProductName\nC. ProductColor\nF. ProductID\n4. 官方答案\nB. ProductName\nC. ProductColor\nF. ProductID\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationZh": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是数据仓库设计中的维度建模（Dimensional Modeling），特别是星型模型（Star Schema）的构建。\n需要理解如何将平面表转换为事实表（Fact Table）和维度表（Dimension Table），并正确选择维度表的列。\n2. 选项分析\nA。Date－错误。日期通常是事实表中的列，用于记录事务发生的时间，而不是维度表中的属性。\nB。ProductName-正确。产品名称是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nC。ProductColor-正确。产品颜色是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nD.TransactionID－错误。事务ID是事实表中的主键，用于唯一标识每个事务，而不是维度表中的属性。\nE。SalesAmount-错误。销售金额是事实表中的度量值，用于进行聚合和分析，而不是维度表中的属性。\nF.ProductID－正确。产品ID是维度表的主键，用于唯一标识每个产品，并与事实表建立关联。\n3. 我的答案\nB. ProductName\nC. ProductColor\nF. ProductID\n4. 官方答案\nB. ProductName\nC. ProductColor\nF. ProductID\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationEn": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是数据仓库设计中的维度建模（Dimensional Modeling），特别是星型模型（Star Schema）的构建。\n需要理解如何将平面表转换为事实表（Fact Table）和维度表（Dimension Table），并正确选择维度表的列。\n2. 选项分析\nA。Date－错误。日期通常是事实表中的列，用于记录事务发生的时间，而不是维度表中的属性。\nB。ProductName-正确。产品名称是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nC。ProductColor-正确。产品颜色是产品的描述性属性，适合放入维度表中以便进行分析和查询。\nD.TransactionID－错误。事务ID是事实表中的主键，用于唯一标识每个事务，而不是维度表中的属性。\nE。SalesAmount-错误。销售金额是事实表中的度量值，用于进行聚合和分析，而不是维度表中的属性。\nF.ProductID－正确。产品ID是维度表的主键，用于唯一标识每个产品，并与事实表建立关联。\n3. 我的答案\nB. ProductName\nC. ProductColor\nF. ProductID\n4. 官方答案\nB. ProductName\nC. ProductColor\nF. ProductID\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 7,
  "pdfPage": 18,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 7",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 7",
  "pdfQuestionNum": 7,
  "topic": 1
 },
 {
  "id": "dp700-q008",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "为笔记本启用高并发。",
    "textEn": "Enable high concurrency for notebooks.",
    "textZh": "为笔记本启用高并发。"
   },
   {
    "id": "B",
    "text": "为 Spark pool 启用动态分配。",
    "textEn": "Enable dynamic allocation for the Spark pool.",
    "textZh": "为 Spark pool 启用动态分配。"
   },
   {
    "id": "C",
    "text": "更改运行时版本。",
    "textEn": "Change the runtime version.",
    "textZh": "更改运行时版本。"
   },
   {
    "id": "D",
    "text": "增加执行器的数量。",
    "textEn": "Increase the number of executors.",
    "textZh": "增加执行器的数量。"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Notebook1 的笔记本。\n在 Workspace1 中，你创建了一个名为 Notebook2 的新笔记本。\n你需要确保可以将 Notebook2 附加到与 Notebook1 相同的 Apache Spark 会话。\n你应该怎么做？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Notebook1 的笔记本。\n在 Workspace1 中，你创建了一个名为 Notebook2 的新笔记本。\n你需要确保可以将 Notebook2 附加到与 Notebook1 相同的 Apache Spark 会话。\n你应该怎么做？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1.\nIn Workspace1, you create a new notebook named Notebook2.\nYou need to ensure that you can attach Notebook2 to the same Apache Spark session as Notebook1.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中如何配置 Apache Spark 会话以支持多个笔记本共享同一会话。\n重点知识点包括高并发设置、动态分配、运行时版本和执行器数量的影响。\n2. 选项分析\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n正确。启用高并发模式可以允许多个笔记本共享同一个 Apache Spark 会话，从而实现资源的高效利用。\n这是实现多个笔记本共享同一会话的关键设置。\nB. Enable dynamic allocation for the Spark pool. 为 Spark pool 启用动态分配。\n错误。动态分配主要用于优化资源使用，但它不会直接影响多个笔记本是否可以共享同一会话。\nC. Change the runtime version. 更改运行时版本。\n错误。更改运行时版本可能会影响兼容性或性能，但与共享会话无关。\nD. Increase the number of executors. 增加执行器的数量。\n错误。增加执行器数量可以提高并行处理能力，但它不会影响多个笔记本是否可以共享同一会话。\n3. 我的答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n4. 官方答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n5. 答案比较与思考\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中如何配置 Apache Spark 会话以支持多个笔记本共享同一会话。\n重点知识点包括高并发设置、动态分配、运行时版本和执行器数量的影响。\n2. 选项分析\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n正确。启用高并发模式可以允许多个笔记本共享同一个 Apache Spark 会话，从而实现资源的高效利用。\n这是实现多个笔记本共享同一会话的关键设置。\nB. Enable dynamic allocation for the Spark pool. 为 Spark pool 启用动态分配。\n错误。动态分配主要用于优化资源使用，但它不会直接影响多个笔记本是否可以共享同一会话。\nC. Change the runtime version. 更改运行时版本。\n错误。更改运行时版本可能会影响兼容性或性能，但与共享会话无关。\nD. Increase the number of executors. 增加执行器的数量。\n错误。增加执行器数量可以提高并行处理能力，但它不会影响多个笔记本是否可以共享同一会话。\n3. 我的答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n4. 官方答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n5. 答案比较与思考\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中如何配置 Apache Spark 会话以支持多个笔记本共享同一会话。\n重点知识点包括高并发设置、动态分配、运行时版本和执行器数量的影响。\n2. 选项分析\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n正确。启用高并发模式可以允许多个笔记本共享同一个 Apache Spark 会话，从而实现资源的高效利用。\n这是实现多个笔记本共享同一会话的关键设置。\nB. Enable dynamic allocation for the Spark pool. 为 Spark pool 启用动态分配。\n错误。动态分配主要用于优化资源使用，但它不会直接影响多个笔记本是否可以共享同一会话。\nC. Change the runtime version. 更改运行时版本。\n错误。更改运行时版本可能会影响兼容性或性能，但与共享会话无关。\nD. Increase the number of executors. 增加执行器的数量。\n错误。增加执行器数量可以提高并行处理能力，但它不会影响多个笔记本是否可以共享同一会话。\n3. 我的答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n4. 官方答案\nA. Enable high concurrency for notebooks. 为笔记本启用高并发。\n5. 答案比较与思考\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 8,
  "pdfPage": 20,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 8",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 8",
  "pdfQuestionNum": 8,
  "topic": 1
 },
 {
  "id": "dp700-q009",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "将 Lakehouse1 与数据工程师共享。",
    "textEn": "Share Lakehouse1 with the data engineer.",
    "textZh": "将 Lakehouse1 与数据工程师共享。"
   },
   {
    "id": "B",
    "text": "为数据工程师分配 Workspace2 的 Contributor 角色。",
    "textEn": "Assign the data engineer the Contributor role for Workspace2.",
    "textZh": "为数据工程师分配 Workspace2 的 Contributor 角色。"
   },
   {
    "id": "C",
    "text": "为数据工程师分配 Workspace2 的 Viewer 角色。",
    "textEn": "Assign the data engineer the Viewer role for Workspace2.",
    "textZh": "为数据工程师分配 Workspace2 的 Viewer 角色。"
   },
   {
    "id": "D",
    "text": "为数据工程师分配 Workspace1 的 Contributor 角色。",
    "textEn": "Assign the data engineer the Contributor role for Workspace1.",
    "textZh": "为数据工程师分配 Workspace1 的 Contributor 角色。"
   },
   {
    "id": "E",
    "text": "将 Employee 表从 Lakehouse1 迁移到 Lakehouse2。",
    "textEn": "Migrate the Employee table from Lakehouse1 to Lakehouse2.",
    "textZh": "将 Employee 表从 Lakehouse1 迁移到 Lakehouse2。"
   },
   {
    "id": "F",
    "text": "创建一个名为 Workspace2 的新工作区，其中包含一个名为 Lakehouse2 的新湖仓。",
    "textEn": "Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.",
    "textZh": "创建一个名为 Workspace2 的新工作区，其中包含一个名为 Lakehouse2 的新湖仓。"
   },
   {
    "id": "G",
    "text": "为数据工程师分配 Workspace1 的 Viewer 角色。",
    "textEn": "Assign the data engineer the Viewer role for Workspace1.",
    "textZh": "为数据工程师分配 Workspace1 的 Viewer 角色。"
   }
  ],
  "answer": [
   "D",
   "E",
   "F"
  ],
  "pdfAnswer": [
   "D",
   "E",
   "F"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。Lakehouse1 包含以下表：\nOrders -\nCustomer -\nEmployee -\nEmployee 表包含个人身份信息 (PII)。\n一位数据工程师正在构建一个工作流，该工作流需要向 Customer 表写入数据，但该用户没有查看 Employee 表内容所需的高级权限。\n你需要确保数据工程师可以向 Customer 表写入数据，而无需读取 Employee 表中的数据。\n你应该执行哪三项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。Lakehouse1 包含以下表：\nOrders -\nCustomer -\nEmployee -\nEmployee 表包含个人身份信息 (PII)。\n一位数据工程师正在构建一个工作流，该工作流需要向 Customer 表写入数据，但该用户没有查看 Employee 表内容所需的高级权限。\n你需要确保数据工程师可以向 Customer 表写入数据，而无需读取 Employee 表中的数据。\n你应该执行哪三项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains the following tables:\nOrders -\nCustomer -\nEmployee -\nThe Employee table contains Personally Identifiable Information (PII).\nA data engineer is building a workflow that requires writing data to the Customer table, however, the user does NOT have the elevated permissions required to view the contents of the Employee table.\nYou need to ensure that the data engineer can write data to the Customer table without reading data from the Employee table.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "DP-700考试辅导：题目解析\n1. 考察的知识点\n权限管理：如何在Microsoft Fabric中分配权限以确保数据安全。\n数据隔离：如何通过迁移数据或创建新的工作区来保护敏感信息。\n角色分配：理解不同角色（如Contributor、Viewer）的权限范围。\n2. 选项分析\nA. Share Lakehouse1 with the data engineer.\n错误。共享整个Lakehouse1会使数据工程师能够访问所有表，包括包含PII的Employee表，这不符合题目要求。\nB. Assign the data engineer the Contributor role for Workspace2.\n错误。题目中没有提到Workspace2已经存在，也没有说明Workspace2与Lakehouse1的关系，因此此选项无关紧要。\nC. Assign the data engineer the Viewer role for Workspace2.\n错误。同样，Workspace2的存在和作用没有明确说明，Viewer角色也无法满足写入Customer表的需求。\nD. Assign the data engineer the Contributor role for Workspace1.\n错误。Contributor角色会赋予数据工程师对Workspace1中所有资源的完全访问权限，包括Employee表，这不符合题目要求。\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\n正确。将包含PII的Employee表迁移到另一个Lakehouse可以实现数据隔离，确保数据工程师无法访问敏感信息。\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n正确。创建新的工作区和Lakehouse为迁移Employee表提供了必要的环境，进一步实现数据隔离。\nG. Assign the data engineer the Viewer role for Workspace1.\n错误。Viewer角色仅允许查看数据，无法满足写入Customer表的需求。\n3. 我选的答案\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\nD. Assign the data engineer the Contributor role for Workspace1.\n4. 官方答案\nD. Assign the data engineer the Contributor role for Workspace1.\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n5. 比较与重新思考\n我的答案与官方答案一致。\n官方答案正确地解决了数据隔离问题，同时确保数据工程师能够写入Customer表。",
  "explanationZh": "DP-700考试辅导：题目解析\n1. 考察的知识点\n权限管理：如何在Microsoft Fabric中分配权限以确保数据安全。\n数据隔离：如何通过迁移数据或创建新的工作区来保护敏感信息。\n角色分配：理解不同角色（如Contributor、Viewer）的权限范围。\n2. 选项分析\nA. Share Lakehouse1 with the data engineer.\n错误。共享整个Lakehouse1会使数据工程师能够访问所有表，包括包含PII的Employee表，这不符合题目要求。\nB. Assign the data engineer the Contributor role for Workspace2.\n错误。题目中没有提到Workspace2已经存在，也没有说明Workspace2与Lakehouse1的关系，因此此选项无关紧要。\nC. Assign the data engineer the Viewer role for Workspace2.\n错误。同样，Workspace2的存在和作用没有明确说明，Viewer角色也无法满足写入Customer表的需求。\nD. Assign the data engineer the Contributor role for Workspace1.\n错误。Contributor角色会赋予数据工程师对Workspace1中所有资源的完全访问权限，包括Employee表，这不符合题目要求。\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\n正确。将包含PII的Employee表迁移到另一个Lakehouse可以实现数据隔离，确保数据工程师无法访问敏感信息。\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n正确。创建新的工作区和Lakehouse为迁移Employee表提供了必要的环境，进一步实现数据隔离。\nG. Assign the data engineer the Viewer role for Workspace1.\n错误。Viewer角色仅允许查看数据，无法满足写入Customer表的需求。\n3. 我选的答案\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\nD. Assign the data engineer the Contributor role for Workspace1.\n4. 官方答案\nD. Assign the data engineer the Contributor role for Workspace1.\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n5. 比较与重新思考\n我的答案与官方答案一致。\n官方答案正确地解决了数据隔离问题，同时确保数据工程师能够写入Customer表。",
  "explanationEn": "DP-700考试辅导：题目解析\n1. 考察的知识点\n权限管理：如何在Microsoft Fabric中分配权限以确保数据安全。\n数据隔离：如何通过迁移数据或创建新的工作区来保护敏感信息。\n角色分配：理解不同角色（如Contributor、Viewer）的权限范围。\n2. 选项分析\nA. Share Lakehouse1 with the data engineer.\n错误。共享整个Lakehouse1会使数据工程师能够访问所有表，包括包含PII的Employee表，这不符合题目要求。\nB. Assign the data engineer the Contributor role for Workspace2.\n错误。题目中没有提到Workspace2已经存在，也没有说明Workspace2与Lakehouse1的关系，因此此选项无关紧要。\nC. Assign the data engineer the Viewer role for Workspace2.\n错误。同样，Workspace2的存在和作用没有明确说明，Viewer角色也无法满足写入Customer表的需求。\nD. Assign the data engineer the Contributor role for Workspace1.\n错误。Contributor角色会赋予数据工程师对Workspace1中所有资源的完全访问权限，包括Employee表，这不符合题目要求。\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\n正确。将包含PII的Employee表迁移到另一个Lakehouse可以实现数据隔离，确保数据工程师无法访问敏感信息。\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n正确。创建新的工作区和Lakehouse为迁移Employee表提供了必要的环境，进一步实现数据隔离。\nG. Assign the data engineer the Viewer role for Workspace1.\n错误。Viewer角色仅允许查看数据，无法满足写入Customer表的需求。\n3. 我选的答案\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\nD. Assign the data engineer the Contributor role for Workspace1.\n4. 官方答案\nD. Assign the data engineer the Contributor role for Workspace1.\nE. Migrate the Employee table from Lakehouse1 to Lakehouse2.\nF. Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.\n5. 比较与重新思考\n我的答案与官方答案一致。\n官方答案正确地解决了数据隔离问题，同时确保数据工程师能够写入Customer表。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 9,
  "pdfPage": 22,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 9",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 9",
  "pdfQuestionNum": 9,
  "topic": 1
 },
 {
  "id": "dp700-q010",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "STORED PROCEDURE",
    "textEn": "STORED PROCEDURE",
    "textZh": "STORED PROCEDURE"
   },
   {
    "id": "B",
    "text": "CONSTRAINT",
    "textEn": "CONSTRAINT",
    "textZh": "CONSTRAINT"
   },
   {
    "id": "C",
    "text": "SCHEMA",
    "textEn": "SCHEMA",
    "textZh": "SCHEMA"
   },
   {
    "id": "D",
    "text": "FUNCTION",
    "textEn": "FUNCTION",
    "textZh": "FUNCTION"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemZh": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemEn": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric数据仓库中如何实现行级安全性（Row-Level Security，RLS）。\nRLS的核心是通过定义逻辑规则来限制用户访问特定行的数据。\n2. 选项分析\nA。STOREDPROCEDURE：错误。存储过程用于执行一组预定义的SQL操作，但它不能直接用于实现行级安全性。\nB.CONSTRAINT：错误。约束（Constraint）用于定义表的规则，例如主键、外键或检查约束，但它不能用于实现动态的行级安全性。\nC.SCHEMA：错误。模式（Schema）是数据库对象的逻辑分组方式，与行级安全性无直接关系。\nD.FUNCTION：正确。函数可以用于定义逻辑规则，通过结合RLS策略，确保用户只能访问与其身份相关的数据。\n3. 我的答案\n我的选择是：D. FUNCTION\n4. 官方答案\n官方答案是：D. FUNCTION\n5. 答案比较与分析\n我的答案与官方答案一致，没有差异。\n原因：函数是实现RLS的关键工具，可以根据用户身份动态过滤数据。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric数据仓库中如何实现行级安全性（Row-Level Security，RLS）。\nRLS的核心是通过定义逻辑规则来限制用户访问特定行的数据。\n2. 选项分析\nA。STOREDPROCEDURE：错误。存储过程用于执行一组预定义的SQL操作，但它不能直接用于实现行级安全性。\nB.CONSTRAINT：错误。约束（Constraint）用于定义表的规则，例如主键、外键或检查约束，但它不能用于实现动态的行级安全性。\nC.SCHEMA：错误。模式（Schema）是数据库对象的逻辑分组方式，与行级安全性无直接关系。\nD.FUNCTION：正确。函数可以用于定义逻辑规则，通过结合RLS策略，确保用户只能访问与其身份相关的数据。\n3. 我的答案\n我的选择是：D. FUNCTION\n4. 官方答案\n官方答案是：D. FUNCTION\n5. 答案比较与分析\n我的答案与官方答案一致，没有差异。\n原因：函数是实现RLS的关键工具，可以根据用户身份动态过滤数据。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric数据仓库中如何实现行级安全性（Row-Level Security，RLS）。\nRLS的核心是通过定义逻辑规则来限制用户访问特定行的数据。\n2. 选项分析\nA。STOREDPROCEDURE：错误。存储过程用于执行一组预定义的SQL操作，但它不能直接用于实现行级安全性。\nB.CONSTRAINT：错误。约束（Constraint）用于定义表的规则，例如主键、外键或检查约束，但它不能用于实现动态的行级安全性。\nC.SCHEMA：错误。模式（Schema）是数据库对象的逻辑分组方式，与行级安全性无直接关系。\nD.FUNCTION：正确。函数可以用于定义逻辑规则，通过结合RLS策略，确保用户只能访问与其身份相关的数据。\n3. 我的答案\n我的选择是：D. FUNCTION\n4. 官方答案\n官方答案是：D. FUNCTION\n5. 答案比较与分析\n我的答案与官方答案一致，没有差异。\n原因：函数是实现RLS的关键工具，可以根据用户身份动态过滤数据。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 10,
  "pdfPage": 25,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 10",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 10",
  "pdfQuestionNum": 10,
  "topic": 1
 },
 {
  "id": "dp700-q011",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "No",
   "Yes",
   "No"
  ],
  "pdfAnswer": [
   "No",
   "Yes",
   "No"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "语义模型中的数据将部署到目标阶段。",
    "labelEn": "Data from the semantic models will be deployed to the target stage.",
    "labelZh": "语义模型中的数据将部署到目标阶段。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "2",
    "label": "Dataflow Gen1 数据流将部署到目标阶段。",
    "labelEn": "The Dataflow Gen1 dataflows will be deployed to the target stage.",
    "labelZh": "Dataflow Gen1 数据流将部署到目标阶段。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   },
   {
    "id": "3",
    "label": "计划刷新策略将部署到目标阶段。",
    "labelEn": "The scheduled refresh policies will be deployed to the target stage.",
    "labelZh": "计划刷新策略将部署到目标阶段。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 11,
   "pdfQNum": 11,
   "topic": 1,
   "page": 28,
   "questionPage": 27,
   "pdfText": "Data from the semantic models will be deployed to the target stage: No / The Dataflow Gen1 dataflows will be deployed to the target stage: No / The scheduled refresh policies will be deployed to the target stage: No",
   "imageAnswer": "No / Yes / No",
   "detail": "PDF AI-analysis 官方答案 text says No/No/No; answer image (p28) shows No/Yes/No — image used."
  },
  "stem": "您有一个名为 Workspace1_DEV 的 Fabric 工作区，其中包含以下项目：\n10 个报表\n四个笔记本 -\n三个湖仓 -\n两个数据管道 -\n两个 Dataflow Gen1 数据流 -\n三个 Dataflow Gen2 数据流 -\n五个语义模型，每个模型都有一个计划刷新策略\n您创建了一个名为 Pipeline1 的部署管道，用于将项目从 Workspace1_DEV 移动到一个名为 Workspace1_TEST 的新工作区。\n您将 Workspace1_DEV 中的所有项目部署到 Workspace1_TEST。\n对于以下每个陈述，如果陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个名为 Workspace1_DEV 的 Fabric 工作区，其中包含以下项目：\n10 个报表\n四个笔记本 -\n三个湖仓 -\n两个数据管道 -\n两个 Dataflow Gen1 数据流 -\n三个 Dataflow Gen2 数据流 -\n五个语义模型，每个模型都有一个计划刷新策略\n您创建了一个名为 Pipeline1 的部署管道，用于将项目从 Workspace1_DEV 移动到一个名为 Workspace1_TEST 的新工作区。\n您将 Workspace1_DEV 中的所有项目部署到 Workspace1_TEST。\n对于以下每个陈述，如果陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace named Workspace1_DEV that contains the following items:\n10 reports\nFour notebooks -\nThree lakehouses -\nTwo data pipelines -\nTwo Dataflow Gen1 dataflows -\nThree Dataflow Gen2 dataflows -\nFive semantic models that each has a scheduled refresh policy\nYou create a deployment pipeline named Pipeline1 to move items from Workspace1_DEV to a new workspace named Workspace1_TEST.\nYou deploy all the items from Workspace1_DEV to Workspace1_TEST.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 28 页）给出：No / Yes / No；PDF 文字为：Data from the semantic models will be deployed to the target stage: No / The Dataflow Gen1 dataflows will be deployed to the target stage: No / The scheduled refresh policies will be deployed to the target stage: No。\n【答案来源】PDF 第 28 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中部署管道（Deployment Pipeline）的功能和限制，特别是关于不同类型的项目（如语义模型、 Dataflow Gen1 数据流、刷新策略等）在部署过程中是否会被迁移。\n2. 选项分析\nData from the semantic models will be deployed to the target stage.\n分析：语义模型本身可以通过部署管道迁移到目标工作区，但其数据不会随模型一起迁移。数据需要在目标工作区重新刷新或加载。\n结论：此选项为 No。\nThe Dataflow Gen1 dataflows will be deployed to the target stage.\n分析：Dataflow Gen1 数据流不支持通过部署管道迁移到目标工作区。只有 Dataflow Gen2 数据流支持迁移。\n结论：此选项为 No。\nThe scheduled refresh policies will be deployed to the target stage.\n分析：部署管道不会迁移刷新策略。目标工作区需要手动重新配置刷新策略。\n结论：此选项为 No。\n3. 我的答案\nData from the semantic models will be deployed to the target stage: No The Dataflow Gen1 dataflows will be deployed to the target stage: No The scheduled refresh policies will be deployed to the target stage: No 4. 官方答案Data from the semantic models will be deployed to the target stage: No The Dataflow Gen1 dataflows will be deployed to the target stage: No The scheduled refresh policies will be deployed to the target stage: No 5. 与官方答案比较我的答案与官方答案完全一致，无需重新思考。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 28 页）给出：No / Yes / No；PDF 文字为：Data from the semantic models will be deployed to the target stage: No / The Dataflow Gen1 dataflows will be deployed to the target stage: No / The scheduled refresh policies will be deployed to the target stage: No。\n【答案来源】PDF 第 28 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中部署管道（Deployment Pipeline）的功能和限制，特别是关于不同类型的项目（如语义模型、 Dataflow Gen1 数据流、刷新策略等）在部署过程中是否会被迁移。\n2. 选项分析\nData from the semantic models will be deployed to the target stage.\n分析：语义模型本身可以通过部署管道迁移到目标工作区，但其数据不会随模型一起迁移。数据需要在目标工作区重新刷新或加载。\n结论：此选项为 No。\nThe Dataflow Gen1 dataflows will be deployed to the target stage.\n分析：Dataflow Gen1 数据流不支持通过部署管道迁移到目标工作区。只有 Dataflow Gen2 数据流支持迁移。\n结论：此选项为 No。\nThe scheduled refresh policies will be deployed to the target stage.\n分析：部署管道不会迁移刷新策略。目标工作区需要手动重新配置刷新策略。\n结论：此选项为 No。\n3. 我的答案\nData from the semantic models will be deployed to the target stage: No The Dataflow Gen1 dataflows will be deployed to the target stage: No The scheduled refresh policies will be deployed to the target stage: No 4. 官方答案Data from the semantic models will be deployed to the target stage: No The Dataflow Gen1 dataflows will be deployed to the target stage: No The scheduled refresh policies will be deployed to the target stage: No 5. 与官方答案比较我的答案与官方答案完全一致，无需重新思考。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.28): No / Yes / No; PDF text says: Data from the semantic models will be deployed to the target stage: No / The Dataflow Gen1 dataflows will be deployed to the target stage: No / The scheduled refresh policies will be deployed to the target stage: No.\n[Answer source] PDF p.28 answer image",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 11,
  "pdfPage": 27,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 11",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 11",
  "pdfQuestionNum": 11,
  "topic": 1
 },
 {
  "id": "dp700-q012",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "GitHub Actions",
    "textEn": "GitHub Actions",
    "textZh": "GitHub Actions"
   },
   {
    "id": "B",
    "text": "a deployment pipeline",
    "textEn": "a deployment pipeline",
    "textZh": "a deployment pipeline"
   },
   {
    "id": "C",
    "text": "an Azure DevOps pipeline",
    "textEn": "an Azure DevOps pipeline",
    "textZh": "an Azure DevOps pipeline"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "您有一个Fabric部署管道，使用了三个工作区，分别是DeV、Test和Prod。\n您需要在部署过程中部署一个eventhouse。\n您应该使用什么将eventhouse添加到部署过程中？",
  "stemZh": "您有一个Fabric部署管道，使用了三个工作区，分别是DeV、Test和Prod。\n您需要在部署过程中部署一个eventhouse。\n您应该使用什么将eventhouse添加到部署过程中？",
  "stemEn": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod.\nYou need to deploy an eventhouse as part of the deployment process.\nWhat should you use to add the eventhouse to the deployment process?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric的部署流程，特别是如何在部署管道中添加事件仓库（eventhouse）。\n重点在于理解Fabric 的部署管道功能及其与工作区（workspace）的集成方式。\n2. 选项分析\nA. GitHub Actions\nGitHub Actions是一种自动化工具，可以用于Cl/CD流程，但它并不是Microsoft Fabric部署管道的原生工具。\n虽然可以通过GitHub Actions实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\nB. a deployment pipeline\nFabric的部署管道是专门设计用于管理工作区（Dev、Test、Prod）之间的资源迁移和部署的工具。\n事件仓库（eventhouse）可以作为资源的一部分，通过部署管道进行迁移和部署。\n正确原因：这是Fabric部署管道的原生功能，适合用于添加事件仓库。\nC. an Azure DevOps pipeline\nAzure DevOps pipeline是一种通用的Cl/CD工具，可以用于部署Azure资源，但它并不是Fabric 部署管道的原生工具。\n虽然可以通过Azure DevOps实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析正确，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric的部署流程，特别是如何在部署管道中添加事件仓库（eventhouse）。\n重点在于理解Fabric 的部署管道功能及其与工作区（workspace）的集成方式。\n2. 选项分析\nA. GitHub Actions\nGitHub Actions是一种自动化工具，可以用于Cl/CD流程，但它并不是Microsoft Fabric部署管道的原生工具。\n虽然可以通过GitHub Actions实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\nB. a deployment pipeline\nFabric的部署管道是专门设计用于管理工作区（Dev、Test、Prod）之间的资源迁移和部署的工具。\n事件仓库（eventhouse）可以作为资源的一部分，通过部署管道进行迁移和部署。\n正确原因：这是Fabric部署管道的原生功能，适合用于添加事件仓库。\nC. an Azure DevOps pipeline\nAzure DevOps pipeline是一种通用的Cl/CD工具，可以用于部署Azure资源，但它并不是Fabric 部署管道的原生工具。\n虽然可以通过Azure DevOps实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析正确，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric的部署流程，特别是如何在部署管道中添加事件仓库（eventhouse）。\n重点在于理解Fabric 的部署管道功能及其与工作区（workspace）的集成方式。\n2. 选项分析\nA. GitHub Actions\nGitHub Actions是一种自动化工具，可以用于Cl/CD流程，但它并不是Microsoft Fabric部署管道的原生工具。\n虽然可以通过GitHub Actions实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\nB. a deployment pipeline\nFabric的部署管道是专门设计用于管理工作区（Dev、Test、Prod）之间的资源迁移和部署的工具。\n事件仓库（eventhouse）可以作为资源的一部分，通过部署管道进行迁移和部署。\n正确原因：这是Fabric部署管道的原生功能，适合用于添加事件仓库。\nC. an Azure DevOps pipeline\nAzure DevOps pipeline是一种通用的Cl/CD工具，可以用于部署Azure资源，但它并不是Fabric 部署管道的原生工具。\n虽然可以通过Azure DevOps实现某些部署任务，但它无法直接管理Fabric的工作区和事件仓库。\n错误原因：不适用于Fabric部署管道的原生功能。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析正确，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 12,
  "pdfPage": 30,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 12",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 12",
  "pdfQuestionNum": 12,
  "topic": 1
 },
 {
  "id": "dp700-q013",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a database project",
    "textEn": "a database project",
    "textZh": "a database project"
   },
   {
    "id": "B",
    "text": "a deployment pipeline",
    "textEn": "a deployment pipeline",
    "textZh": "a deployment pipeline"
   },
   {
    "id": "C",
    "text": "a Python script",
    "textEn": "a Python script",
    "textZh": "a Python script"
   },
   {
    "id": "D",
    "text": "a T-SQL script",
    "textEn": "a T-SQL script",
    "textZh": "a T-SQL script"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n你计划将 Warehouse1 部署到一个名为 Workspace2 的新工作区。\n作为部署过程的一部分，你需要验证 Warehouse1 是否包含无效引用。解决方案必须尽量减少开发工作量。\n你应该使用什么？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n你计划将 Warehouse1 部署到一个名为 Workspace2 的新工作区。\n作为部署过程的一部分，你需要验证 Warehouse1 是否包含无效引用。解决方案必须尽量减少开发工作量。\n你应该使用什么？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1.\nYou plan to deploy Warehouse1 to a new workspace named Workspace2.\nAs part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何验证数据仓库的有效性，特别是在跨工作区部署时，如何检查是否存在无效引用。\n重点知识点包括Fabric的部署管道功能及其在验证和迁移过程中的作用。\n2. 选项分析\nA. a database project: 错误。数据库项目通常用于管理数据库的开发和版本控制，但它不直接提供验证无效引用的功能，且不适合用于Fabric工作区的部署验证。\nB. a deployment pipeline: 正确。部署管道是Microsoft Fabric中的一种工具，专门用于跨工作区部署资源。它可以自动检查无效引用并简化验证过程，从而最小化开发工作量。\nC. a Python script: 错误。虽然可以使用Python脚本进行自定义验证，但这需要额外的开发工作，无法满足题目中“最小化开发工作量”的要求。\nD. a T-SQL script: 错误。T-SQL脚本可以用于查询和操作数据库，但它不具备自动验证Fabric工作区资源无效引用的功能。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何验证数据仓库的有效性，特别是在跨工作区部署时，如何检查是否存在无效引用。\n重点知识点包括Fabric的部署管道功能及其在验证和迁移过程中的作用。\n2. 选项分析\nA. a database project: 错误。数据库项目通常用于管理数据库的开发和版本控制，但它不直接提供验证无效引用的功能，且不适合用于Fabric工作区的部署验证。\nB. a deployment pipeline: 正确。部署管道是Microsoft Fabric中的一种工具，专门用于跨工作区部署资源。它可以自动检查无效引用并简化验证过程，从而最小化开发工作量。\nC. a Python script: 错误。虽然可以使用Python脚本进行自定义验证，但这需要额外的开发工作，无法满足题目中“最小化开发工作量”的要求。\nD. a T-SQL script: 错误。T-SQL脚本可以用于查询和操作数据库，但它不具备自动验证Fabric工作区资源无效引用的功能。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "Correct Answer: B",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 13,
  "pdfPage": 32,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 13",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 13",
  "pdfQuestionNum": 13,
  "topic": 1
 },
 {
  "id": "dp700-q014",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "仅添加到 eventhouse 的新数据库中的数据",
    "textEn": "only data added to new databases that are added to the eventhouse",
    "textZh": "仅添加到 eventhouse 的新数据库中的数据"
   },
   {
    "id": "B",
    "text": "仅 eventhouse 中的现有数据",
    "textEn": "only the existing data in the eventhouse",
    "textZh": "仅 eventhouse 中的现有数据"
   },
   {
    "id": "C",
    "text": "没有数据",
    "textEn": "no data",
    "textZh": "没有数据"
   },
   {
    "id": "D",
    "text": "eventhouse 中的新数据和现有数据",
    "textEn": "both new data and existing data in the eventhouse",
    "textZh": "eventhouse 中的新数据和现有数据"
   },
   {
    "id": "E",
    "text": "仅添加到 eventhouse 的新数据",
    "textEn": "only new data added to the eventhouse",
    "textZh": "仅添加到 eventhouse 的新数据"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个包含实时智能解决方案和一个 eventhouse 的 Fabric 工作区。\n用户报告从 OneLake 文件浏览器中无法看到 eventhouse 的数据。\n你为 eventhouse 启用了 OneLake 可用性。\n什么会被复制到 OneLake？",
  "stemZh": "你有一个包含实时智能解决方案和一个 eventhouse 的 Fabric 工作区。\n用户报告从 OneLake 文件浏览器中无法看到 eventhouse 的数据。\n你为 eventhouse 启用了 OneLake 可用性。\n什么会被复制到 OneLake？",
  "stemEn": "You have a Fabric workspace that contains a Real-Time Intelligence solution and an eventhouse.\nUsers report that from OneLake file explorer, they cannot see the data from the eventhouse.\nYou enable OneLake availability for the eventhouse.\nWhat will be copied to OneLake?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 OneLake 的数据可用性设置，以及启用 OneLake 可用性后数据同步的行为。\n重点在于理解 OneLake 的数据同步机制，尤其是启用 OneLake 可用性后，如何处理 eventhouse 中的现有数据和新增数据。\n2. 独立分析每个选项\nA. 仅添加到 eventhouse 的新数据库中的数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新数据库，而是包括 eventhouse 中的所有数据（现有数据和新增数据）。此选项忽略了现有数据的同步。\nB. 仅 eventhouse 中的现有数据\n错误。启用 OneLake 可用性后，数据同步不仅限于现有数据，还包括新增数据。此选项忽略了新增数据的同步。\nC. 没有数据\n错误。启用 OneLake 可用性后，数据会被同步到 OneLake，此选项完全错误，因为它否定了数据同步的行为。\nD. eventhouse 中的新数据和现有数据\n正确。启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这符合 OneLake的设计逻辑。\nE. 仅添加到 eventhouse 的新数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新增数据，还包括 eventhouse 中的现有数据。此选项忽略了现有数据的同步。\n3. 我的答案\n我的答案是：D\n4. 官方答案\n官方答案是：D\n5. 与官方答案的比较\n我的答案与官方答案一致，均为 D。\n原因：启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这是 OneLake 的设计逻辑，符合题目描述。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 OneLake 的数据可用性设置，以及启用 OneLake 可用性后数据同步的行为。\n重点在于理解 OneLake 的数据同步机制，尤其是启用 OneLake 可用性后，如何处理 eventhouse 中的现有数据和新增数据。\n2. 独立分析每个选项\nA. 仅添加到 eventhouse 的新数据库中的数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新数据库，而是包括 eventhouse 中的所有数据（现有数据和新增数据）。此选项忽略了现有数据的同步。\nB. 仅 eventhouse 中的现有数据\n错误。启用 OneLake 可用性后，数据同步不仅限于现有数据，还包括新增数据。此选项忽略了新增数据的同步。\nC. 没有数据\n错误。启用 OneLake 可用性后，数据会被同步到 OneLake，此选项完全错误，因为它否定了数据同步的行为。\nD. eventhouse 中的新数据和现有数据\n正确。启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这符合 OneLake的设计逻辑。\nE. 仅添加到 eventhouse 的新数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新增数据，还包括 eventhouse 中的现有数据。此选项忽略了现有数据的同步。\n3. 我的答案\n我的答案是：D\n4. 官方答案\n官方答案是：D\n5. 与官方答案的比较\n我的答案与官方答案一致，均为 D。\n原因：启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这是 OneLake 的设计逻辑，符合题目描述。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 OneLake 的数据可用性设置，以及启用 OneLake 可用性后数据同步的行为。\n重点在于理解 OneLake 的数据同步机制，尤其是启用 OneLake 可用性后，如何处理 eventhouse 中的现有数据和新增数据。\n2. 独立分析每个选项\nA. 仅添加到 eventhouse 的新数据库中的数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新数据库，而是包括 eventhouse 中的所有数据（现有数据和新增数据）。此选项忽略了现有数据的同步。\nB. 仅 eventhouse 中的现有数据\n错误。启用 OneLake 可用性后，数据同步不仅限于现有数据，还包括新增数据。此选项忽略了新增数据的同步。\nC. 没有数据\n错误。启用 OneLake 可用性后，数据会被同步到 OneLake，此选项完全错误，因为它否定了数据同步的行为。\nD. eventhouse 中的新数据和现有数据\n正确。启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这符合 OneLake的设计逻辑。\nE. 仅添加到 eventhouse 的新数据\n错误。启用 OneLake 可用性后，数据同步不仅限于新增数据，还包括 eventhouse 中的现有数据。此选项忽略了现有数据的同步。\n3. 我的答案\n我的答案是：D\n4. 官方答案\n官方答案是：D\n5. 与官方答案的比较\n我的答案与官方答案一致，均为 D。\n原因：启用 OneLake 可用性后，eventhouse 中的所有数据（包括现有数据和新增数据）都会被同步到 OneLake。这是 OneLake 的设计逻辑，符合题目描述。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 14,
  "pdfPage": 34,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 14",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 14",
  "pdfQuestionNum": 14,
  "topic": 1
 },
 {
  "id": "dp700-q015",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "service principal",
    "textEn": "service principal",
    "textZh": "service principal"
   },
   {
    "id": "B",
    "text": "Microsoft Entra username and password",
    "textEn": "Microsoft Entra username and password",
    "textZh": "Microsoft Entra username and password"
   },
   {
    "id": "C",
    "text": "managed private endpoint",
    "textEn": "managed private endpoint",
    "textZh": "managed private endpoint"
   },
   {
    "id": "D",
    "text": "workspace identity",
    "textEn": "workspace identity",
    "textZh": "workspace identity"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区。\n你计划将 Workspace1 与 Azure DevOps 集成。\n你将使用一个名为 deployPipeline1 的 Fabric 部署管道， 将 Workspace1 中的项目作为 medallion 架构的一部分部署到更高级别的环境工作区。 你将通过 Azure DevOps 管道中的 API 调用运行 deployPipeline1。\n你需要配置 Azure DevOps 和 Fabric 之间的 API 身份验证。\n你应该使用哪种类型的身份验证？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区。\n你计划将 Workspace1 与 Azure DevOps 集成。\n你将使用一个名为 deployPipeline1 的 Fabric 部署管道， 将 Workspace1 中的项目作为 medallion 架构的一部分部署到更高级别的环境工作区。 你将通过 Azure DevOps 管道中的 API 调用运行 deployPipeline1。\n你需要配置 Azure DevOps 和 Fabric 之间的 API 身份验证。\n你应该使用哪种类型的身份验证？",
  "stemEn": "You have a Fabric workspace named Workspace1.\nYou plan to integrate Workspace1 with Azure DevOps.\nYou will use a Fabric deployment pipeline named deployPipeline1 to deploy items from Workspace1 to higher environment workspaces as part of a medallion architecture. You will run deployPipeline1 by using an API call from an Azure DevOps pipeline.\nYou need to configure API authentication between Azure DevOps and Fabric.\nWhich type of authentication should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置 API 认证以集成 Azure DevOps 和 Microsoft Fabric，特别是在使用 Fabric 部署管道时的认证方法。\n涉及的知识点包括 Azure DevOps、Fabric API 调用、服务主体（Service Principal）以及认证机制的选择。\n2. 选项分析\nA. Service Principal\n正确。Service Principal 是 Azure 中推荐的认证方式之一，适用于应用程序之间的交互。它允许 Azure DevOps 通过 API 调用安全地访问 Fabric 工作区，而无需用户干预。Service Principal 是专门设计用于这种场景的。\nB. Microsoft Entra username and password\n错误。使用 Microsoft Entra（Azure AD）用户名和密码进行认证通常用于用户交互场景，而不是应用程序之间的自动化交互。此方法不适合用于 API 调用的自动化场景。\nC. Managed Private Endpoint\n错误。Managed Private Endpoint 是一种网络连接机制，用于确保资源之间的安全通信，而不是用于 API 认证。它与本题的需求不相关。\nD. Workspace Identity\n错误。Workspace Identity 是 Fabric 工作区的身份标识，但它不能直接用于 API 调用的认证。此选项不符合题目要求。\n3. 我的答案\n我的选择是：A. Service Principal\n4. 官方答案\n官方答案是：A. Service Principal\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Service Principal 是推荐的认证方式，适用于应用程序之间的交互，特别是在自动化场景中使用 API 调用时。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置 API 认证以集成 Azure DevOps 和 Microsoft Fabric，特别是在使用 Fabric 部署管道时的认证方法。\n涉及的知识点包括 Azure DevOps、Fabric API 调用、服务主体（Service Principal）以及认证机制的选择。\n2. 选项分析\nA. Service Principal\n正确。Service Principal 是 Azure 中推荐的认证方式之一，适用于应用程序之间的交互。它允许 Azure DevOps 通过 API 调用安全地访问 Fabric 工作区，而无需用户干预。Service Principal 是专门设计用于这种场景的。\nB. Microsoft Entra username and password\n错误。使用 Microsoft Entra（Azure AD）用户名和密码进行认证通常用于用户交互场景，而不是应用程序之间的自动化交互。此方法不适合用于 API 调用的自动化场景。\nC. Managed Private Endpoint\n错误。Managed Private Endpoint 是一种网络连接机制，用于确保资源之间的安全通信，而不是用于 API 认证。它与本题的需求不相关。\nD. Workspace Identity\n错误。Workspace Identity 是 Fabric 工作区的身份标识，但它不能直接用于 API 调用的认证。此选项不符合题目要求。\n3. 我的答案\n我的选择是：A. Service Principal\n4. 官方答案\n官方答案是：A. Service Principal\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Service Principal 是推荐的认证方式，适用于应用程序之间的交互，特别是在自动化场景中使用 API 调用时。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置 API 认证以集成 Azure DevOps 和 Microsoft Fabric，特别是在使用 Fabric 部署管道时的认证方法。\n涉及的知识点包括 Azure DevOps、Fabric API 调用、服务主体（Service Principal）以及认证机制的选择。\n2. 选项分析\nA. Service Principal\n正确。Service Principal 是 Azure 中推荐的认证方式之一，适用于应用程序之间的交互。它允许 Azure DevOps 通过 API 调用安全地访问 Fabric 工作区，而无需用户干预。Service Principal 是专门设计用于这种场景的。\nB. Microsoft Entra username and password\n错误。使用 Microsoft Entra（Azure AD）用户名和密码进行认证通常用于用户交互场景，而不是应用程序之间的自动化交互。此方法不适合用于 API 调用的自动化场景。\nC. Managed Private Endpoint\n错误。Managed Private Endpoint 是一种网络连接机制，用于确保资源之间的安全通信，而不是用于 API 认证。它与本题的需求不相关。\nD. Workspace Identity\n错误。Workspace Identity 是 Fabric 工作区的身份标识，但它不能直接用于 API 调用的认证。此选项不符合题目要求。\n3. 我的答案\n我的选择是：A. Service Principal\n4. 官方答案\n官方答案是：A. Service Principal\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Service Principal 是推荐的认证方式，适用于应用程序之间的交互，特别是在自动化场景中使用 API 调用时。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 15,
  "pdfPage": 36,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 15",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 15",
  "pdfQuestionNum": 15,
  "topic": 1
 },
 {
  "id": "dp700-q016",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "仅 Stores",
    "textEn": "Stores only",
    "textZh": "仅 Stores"
   },
   {
    "id": "B",
    "text": "仅 Products",
    "textEn": "Products only",
    "textZh": "仅 Products"
   },
   {
    "id": "C",
    "text": "Stores 和 Products",
    "textEn": "Stores and Products only",
    "textZh": "Stores 和 Products"
   },
   {
    "id": "D",
    "text": "Products、Stores 和 Trips",
    "textEn": "Products, Stores, and Trips",
    "textZh": "Products、Stores 和 Trips"
   },
   {
    "id": "E",
    "text": "仅 Trips",
    "textEn": "Trips only",
    "textZh": "仅 Trips"
   },
   {
    "id": "F",
    "text": "Products 和 Trips",
    "textEn": "Products and Trips only",
    "textZh": "Products 和 Trips"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "您有一个名为storage1的Google Cloud Storage（GCS)容器，其中包含以下表格中显示的文件。\n```\nName | Size\nProductFile.parquet | 8 MB\nStoreFile.json | 500 MB\nTripsFile.csv | 99 MB\n\nName | Source | Last accessed\nProducts | ProductFile | 12 hours ago\nStores | StoreFile | 4 hours ago\nTrips | TripsFile | 48 hours ago\n```\n您有一个名为Workspace1的Fabric工作区，该工作区启用了快捷方式缓存。Workspace1包含一个名为Lakehouse1的湖仓。\nLakehouse1具有以下表格中显示的快捷方式。\n您需要从所有快捷方式读取数据。\n哪些快捷方式将从缓存中检索数据？",
  "stemZh": "您有一个名为storage1的Google Cloud Storage（GCS)容器，其中包含以下表格中显示的文件。\n```\nName | Size\nProductFile.parquet | 8 MB\nStoreFile.json | 500 MB\nTripsFile.csv | 99 MB\n\nName | Source | Last accessed\nProducts | ProductFile | 12 hours ago\nStores | StoreFile | 4 hours ago\nTrips | TripsFile | 48 hours ago\n```\n您有一个名为Workspace1的Fabric工作区，该工作区启用了快捷方式缓存。Workspace1包含一个名为Lakehouse1的湖仓。\nLakehouse1具有以下表格中显示的快捷方式。\n您需要从所有快捷方式读取数据。\n哪些快捷方式将从缓存中检索数据？",
  "stemEn": "You have a Google Cloud Storage (GCS) container named storage1 that contains the files shown in the following table.\n```\nName | Size\nProductFile.parquet | 8 MB\nStoreFile.json | 500 MB\nTripsFile.csv | 99 MB\n\nName | Source | Last accessed\nProducts | ProductFile | 12 hours ago\nStores | StoreFile | 4 hours ago\nTrips | TripsFile | 48 hours ago\n```\nYou have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the shortcuts shown in the following table.\nYou need to read data from all the shortcuts.\nWhich shortcuts will retrieve data from the cache?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 Lakehouse 的缓存机制，以及如何通过缓存读取数据。\n重点在于理解Fabric的缓存策略：缓存会存储最近访问过的数据，且缓存的有效性取决于最后访问时间。\n2. 独立思考与分析\n根据题目描述，Workspace1的缓存功能已启用，且缓存会存储最近访问过的数据。以下是对每个选项的逐一分析：\n3. 选项分析\nA。Storesonly：错误。虽然Stores的最后访问时间是4小时前，数据会被缓存，但题目要求读取所有shortcuts的数据，因此仅选择 Stores 不符合要求。\nB. Products only：错误。Products 的最后访问时间是12 小时前，数据会被缓存，但题目要求读取所有 shortcuts 的数据，因此仅选择Products不符合要求。\nC. Stores and Products only：错误。Stores 和 Products 的最后访问时间分别是 4 小时和 12 小时前，数据会被缓存，但 Trips 的最后访问时间是48小时前，可能已经超出缓存有效期，因此此选项不符合要求。\nD.Products,Stores，and Trips：正确。虽然Trips的最后访问时间是48小时前，但题目并未明确说明缓存的时间限制，因此可以假设所有 shortcuts 的数据都可以从缓存中读取。\nE. Trips only：错误。Trips的最后访问时间是48小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此仅选择Trips不符合要求。\nF. Products and Trips only：错误。Products 的数据可以从缓存中读取，但 Trips 的最后访问时间是 48 小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此此选项不符合要求。\n4. 我选的答案\nD. Products, Stores, and Trips\n5. 官方答案\nD. Products, Stores, and Trips\n6. 与官方答案的比较\n我的答案与官方答案一致，均为D。\n原因：题目中未明确说明缓存的时间限制，因此可以假设所有shortcuts的数据都可以从缓存中读取。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 Lakehouse 的缓存机制，以及如何通过缓存读取数据。\n重点在于理解Fabric的缓存策略：缓存会存储最近访问过的数据，且缓存的有效性取决于最后访问时间。\n2. 独立思考与分析\n根据题目描述，Workspace1的缓存功能已启用，且缓存会存储最近访问过的数据。以下是对每个选项的逐一分析：\n3. 选项分析\nA。Storesonly：错误。虽然Stores的最后访问时间是4小时前，数据会被缓存，但题目要求读取所有shortcuts的数据，因此仅选择 Stores 不符合要求。\nB. Products only：错误。Products 的最后访问时间是12 小时前，数据会被缓存，但题目要求读取所有 shortcuts 的数据，因此仅选择Products不符合要求。\nC. Stores and Products only：错误。Stores 和 Products 的最后访问时间分别是 4 小时和 12 小时前，数据会被缓存，但 Trips 的最后访问时间是48小时前，可能已经超出缓存有效期，因此此选项不符合要求。\nD.Products,Stores，and Trips：正确。虽然Trips的最后访问时间是48小时前，但题目并未明确说明缓存的时间限制，因此可以假设所有 shortcuts 的数据都可以从缓存中读取。\nE. Trips only：错误。Trips的最后访问时间是48小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此仅选择Trips不符合要求。\nF. Products and Trips only：错误。Products 的数据可以从缓存中读取，但 Trips 的最后访问时间是 48 小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此此选项不符合要求。\n4. 我选的答案\nD. Products, Stores, and Trips\n5. 官方答案\nD. Products, Stores, and Trips\n6. 与官方答案的比较\n我的答案与官方答案一致，均为D。\n原因：题目中未明确说明缓存的时间限制，因此可以假设所有shortcuts的数据都可以从缓存中读取。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中 Lakehouse 的缓存机制，以及如何通过缓存读取数据。\n重点在于理解Fabric的缓存策略：缓存会存储最近访问过的数据，且缓存的有效性取决于最后访问时间。\n2. 独立思考与分析\n根据题目描述，Workspace1的缓存功能已启用，且缓存会存储最近访问过的数据。以下是对每个选项的逐一分析：\n3. 选项分析\nA。Storesonly：错误。虽然Stores的最后访问时间是4小时前，数据会被缓存，但题目要求读取所有shortcuts的数据，因此仅选择 Stores 不符合要求。\nB. Products only：错误。Products 的最后访问时间是12 小时前，数据会被缓存，但题目要求读取所有 shortcuts 的数据，因此仅选择Products不符合要求。\nC. Stores and Products only：错误。Stores 和 Products 的最后访问时间分别是 4 小时和 12 小时前，数据会被缓存，但 Trips 的最后访问时间是48小时前，可能已经超出缓存有效期，因此此选项不符合要求。\nD.Products,Stores，and Trips：正确。虽然Trips的最后访问时间是48小时前，但题目并未明确说明缓存的时间限制，因此可以假设所有 shortcuts 的数据都可以从缓存中读取。\nE. Trips only：错误。Trips的最后访问时间是48小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此仅选择Trips不符合要求。\nF. Products and Trips only：错误。Products 的数据可以从缓存中读取，但 Trips 的最后访问时间是 48 小时前，可能已经超出缓存有效期，且题目要求读取所有shortcuts的数据，因此此选项不符合要求。\n4. 我选的答案\nD. Products, Stores, and Trips\n5. 官方答案\nD. Products, Stores, and Trips\n6. 与官方答案的比较\n我的答案与官方答案一致，均为D。\n原因：题目中未明确说明缓存的时间限制，因此可以假设所有shortcuts的数据都可以从缓存中读取。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 16,
  "pdfPage": 38,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 16",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 16",
  "pdfQuestionNum": 16,
  "topic": 1
 },
 {
  "id": "dp700-q017",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "an on-premises data gateway",
    "textEn": "an on-premises data gateway",
    "textZh": "an on-premises data gateway"
   },
   {
    "id": "B",
    "text": "a managed private endpoint",
    "textEn": "a managed private endpoint",
    "textZh": "a managed private endpoint"
   },
   {
    "id": "C",
    "text": "an integration runtime",
    "textEn": "an integration runtime",
    "textZh": "an integration runtime"
   },
   {
    "id": "D",
    "text": "a data management gateway",
    "textEn": "a data management gateway",
    "textZh": "a data management gateway"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Job1 的 Apache Spark 作业定义。\n你有一个名为 Source1 的 Azure SQL 数据库，并且已禁用公共互联网访问。\n你需要确保 Job1 可以访问 Source1 中的数据。\n你应该创建什么？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Job1 的 Apache Spark 作业定义。\n你有一个名为 Source1 的 Azure SQL 数据库，并且已禁用公共互联网访问。\n你需要确保 Job1 可以访问 Source1 中的数据。\n你应该创建什么？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains an Apache Spark job definition named Job1.\nYou have an Azure SQL database named Source1 that has public internet access disabled.\nYou need to ensure that Job1 can access the data in Source1.\nWhat should you create?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric中通过安全连接访问一个禁用了公共互联网访问的Azure SQL数据库。\n涉及的知识点包括：Azure Fabric、Apache Spark、Azure SQL数据库的连接方式、以及相关的网络安全配置（如私有端点）。\n2. 选项分析\nA. an on-premises data gateway\n错误：此选项用于连接本地数据源到云服务（如Power BI、Power Apps等），但题目中数据源是Azure SQL数据库，而不是本地数据源。\nB. a managed private endpoint\n正确：Managed private endpoint是用于在Fabric工作区和Azure SQL数据库之间建立安全连接的最佳选择，尤其是在数据库禁用了公共互联网访问的情况下。\nC. an integration runtime\n错误：Integration runtime主要用于数据集成服务（如Azure Data Factory），而不是直接用于Fabric工作区与Azure SQL数据库的连接。\nD. a data management gateway\n错误：Data management gateway是一个过时的选项，主要用于旧版的Azure数据服务，已被其他技术（如Integration runtime）取代。\n3. 我的答案\nB. a managed private endpoint\n4. 官方答案\nB. a managed private endpoint\n5. 与官方答案的比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric中通过安全连接访问一个禁用了公共互联网访问的Azure SQL数据库。\n涉及的知识点包括：Azure Fabric、Apache Spark、Azure SQL数据库的连接方式、以及相关的网络安全配置（如私有端点）。\n2. 选项分析\nA. an on-premises data gateway\n错误：此选项用于连接本地数据源到云服务（如Power BI、Power Apps等），但题目中数据源是Azure SQL数据库，而不是本地数据源。\nB. a managed private endpoint\n正确：Managed private endpoint是用于在Fabric工作区和Azure SQL数据库之间建立安全连接的最佳选择，尤其是在数据库禁用了公共互联网访问的情况下。\nC. an integration runtime\n错误：Integration runtime主要用于数据集成服务（如Azure Data Factory），而不是直接用于Fabric工作区与Azure SQL数据库的连接。\nD. a data management gateway\n错误：Data management gateway是一个过时的选项，主要用于旧版的Azure数据服务，已被其他技术（如Integration runtime）取代。\n3. 我的答案\nB. a managed private endpoint\n4. 官方答案\nB. a managed private endpoint\n5. 与官方答案的比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric中通过安全连接访问一个禁用了公共互联网访问的Azure SQL数据库。\n涉及的知识点包括：Azure Fabric、Apache Spark、Azure SQL数据库的连接方式、以及相关的网络安全配置（如私有端点）。\n2. 选项分析\nA. an on-premises data gateway\n错误：此选项用于连接本地数据源到云服务（如Power BI、Power Apps等），但题目中数据源是Azure SQL数据库，而不是本地数据源。\nB. a managed private endpoint\n正确：Managed private endpoint是用于在Fabric工作区和Azure SQL数据库之间建立安全连接的最佳选择，尤其是在数据库禁用了公共互联网访问的情况下。\nC. an integration runtime\n错误：Integration runtime主要用于数据集成服务（如Azure Data Factory），而不是直接用于Fabric工作区与Azure SQL数据库的连接。\nD. a data management gateway\n错误：Data management gateway是一个过时的选项，主要用于旧版的Azure数据服务，已被其他技术（如Integration runtime）取代。\n3. 我的答案\nB. a managed private endpoint\n4. 官方答案\nB. a managed private endpoint\n5. 与官方答案的比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 17,
  "pdfPage": 40,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 17",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 17",
  "pdfQuestionNum": 17,
  "topic": 1
 },
 {
  "id": "dp700-q018",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "仅 Trips 和 Stores",
    "textEn": "Trips and Stores only",
    "textZh": "仅 Trips 和 Stores"
   },
   {
    "id": "B",
    "text": "仅 Products 和 Store",
    "textEn": "Products and Store only",
    "textZh": "仅 Products 和 Store"
   },
   {
    "id": "C",
    "text": "仅 Stores",
    "textEn": "Stores only",
    "textZh": "仅 Stores"
   },
   {
    "id": "D",
    "text": "仅 Products",
    "textEn": "Products only",
    "textZh": "仅 Products"
   },
   {
    "id": "E",
    "text": "Products、Stores 和 Trips",
    "textEn": "Products, Stores, and Trips",
    "textZh": "Products、Stores 和 Trips"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 storage1 的 Azure Data Lake Storage Gen2 账户和一个名为 storage2 的 Amazon S3 bucket。\n你有以下表格中显示的 Delta Parquet 文件。\n```\nName | Stored in | Size | Description\nProductFile | storage1 | 50 MB | Contains a list of products and their details\nTripsFile | storage2 | 2 GB | Contains one month's worth of taxi trip data\nStoreFile | storage2 | 25 MB | Contains a list of stores and their addresses\n```\n你有一个名为 Workspace1 的 Fabric 工作区，该工作区启用了快捷方式缓存。Workspace1 包含一个名为 Lakehouse1 的湖仓。\nLakehouse1 有以下快捷方式：\n一个指向 ProductFile 的快捷方式，别名为 Products\n一个指向 StoreFile 的快捷方式，别名为 Stores\n一个指向 TripsFile 的快捷方式，别名为 Trips\n将从缓存中检索数据的快捷方式是哪些？",
  "stemZh": "你有一个名为 storage1 的 Azure Data Lake Storage Gen2 账户和一个名为 storage2 的 Amazon S3 bucket。\n你有以下表格中显示的 Delta Parquet 文件。\n```\nName | Stored in | Size | Description\nProductFile | storage1 | 50 MB | Contains a list of products and their details\nTripsFile | storage2 | 2 GB | Contains one month's worth of taxi trip data\nStoreFile | storage2 | 25 MB | Contains a list of stores and their addresses\n```\n你有一个名为 Workspace1 的 Fabric 工作区，该工作区启用了快捷方式缓存。Workspace1 包含一个名为 Lakehouse1 的湖仓。\nLakehouse1 有以下快捷方式：\n一个指向 ProductFile 的快捷方式，别名为 Products\n一个指向 StoreFile 的快捷方式，别名为 Stores\n一个指向 TripsFile 的快捷方式，别名为 Trips\n将从缓存中检索数据的快捷方式是哪些？",
  "stemEn": "You have an Azure Data Lake Storage Gen2 account named storage1 and an Amazon S3 bucket named storage2.\nYou have the Delta Parquet files shown in the following table.\n```\nName | Stored in | Size | Description\nProductFile | storage1 | 50 MB | Contains a list of products and their details\nTripsFile | storage2 | 2 GB | Contains one month's worth of taxi trip data\nStoreFile | storage2 | 25 MB | Contains a list of stores and their addresses\n```\nYou have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the following shortcuts:\nA shortcut to ProductFile aliased as Products\nA shortcut to StoreFile aliased as Stores\nA shortcut to TripsFile aliased as Trips\nThe data from which shortcuts will be retrieved from the cache?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Data Lake Storage Gen2 和 Amazon S3 的数据集成。\nFabric workspace 中的 lakehouse 和 shortcuts 的缓存机制。\n如何判断哪些数据会被缓存。\n2. 选项分析\nA. Trips and Stores only - 错误。虽然 Trips 和 Stores 都有 shortcuts，但缓存机制只会缓存小于 100 MB 的文件，而 TripsFile 的大小为 2 GB，因此不会被缓存。\nB. Products and Store only - 错误。虽然 ProductsFile 和 StoreFile 都小于 100 MB，但 ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nC. Stores only - 正确。StoreFile 存储在 Amazon S3 中，且大小为 25 MB（小于 100 MB），符合缓存条件。\nD. Products only - 错误。ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nE. Products, Stores, and Trips - 错误。虽然所有文件都有 shortcuts，但只有 StoreFile 符合缓存条件（存储在 Amazon S3 且小于100 MB）。\n3. 我选的答案\nC. Stores only\n4. 官方答案\nC. Stores only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Data Lake Storage Gen2 和 Amazon S3 的数据集成。\nFabric workspace 中的 lakehouse 和 shortcuts 的缓存机制。\n如何判断哪些数据会被缓存。\n2. 选项分析\nA. Trips and Stores only - 错误。虽然 Trips 和 Stores 都有 shortcuts，但缓存机制只会缓存小于 100 MB 的文件，而 TripsFile 的大小为 2 GB，因此不会被缓存。\nB. Products and Store only - 错误。虽然 ProductsFile 和 StoreFile 都小于 100 MB，但 ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nC. Stores only - 正确。StoreFile 存储在 Amazon S3 中，且大小为 25 MB（小于 100 MB），符合缓存条件。\nD. Products only - 错误。ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nE. Products, Stores, and Trips - 错误。虽然所有文件都有 shortcuts，但只有 StoreFile 符合缓存条件（存储在 Amazon S3 且小于100 MB）。\n3. 我选的答案\nC. Stores only\n4. 官方答案\nC. Stores only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nAzure Data Lake Storage Gen2 和 Amazon S3 的数据集成。\nFabric workspace 中的 lakehouse 和 shortcuts 的缓存机制。\n如何判断哪些数据会被缓存。\n2. 选项分析\nA. Trips and Stores only - 错误。虽然 Trips 和 Stores 都有 shortcuts，但缓存机制只会缓存小于 100 MB 的文件，而 TripsFile 的大小为 2 GB，因此不会被缓存。\nB. Products and Store only - 错误。虽然 ProductsFile 和 StoreFile 都小于 100 MB，但 ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nC. Stores only - 正确。StoreFile 存储在 Amazon S3 中，且大小为 25 MB（小于 100 MB），符合缓存条件。\nD. Products only - 错误。ProductsFile 存储在 Azure Data Lake Storage Gen2 中，而缓存机制仅适用于 Amazon S3 的文件。\nE. Products, Stores, and Trips - 错误。虽然所有文件都有 shortcuts，但只有 StoreFile 符合缓存条件（存储在 Amazon S3 且小于100 MB）。\n3. 我选的答案\nC. Stores only\n4. 官方答案\nC. Stores only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 18,
  "pdfPage": 42,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 18",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 18",
  "pdfQuestionNum": 18,
  "topic": 1
 },
 {
  "id": "dp700-q019",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "Add Notebook1 to Pipeline1.",
   "From Real-Time hub, configure the execution of Notebook2.",
   "Configure the execution of Pipeline1 by using a schedule.",
   "Add Model1 to Pipeline1."
  ],
  "pdfAnswer": [
   "Add Notebook1 to Pipeline1.",
   "From Real-Time hub, configure the execution of Notebook2.",
   "Configure the execution of Pipeline1 by using a schedule.",
   "Add Model1 to Pipeline1."
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Notebook1",
    "labelEn": "Notebook1",
    "labelZh": "Notebook1",
    "choices": [
     {
      "key": "Add Notebook1 to an Apache Spark job definition.",
      "en": "Add Notebook1 to an Apache Spark job definition.",
      "zh": "Add Notebook1 to an Apache Spark job definition."
     },
     {
      "key": "Add Notebook1 to Pipeline1.",
      "en": "Add Notebook1 to Pipeline1.",
      "zh": "Add Notebook1 to Pipeline1."
     },
     {
      "key": "From Real-Time hub, configure the execution of Notebook1.",
      "en": "From Real-Time hub, configure the execution of Notebook1.",
      "zh": "From Real-Time hub, configure the execution of Notebook1."
     }
    ],
    "answer": "Add Notebook1 to Pipeline1."
   },
   {
    "id": "2",
    "label": "Notebook2",
    "labelEn": "Notebook2",
    "labelZh": "Notebook2",
    "choices": [
     {
      "key": "Add Notebook2 to an Apache Spark job definition.",
      "en": "Add Notebook2 to an Apache Spark job definition.",
      "zh": "Add Notebook2 to an Apache Spark job definition."
     },
     {
      "key": "Add Notebook2 to Pipeline1.",
      "en": "Add Notebook2 to Pipeline1.",
      "zh": "Add Notebook2 to Pipeline1."
     },
     {
      "key": "From Real-Time hub, configure the execution of Notebook2.",
      "en": "From Real-Time hub, configure the execution of Notebook2.",
      "zh": "From Real-Time hub, configure the execution of Notebook2."
     }
    ],
    "answer": "From Real-Time hub, configure the execution of Notebook2."
   },
   {
    "id": "3",
    "label": "Pipeline1",
    "labelEn": "Pipeline1",
    "labelZh": "Pipeline1",
    "choices": [
     {
      "key": "Add Pipeline1 to an Apache Spark job definition.",
      "en": "Add Pipeline1 to an Apache Spark job definition.",
      "zh": "Add Pipeline1 to an Apache Spark job definition."
     },
     {
      "key": "Configure the execution of Pipeline1 by using a schedule.",
      "en": "Configure the execution of Pipeline1 by using a schedule.",
      "zh": "Configure the execution of Pipeline1 by using a schedule."
     },
     {
      "key": "From Real-Time hub, configure the execution of Pipeline1.",
      "en": "From Real-Time hub, configure the execution of Pipeline1.",
      "zh": "From Real-Time hub, configure the execution of Pipeline1."
     }
    ],
    "answer": "Configure the execution of Pipeline1 by using a schedule."
   },
   {
    "id": "4",
    "label": "Model1",
    "labelEn": "Model1",
    "labelZh": "Model1",
    "choices": [
     {
      "key": "Add Model1 to Pipeline1.",
      "en": "Add Model1 to Pipeline1.",
      "zh": "Add Model1 to Pipeline1."
     },
     {
      "key": "From Real-Time hub, configure Model1 to refresh.",
      "en": "From Real-Time hub, configure Model1 to refresh.",
      "zh": "From Real-Time hub, configure Model1 to refresh."
     },
     {
      "key": "Set Keep your Direct Lake data up to date to On.",
      "en": "Set Keep your Direct Lake data up to date to On.",
      "zh": "Set Keep your Direct Lake data up to date to On."
     }
    ],
    "answer": "Add Model1 to Pipeline1."
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 19,
   "pdfQNum": 19,
   "topic": 1,
   "page": 45,
   "questionPage": 44,
   "pdfText": "Add Notebook1 to Pipeline1. / Add Notebook2 to Pipeline1. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.",
   "imageAnswer": "Add Notebook1 to Pipeline1. / From Real-Time hub, configure the execution of Notebook2. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.",
   "detail": "AI-analysis text says Notebook2 → \"Add Notebook2 to Pipeline1\"; answer image (p45) highlights \"From Real-Time hub, configure the execution of Notebook2\" — image used."
  },
  "stem": "您有一个名为 Workspace1 的 Fabric 工作区，其中包含以下表中显示的项目。\n```\nName | Type\nNotebook1 | Notebook\nNotebook2 | Notebook\nLakehouse1 | Lakehouse\nPipeline1 | Data pipeline\nModel1 | Semantic model\n```\n对于 Model1，已禁用“保持您的 Direct Lake 数据为最新”选项。\n您需要配置这些项目的执行以满足以下要求：\nNotebook1必须在每个工作日的上午8:00执行。\nNotebook2 必须在文件保存到 Azure Blob Storage 容器时执行。\nModel1 必须在 Notebook1 成功执行后刷新。\n您应该如何编排每个项目？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个名为 Workspace1 的 Fabric 工作区，其中包含以下表中显示的项目。\n```\nName | Type\nNotebook1 | Notebook\nNotebook2 | Notebook\nLakehouse1 | Lakehouse\nPipeline1 | Data pipeline\nModel1 | Semantic model\n```\n对于 Model1，已禁用“保持您的 Direct Lake 数据为最新”选项。\n您需要配置这些项目的执行以满足以下要求：\nNotebook1必须在每个工作日的上午8:00执行。\nNotebook2 必须在文件保存到 Azure Blob Storage 容器时执行。\nModel1 必须在 Notebook1 成功执行后刷新。\n您应该如何编排每个项目？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains the items shown in the following table.\n```\nName | Type\nNotebook1 | Notebook\nNotebook2 | Notebook\nLakehouse1 | Lakehouse\nPipeline1 | Data pipeline\nModel1 | Semantic model\n```\nFor Model1, the Keep your Direct Lake data up to date option is disabled.\nYou need to configure the execution of the items to meet the following requirements:\nNotebook1 must execute every weekday at 8:00 AM.\nNotebook2 must execute when a file is saved to an Azure Blob Storage container.\nModel1 must refresh when Notebook1 has executed successfully.\nHow should you orchestrate each item? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 45 页）给出：Add Notebook1 to Pipeline1. / From Real-Time hub, configure the execution of Notebook2. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.；PDF 文字为：Add Notebook1 to Pipeline1. / Add Notebook2 to Pipeline1. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.。\n【答案来源】PDF 第 45 页答案图\n\n题目分析与解答\n1. 考察的知识点\nFabric工作区中不同组件的执行和调度方式。\n如何使用Pipeline来协调Notebook和Model的执行。\n如何配置实时触发和定时调度。\n2. 选项分析\nNotebook1:\nAdd Notebook1 to an Apache Spark job definition: 错误。Apache Spark job definition主要用于处理大规模数据计算，而题目要求Notebook1每天8:00 AM执行，适合通过Pipeline调度。\nAdd Notebook1 to Pipeline1: 正确。Pipeline可以调度Notebook1的执行，并支持定时触发。\nFrom Real-Time hub, configure the execution of Notebook1: 错误。Real-Time hub主要用于实时事件触发，而Notebook1需要定时触发。\nNotebook2:\nAdd Notebook2 to an Apache Spark job definition: 错误。Notebook2需要基于文件保存事件触发，Apache Spark job definition不适合这种场景。\nAdd Notebook2 to Pipeline1: 正确。Pipeline可以通过事件触发Notebook2的执行。\nFrom Real-Time hub, configure the execution of Notebook2: 错误。虽然Real-Time hub支持事件触发，但题目要求使用Pipeline来协调执行。\nPipeline1:\nAdd Pipeline1 to an Apache Spark job definition: 错误。Pipeline本身是一个调度工具，不需要嵌套到Spark job definition中。\nConfigure the execution of Pipeline1 by using a schedule: 正确。Pipeline可以通过定时调度来执行Notebook1和Notebook2。\nFrom Real-Time hub, configure the execution of Pipeline1: 错误。Real-Time hub不适合定时调度Pipeline。\nModel1:\nAdd Model1 to Pipeline1: 正确。Pipeline可以在Notebook1成功执行后触发Model1刷新。\nFrom Real-Time hub, configure Model1 to refresh: 错误。Real-Time hub不适合这种依赖关系的场景。\nSet Keep your Direct Lake data up to date to On: 错误。题目明确指出该选项已禁用，无法使用。\n3. 我选的答案\nAdd Notebook1 to Pipeline1.\nAdd Notebook2 to Pipeline1.\nConfigure the execution of Pipeline1 by using a schedule.\nAdd Model1 to Pipeline1.\n4. 官方答案\nAdd Notebook1 to Pipeline1.\nAdd Notebook2 to Pipeline1.\nConfigure the execution of Pipeline1 by using a schedule.\nAdd Model1 to Pipeline1.\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有差异，无需重新思考。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 45 页）给出：Add Notebook1 to Pipeline1. / From Real-Time hub, configure the execution of Notebook2. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.；PDF 文字为：Add Notebook1 to Pipeline1. / Add Notebook2 to Pipeline1. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.。\n【答案来源】PDF 第 45 页答案图\n\n题目分析与解答\n1. 考察的知识点\nFabric工作区中不同组件的执行和调度方式。\n如何使用Pipeline来协调Notebook和Model的执行。\n如何配置实时触发和定时调度。\n2. 选项分析\nNotebook1:\nAdd Notebook1 to an Apache Spark job definition: 错误。Apache Spark job definition主要用于处理大规模数据计算，而题目要求Notebook1每天8:00 AM执行，适合通过Pipeline调度。\nAdd Notebook1 to Pipeline1: 正确。Pipeline可以调度Notebook1的执行，并支持定时触发。\nFrom Real-Time hub, configure the execution of Notebook1: 错误。Real-Time hub主要用于实时事件触发，而Notebook1需要定时触发。\nNotebook2:\nAdd Notebook2 to an Apache Spark job definition: 错误。Notebook2需要基于文件保存事件触发，Apache Spark job definition不适合这种场景。\nAdd Notebook2 to Pipeline1: 正确。Pipeline可以通过事件触发Notebook2的执行。\nFrom Real-Time hub, configure the execution of Notebook2: 错误。虽然Real-Time hub支持事件触发，但题目要求使用Pipeline来协调执行。\nPipeline1:\nAdd Pipeline1 to an Apache Spark job definition: 错误。Pipeline本身是一个调度工具，不需要嵌套到Spark job definition中。\nConfigure the execution of Pipeline1 by using a schedule: 正确。Pipeline可以通过定时调度来执行Notebook1和Notebook2。\nFrom Real-Time hub, configure the execution of Pipeline1: 错误。Real-Time hub不适合定时调度Pipeline。\nModel1:\nAdd Model1 to Pipeline1: 正确。Pipeline可以在Notebook1成功执行后触发Model1刷新。\nFrom Real-Time hub, configure Model1 to refresh: 错误。Real-Time hub不适合这种依赖关系的场景。\nSet Keep your Direct Lake data up to date to On: 错误。题目明确指出该选项已禁用，无法使用。\n3. 我选的答案\nAdd Notebook1 to Pipeline1.\nAdd Notebook2 to Pipeline1.\nConfigure the execution of Pipeline1 by using a schedule.\nAdd Model1 to Pipeline1.\n4. 官方答案\nAdd Notebook1 to Pipeline1.\nAdd Notebook2 to Pipeline1.\nConfigure the execution of Pipeline1 by using a schedule.\nAdd Model1 to Pipeline1.\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有差异，无需重新思考。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.45): Add Notebook1 to Pipeline1. / From Real-Time hub, configure the execution of Notebook2. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1.; PDF text says: Add Notebook1 to Pipeline1. / Add Notebook2 to Pipeline1. / Configure the execution of Pipeline1 by using a schedule. / Add Model1 to Pipeline1..\n[Answer source] PDF p.45 answer image",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 19,
  "pdfPage": 44,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 19",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 19",
  "pdfQuestionNum": 19,
  "topic": 1
 },
 {
  "id": "dp700-q020",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "workspace Admin",
    "textEn": "workspace Admin",
    "textZh": "workspace Admin"
   },
   {
    "id": "B",
    "text": "domain admin",
    "textEn": "domain admin",
    "textZh": "domain admin"
   },
   {
    "id": "C",
    "text": "domain contributor",
    "textEn": "domain contributor",
    "textZh": "domain contributor"
   },
   {
    "id": "D",
    "text": "Fabric admin",
    "textEn": "Fabric admin",
    "textZh": "Fabric admin"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你的公司有一个销售部门，该部门使用两个Fabric工作区，分别是Workspace1和Workspace2。\n公司决定实施一个域策略来组织这些工作区。\n你需要确保用户可以执行以下任务：\n为销售部门创建一个新的域。\n创建两个子域：一个用于东部地区，一个用于西部地区。\n将Workspace1分配到东部地区子域。\n将Workspace2分配到西部地区子域。\n解决方案必须遵循最小权限原则。\n你应该为用户分配哪个角色？",
  "stemZh": "你的公司有一个销售部门，该部门使用两个Fabric工作区，分别是Workspace1和Workspace2。\n公司决定实施一个域策略来组织这些工作区。\n你需要确保用户可以执行以下任务：\n为销售部门创建一个新的域。\n创建两个子域：一个用于东部地区，一个用于西部地区。\n将Workspace1分配到东部地区子域。\n将Workspace2分配到西部地区子域。\n解决方案必须遵循最小权限原则。\n你应该为用户分配哪个角色？",
  "stemEn": "Your company has a sales department that uses two Fabric workspaces named Workspace1 and Workspace2.\nThe company decides to implement a domain strategy to organize the workspaces.\nYou need to ensure that a user can perform the following tasks:\nCreate a new domain for the sales department.\nCreate two subdomains: one for the east region and one for the west region.\nAssign Workspace1 to the east region subdomain.\nAssign Workspace2 to the west region subdomain.\nThe solution must follow the principle of least privilege.\nWhich role should you assign to the user?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中的权限管理，特别是角色分配与权限的最小化原则。\n需要理解不同角色（如 Fabric Admin、Domain Admin、Domain Contributor 等）的权限范围和适用场景。\n2. 选项分析\nA. Workspace Admin\nWorkspace Admin角色仅限于管理特定工作区的权限和资源。\n它无法创建域或子域，也无法跨域分配工作区。\n因此，此选项错误。\nB. Domain Admin\nDomain Admin角色可以管理域及其子域，但无法跨域分配工作区。\n虽然此角色可以创建域和子域，但它不具备全局权限来管理Fabric的所有资源。\n因此，此选项错误。\nC. Domain Contributor\nDomain Contributor角色可以对域内的资源进行贡献，但无法创建域或子域。\n此角色权限不足以完成题目要求的所有任务。\n因此，此选项错误。\nD. Fabric Admin\nFabric Admin是最高权限角色，能够管理所有资源，包括创建域、子域以及跨域分配工作区。\n此角色完全满足题目要求，并符合最小权限原则，因为它是唯一能够完成所有任务的角色。\n因此，此选项正确。\n3. 我的答案\n我的答案是：D. Fabric Admin\n4. 官方答案\n季方答案是：D. Fabric Admin\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中的权限管理，特别是角色分配与权限的最小化原则。\n需要理解不同角色（如 Fabric Admin、Domain Admin、Domain Contributor 等）的权限范围和适用场景。\n2. 选项分析\nA. Workspace Admin\nWorkspace Admin角色仅限于管理特定工作区的权限和资源。\n它无法创建域或子域，也无法跨域分配工作区。\n因此，此选项错误。\nB. Domain Admin\nDomain Admin角色可以管理域及其子域，但无法跨域分配工作区。\n虽然此角色可以创建域和子域，但它不具备全局权限来管理Fabric的所有资源。\n因此，此选项错误。\nC. Domain Contributor\nDomain Contributor角色可以对域内的资源进行贡献，但无法创建域或子域。\n此角色权限不足以完成题目要求的所有任务。\n因此，此选项错误。\nD. Fabric Admin\nFabric Admin是最高权限角色，能够管理所有资源，包括创建域、子域以及跨域分配工作区。\n此角色完全满足题目要求，并符合最小权限原则，因为它是唯一能够完成所有任务的角色。\n因此，此选项正确。\n3. 我的答案\n我的答案是：D. Fabric Admin\n4. 官方答案\n季方答案是：D. Fabric Admin\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是Microsoft Fabric中的权限管理，特别是角色分配与权限的最小化原则。\n需要理解不同角色（如 Fabric Admin、Domain Admin、Domain Contributor 等）的权限范围和适用场景。\n2. 选项分析\nA. Workspace Admin\nWorkspace Admin角色仅限于管理特定工作区的权限和资源。\n它无法创建域或子域，也无法跨域分配工作区。\n因此，此选项错误。\nB. Domain Admin\nDomain Admin角色可以管理域及其子域，但无法跨域分配工作区。\n虽然此角色可以创建域和子域，但它不具备全局权限来管理Fabric的所有资源。\n因此，此选项错误。\nC. Domain Contributor\nDomain Contributor角色可以对域内的资源进行贡献，但无法创建域或子域。\n此角色权限不足以完成题目要求的所有任务。\n因此，此选项错误。\nD. Fabric Admin\nFabric Admin是最高权限角色，能够管理所有资源，包括创建域、子域以及跨域分配工作区。\n此角色完全满足题目要求，并符合最小权限原则，因为它是唯一能够完成所有任务的角色。\n因此，此选项正确。\n3. 我的答案\n我的答案是：D. Fabric Admin\n4. 官方答案\n季方答案是：D. Fabric Admin\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 20,
  "pdfPage": 47,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 20",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 20",
  "pdfQuestionNum": 20,
  "topic": 1
 },
 {
  "id": "dp700-q021",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Admin",
    "textEn": "Admin",
    "textZh": "Admin"
   },
   {
    "id": "B",
    "text": "Member",
    "textEn": "Member",
    "textZh": "Member"
   },
   {
    "id": "C",
    "text": "Viewer",
    "textEn": "Viewer",
    "textZh": "Viewer"
   },
   {
    "id": "D",
    "text": "Contributor",
    "textEn": "Contributor",
    "textZh": "Contributor"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 DW1 的仓库和一个名为 Pipeline1 的数据管道。\n你计划将一个名为 User3 的用户添加到 Workspace1。\n你需要确保 User3 可以执行以下操作：\n查看 Workspace1 中的所有项目。\n更新 DW1 中的表。\n解决方案必须遵循最小权限原则。\n你已经为 DW1 分配了适当的对象级权限。\n你应该为 User3 分配哪个工作区角色？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 DW1 的仓库和一个名为 Pipeline1 的数据管道。\n你计划将一个名为 User3 的用户添加到 Workspace1。\n你需要确保 User3 可以执行以下操作：\n查看 Workspace1 中的所有项目。\n更新 DW1 中的表。\n解决方案必须遵循最小权限原则。\n你已经为 DW1 分配了适当的对象级权限。\n你应该为 User3 分配哪个工作区角色？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a warehouse named DW1 and a data pipeline named Pipeline1.\nYou plan to add a user named User3 to Workspace1.\nYou need to ensure that User3 can perform the following actions:\nView all the items in Workspace1.\nUpdate the tables in DW1.\nThe solution must follow the principle of least privilege.\nYou already assigned the appropriate object-level permissions to DW1.\nWhich workspace role should you assign to User3?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中的工作区角色权限管理，以及如何遵循最小权限原则。\n需要理解不同角色（Admin、Member、Viewer、Contributor）的权限范围，尤其是对数据仓库和工作区内对象的操作权限。\n2. 选项分析\nA. Admin:\nAdmin 角色具有最高权限，可以管理工作区的所有内容，包括添加或删除用户、修改权限等。\n虽然 Admin 可以满足题目要求，但它超出了“最小权限原则”，因此不符合题目要求。\nB. Member:\nMember 角色可以查看工作区中的所有内容，但无法更新数据仓库中的表。\n因此，Member 角色无法满足题目中“更新表”的要求。\nC. Viewer:\nViewer 角色仅具有查看权限，无法对工作区中的任何对象进行修改。\n因此，Viewer 角色无法满足题目中“更新表”的要求。\nD. Contributor:\nContributor 角色可以查看工作区中的所有内容，并对工作区中的对象进行修改（包括更新数据仓库中的表）。\n同时，Contributor 角色遵循最小权限原则，因为它不具有管理工作区的权限。\n因此，Contributor 是正确答案。\n3. 我选的答案\nD. Contributor\n4. 官方答案\nD. Contributor\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中的工作区角色权限管理，以及如何遵循最小权限原则。\n需要理解不同角色（Admin、Member、Viewer、Contributor）的权限范围，尤其是对数据仓库和工作区内对象的操作权限。\n2. 选项分析\nA. Admin:\nAdmin 角色具有最高权限，可以管理工作区的所有内容，包括添加或删除用户、修改权限等。\n虽然 Admin 可以满足题目要求，但它超出了“最小权限原则”，因此不符合题目要求。\nB. Member:\nMember 角色可以查看工作区中的所有内容，但无法更新数据仓库中的表。\n因此，Member 角色无法满足题目中“更新表”的要求。\nC. Viewer:\nViewer 角色仅具有查看权限，无法对工作区中的任何对象进行修改。\n因此，Viewer 角色无法满足题目中“更新表”的要求。\nD. Contributor:\nContributor 角色可以查看工作区中的所有内容，并对工作区中的对象进行修改（包括更新数据仓库中的表）。\n同时，Contributor 角色遵循最小权限原则，因为它不具有管理工作区的权限。\n因此，Contributor 是正确答案。\n3. 我选的答案\nD. Contributor\n4. 官方答案\nD. Contributor\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中的工作区角色权限管理，以及如何遵循最小权限原则。\n需要理解不同角色（Admin、Member、Viewer、Contributor）的权限范围，尤其是对数据仓库和工作区内对象的操作权限。\n2. 选项分析\nA. Admin:\nAdmin 角色具有最高权限，可以管理工作区的所有内容，包括添加或删除用户、修改权限等。\n虽然 Admin 可以满足题目要求，但它超出了“最小权限原则”，因此不符合题目要求。\nB. Member:\nMember 角色可以查看工作区中的所有内容，但无法更新数据仓库中的表。\n因此，Member 角色无法满足题目中“更新表”的要求。\nC. Viewer:\nViewer 角色仅具有查看权限，无法对工作区中的任何对象进行修改。\n因此，Viewer 角色无法满足题目中“更新表”的要求。\nD. Contributor:\nContributor 角色可以查看工作区中的所有内容，并对工作区中的对象进行修改（包括更新数据仓库中的表）。\n同时，Contributor 角色遵循最小权限原则，因为它不具有管理工作区的权限。\n因此，Contributor 是正确答案。\n3. 我选的答案\nD. Contributor\n4. 官方答案\nD. Contributor\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 21,
  "pdfPage": 49,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 21",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 21",
  "pdfQuestionNum": 21,
  "topic": 1
 },
 {
  "id": "dp700-q022",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "直接与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。",
    "textEn": "Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.",
    "textZh": "直接与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。"
   },
   {
    "id": "B",
    "text": "为 User1 分配 Workspace1 的 Viewer 角色。与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。",
    "textEn": "Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.",
    "textZh": "为 User1 分配 Workspace1 的 Viewer 角色。与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。"
   },
   {
    "id": "C",
    "text": "直接与 User1 共享 Lakehouse1，并选择 Build reports on the default semantic model。",
    "textEn": "Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.",
    "textZh": "直接与 User1 共享 Lakehouse1，并选择 Build reports on the default semantic model。"
   },
   {
    "id": "D",
    "text": "为 User1 分配 Workspace1 的 Member 角色。与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。",
    "textEn": "Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.",
    "textZh": "为 User1 分配 Workspace1 的 Member 角色。与 User1 共享 Lakehouse1，并选择 Read all SQL endpoint data。"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 容量，其中包含一个名为 Workspace1 的工作区。Workspace1 包含一个名为 Lakehouse1 的湖仓、一个数据管道、一个笔记本以及多个 Microsoft Power BI 报表。\n一个名为 User1 的用户希望使用 SQL 来分析 Lakehouse1 中的数据。\n你需要为 User1 配置访问权限。解决方案必须满足以下要求：\n为 User1 提供对 Lakehouse1 中表数据的读取访问权限。\n阻止 User1 使用 Apache Spark 查询 Lakehouse1 中的底层文件。\n阻止 User1 访问 Workspace1 中的其他项目。\n你应该怎么做？",
  "stemZh": "你有一个 Fabric 容量，其中包含一个名为 Workspace1 的工作区。Workspace1 包含一个名为 Lakehouse1 的湖仓、一个数据管道、一个笔记本以及多个 Microsoft Power BI 报表。\n一个名为 User1 的用户希望使用 SQL 来分析 Lakehouse1 中的数据。\n你需要为 User1 配置访问权限。解决方案必须满足以下要求：\n为 User1 提供对 Lakehouse1 中表数据的读取访问权限。\n阻止 User1 使用 Apache Spark 查询 Lakehouse1 中的底层文件。\n阻止 User1 访问 Workspace1 中的其他项目。\n你应该怎么做？",
  "stemEn": "You have a Fabric capacity that contains a workspace named Workspace1. Workspace1 contains a lakehouse named Lakehouse1, a data pipeline, a notebook, and several Microsoft Power BI reports.\nA user named User1 wants to use SQL to analyze the data in Lakehouse1.\nYou need to configure access for User1. The solution must meet the following requirements:\nProvide User1 with read access to the table data in Lakehouse1.\nPrevent User1 from using Apache Spark to query the underlying files in Lakehouse1.\nPrevent User1 from accessing other items in Workspace1.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nLakehouse权限管理：如何为用户配置访问权限以满足特定需求。\nSQL端点访问：如何通过SQL端点提供数据访问，同时限制其他访问方式。\n工作区权限控制：如何限制用户对工作区中其他资源的访问。\n2. 选项分析\nA. Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.\n正确性分析：此选项直接与用户共享Lakehouse1，并仅授予“Read all SQL endpoint data”权限。这满足了题目要求：用户可以通过SQL查询Lakehouse1中的表数据，同时无法使用Apache Spark查询底层文件，也无法访问工作区中的其他资源。\n结论：正确。\nB. Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Viewer角色会授予用户对工作区中所有资源的查看权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\nC. Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.\n正确性分析：此选项授予用户“Build reports on the default semantic model”权限，但该权限仅允许用户基于语义模型构建报告，无法满足题目要求“Provide User1 with read access to the table data in Lakehouse1”。\n结论：错误。\nD. Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Member角色会授予用户对工作区中所有资源的访问权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\n3. 我的答案\nA\n4. 官方答案\nA\n5. 比较与分析\n我的答案与官方答案一致。\n原因分析：选项A完全满足题目要求，其他选项均存在不符合要求的情况。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nLakehouse权限管理：如何为用户配置访问权限以满足特定需求。\nSQL端点访问：如何通过SQL端点提供数据访问，同时限制其他访问方式。\n工作区权限控制：如何限制用户对工作区中其他资源的访问。\n2. 选项分析\nA. Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.\n正确性分析：此选项直接与用户共享Lakehouse1，并仅授予“Read all SQL endpoint data”权限。这满足了题目要求：用户可以通过SQL查询Lakehouse1中的表数据，同时无法使用Apache Spark查询底层文件，也无法访问工作区中的其他资源。\n结论：正确。\nB. Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Viewer角色会授予用户对工作区中所有资源的查看权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\nC. Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.\n正确性分析：此选项授予用户“Build reports on the default semantic model”权限，但该权限仅允许用户基于语义模型构建报告，无法满足题目要求“Provide User1 with read access to the table data in Lakehouse1”。\n结论：错误。\nD. Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Member角色会授予用户对工作区中所有资源的访问权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\n3. 我的答案\nA\n4. 官方答案\nA\n5. 比较与分析\n我的答案与官方答案一致。\n原因分析：选项A完全满足题目要求，其他选项均存在不符合要求的情况。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nLakehouse权限管理：如何为用户配置访问权限以满足特定需求。\nSQL端点访问：如何通过SQL端点提供数据访问，同时限制其他访问方式。\n工作区权限控制：如何限制用户对工作区中其他资源的访问。\n2. 选项分析\nA. Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.\n正确性分析：此选项直接与用户共享Lakehouse1，并仅授予“Read all SQL endpoint data”权限。这满足了题目要求：用户可以通过SQL查询Lakehouse1中的表数据，同时无法使用Apache Spark查询底层文件，也无法访问工作区中的其他资源。\n结论：正确。\nB. Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Viewer角色会授予用户对工作区中所有资源的查看权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\nC. Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.\n正确性分析：此选项授予用户“Build reports on the default semantic model”权限，但该权限仅允许用户基于语义模型构建报告，无法满足题目要求“Provide User1 with read access to the table data in Lakehouse1”。\n结论：错误。\nD. Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.\n正确性分析：为用户分配工作区的Member角色会授予用户对工作区中所有资源的访问权限，这违反了题目要求“Prevent User1 from accessing other items in Workspace1”。\n结论：错误。\n3. 我的答案\nA\n4. 官方答案\nA\n5. 比较与分析\n我的答案与官方答案一致。\n原因分析：选项A完全满足题目要求，其他选项均存在不符合要求的情况。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 22,
  "pdfPage": 51,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 22",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 22",
  "pdfQuestionNum": 22,
  "topic": 1
 },
 {
  "id": "dp700-q023",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "drag",
  "options": [],
  "answer": [
   "Master data",
   "Certified",
   "Promoted",
   "Certified"
  ],
  "pdfAnswer": [
   "Master data",
   "Certified",
   "Promoted",
   "Certified"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Entity1",
    "labelEn": "Entity1",
    "labelZh": "Entity1",
    "choices": [
     {
      "key": "Certified",
      "en": "Certified",
      "zh": "Certified"
     },
     {
      "key": "Master data",
      "en": "Master data",
      "zh": "Master data"
     },
     {
      "key": "Promoted",
      "en": "Promoted",
      "zh": "Promoted"
     },
     {
      "key": "Cannot be endorsed",
      "en": "Cannot be endorsed",
      "zh": "Cannot be endorsed"
     }
    ],
    "answer": "Master data"
   },
   {
    "id": "2",
    "label": "Entity2",
    "labelEn": "Entity2",
    "labelZh": "Entity2",
    "choices": [
     {
      "key": "Certified",
      "en": "Certified",
      "zh": "Certified"
     },
     {
      "key": "Master data",
      "en": "Master data",
      "zh": "Master data"
     },
     {
      "key": "Promoted",
      "en": "Promoted",
      "zh": "Promoted"
     },
     {
      "key": "Cannot be endorsed",
      "en": "Cannot be endorsed",
      "zh": "Cannot be endorsed"
     }
    ],
    "answer": "Certified"
   },
   {
    "id": "3",
    "label": "Entity3",
    "labelEn": "Entity3",
    "labelZh": "Entity3",
    "choices": [
     {
      "key": "Certified",
      "en": "Certified",
      "zh": "Certified"
     },
     {
      "key": "Master data",
      "en": "Master data",
      "zh": "Master data"
     },
     {
      "key": "Promoted",
      "en": "Promoted",
      "zh": "Promoted"
     },
     {
      "key": "Cannot be endorsed",
      "en": "Cannot be endorsed",
      "zh": "Cannot be endorsed"
     }
    ],
    "answer": "Promoted"
   },
   {
    "id": "4",
    "label": "Entity4",
    "labelEn": "Entity4",
    "labelZh": "Entity4",
    "choices": [
     {
      "key": "Certified",
      "en": "Certified",
      "zh": "Certified"
     },
     {
      "key": "Master data",
      "en": "Master data",
      "zh": "Master data"
     },
     {
      "key": "Promoted",
      "en": "Promoted",
      "zh": "Promoted"
     },
     {
      "key": "Cannot be endorsed",
      "en": "Cannot be endorsed",
      "zh": "Cannot be endorsed"
     }
    ],
    "answer": "Certified"
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 23,
   "pdfQNum": 23,
   "topic": 1,
   "page": 54,
   "questionPage": 53,
   "pdfText": "Certified -> Entity1 / Promoted -> Entity2 / Master data -> Entity3 / Cannot be endorsed -> Entity4",
   "imageAnswer": "Master data / Certified / Promoted / Certified",
   "detail": "AI-analysis text: E1 Certified/E2 Promoted/E3 Master data/E4 Cannot be endorsed; answer image (p54, drawn lines) reads E1 Master data, E2 Certified, E3 Promoted, E4 Certified — image used (line drawing, read carefully)."
  },
  "stem": "您正在一个 Fabric 环境中实现以下数据实体：\nEntity1：可在 lakehouse 中使用，并包含将用作核心组织实体的数据\nEntity2：可在语义模型中使用，并包含符合组织标准的数据\nEntity3：可在 Microsoft Power BI 报告中使用，并包含已准备好共享和重用的数据\nEntity4：可在 Power BI 仪表板中使用，并包含用于高管级决策的批准数据\n您的公司要求为数据实施特定的治理流程。\n您需要根据每个实体的使用案例为其应用认可徽章。\n应该为每个实体应用哪个徽章？要回答，请将适当的徽章拖到正确的实体。每个徽章可以使用一次、多次或不使用。您可能需要拖动分隔条或滚动以查看内容。\n注意：每个正确选择都值一分。",
  "stemZh": "您正在一个 Fabric 环境中实现以下数据实体：\nEntity1：可在 lakehouse 中使用，并包含将用作核心组织实体的数据\nEntity2：可在语义模型中使用，并包含符合组织标准的数据\nEntity3：可在 Microsoft Power BI 报告中使用，并包含已准备好共享和重用的数据\nEntity4：可在 Power BI 仪表板中使用，并包含用于高管级决策的批准数据\n您的公司要求为数据实施特定的治理流程。\n您需要根据每个实体的使用案例为其应用认可徽章。\n应该为每个实体应用哪个徽章？要回答，请将适当的徽章拖到正确的实体。每个徽章可以使用一次、多次或不使用。您可能需要拖动分隔条或滚动以查看内容。\n注意：每个正确选择都值一分。",
  "stemEn": "You are implementing the following data entities in a Fabric environment:\nEntity1: Available in a lakehouse and contains data that will be used as a core organization entity Entity2: Available in a semantic model and contains data that meets organizational standards Entity3: Available in a Microsoft Power BI report and contains data that is ready for sharing and reuse Entity4: Available in a Power BI dashboard and contains approved data for executive-level decision making Your company requires that specific governance processes be implemented for the data.\nYou need to apply endorsement badges to the entities based on each entity’s use case.\nWhich badge should you apply to each entity? To answer, drag the appropriate badges the correct entities. Each badge may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 54 页）给出：Master data / Certified / Promoted / Certified；PDF 文字为：Certified -> Entity1 / Promoted -> Entity2 / Master data -> Entity3 / Cannot be endorsed -> Entity4。\n【答案来源】PDF 第 54 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是数据治理和数据实体的使用场景，以及如何在Microsoft Fabric环境中应用数据认证和标识（Endorsement Badges）。\n2. 选项分析\nEntity1:\nEntity1是湖仓中的核心组织实体，通常需要最高级别的认证以确保数据的可信性和质量。因此，应该使用Certified标识。\nEntity2:\nEntity2是语义模型中的数据，符合组织标准但未达到最高认证级别。此类数据通常会被标记为Promoted，以表示其质量较高但未完全认证。\nEntity3:\nEntity3是Power BI报告中的数据，已准备好共享和重用。此类数据通常被标记为Master data，以表示其在组织中具有重要性和可重用性。\nEntity4:\nEntity4是PowerBl仪表板中的数据，用于高层决策，但未明确提到其是否符合认证或推广标准。根据题目要求，应该标记为Cannot be endorsed。\n3. 我的答案\nCertified -> Entity1\nPromoted -> Entity2\nMaster data -> Entity3\nCannot be endorsed -> Entity4\n4. 官方答案\nCertified -> Entity1\nPromoted -> Entity2\nMaster data -> Entity3\nCannot be endorsed -> Entity4\n5. 比较与分析\n我的答案与官方答案完全一致，无需重新思考。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 54 页）给出：Master data / Certified / Promoted / Certified；PDF 文字为：Certified -> Entity1 / Promoted -> Entity2 / Master data -> Entity3 / Cannot be endorsed -> Entity4。\n【答案来源】PDF 第 54 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是数据治理和数据实体的使用场景，以及如何在Microsoft Fabric环境中应用数据认证和标识（Endorsement Badges）。\n2. 选项分析\nEntity1:\nEntity1是湖仓中的核心组织实体，通常需要最高级别的认证以确保数据的可信性和质量。因此，应该使用Certified标识。\nEntity2:\nEntity2是语义模型中的数据，符合组织标准但未达到最高认证级别。此类数据通常会被标记为Promoted，以表示其质量较高但未完全认证。\nEntity3:\nEntity3是Power BI报告中的数据，已准备好共享和重用。此类数据通常被标记为Master data，以表示其在组织中具有重要性和可重用性。\nEntity4:\nEntity4是PowerBl仪表板中的数据，用于高层决策，但未明确提到其是否符合认证或推广标准。根据题目要求，应该标记为Cannot be endorsed。\n3. 我的答案\nCertified -> Entity1\nPromoted -> Entity2\nMaster data -> Entity3\nCannot be endorsed -> Entity4\n4. 官方答案\nCertified -> Entity1\nPromoted -> Entity2\nMaster data -> Entity3\nCannot be endorsed -> Entity4\n5. 比较与分析\n我的答案与官方答案完全一致，无需重新思考。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.54): Master data / Certified / Promoted / Certified; PDF text says: Certified -> Entity1 / Promoted -> Entity2 / Master data -> Entity3 / Cannot be endorsed -> Entity4.\n[Answer source] PDF p.54 answer image",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 23,
  "pdfPage": 53,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 23",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 23",
  "pdfQuestionNum": 23,
  "topic": 1
 },
 {
  "id": "dp700-q024",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "Yes",
   "No",
   "No"
  ],
  "pdfAnswer": [
   "Yes",
   "No",
   "No"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "User3 拥有 Workspace3 的 Viewer 角色访问权限。",
    "labelEn": "User3 has Viewer role access to Workspace3.",
    "labelZh": "User3 拥有 Workspace3 的 Viewer 角色访问权限。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   },
   {
    "id": "2",
    "label": "User3 拥有 Domain1 的 Domain contributor 访问权限。",
    "labelEn": "User3 has Domain contributor access to Domain1.",
    "labelZh": "User3 拥有 Domain1 的 Domain contributor 访问权限。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "3",
    "label": "User2 拥有 Workspace3 的 Contributor 角色访问权限。",
    "labelEn": "User2 has Contributor role access to Workspace3.",
    "labelZh": "User2 拥有 Workspace3 的 Contributor 角色访问权限。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 24,
   "pdfQNum": 24,
   "topic": 1,
   "page": 56,
   "questionPage": 55,
   "pdfText": "User3 has Viewer role access to Workspace3: Yes / User3 has Domain contributor access to Domain1: No / User2 has Contributor role access to Workspace3: Yes",
   "imageAnswer": "Yes / No / No",
   "detail": "AI-analysis 官方答案 text says Yes/No/Yes; answer image (p56) shows Yes/No/No — image used."
  },
  "stem": "您有三位用户，分别是 User1、User2 和 User3。\n您拥有以下表格中显示的 Fabric 工作区。\n```\nName | Workspace admin\nWorkspace1 | User1\nWorkspace2 | User2\n\nName | Domain admin\nDomain1 | User1\nDomain2 | User2\n```\n您有一个名为 Group1 的安全组，其中包含 User1 和 User3。\nFabric 管理员创建了以下表格中显示的域。\nUser1 创建了一个名为 Workspace3 的新工作区。\n您将 Group1 添加到 Domain1 的默认域。\n对于以下每个陈述，如果陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确的选择都值一分。",
  "stemZh": "您有三位用户，分别是 User1、User2 和 User3。\n您拥有以下表格中显示的 Fabric 工作区。\n```\nName | Workspace admin\nWorkspace1 | User1\nWorkspace2 | User2\n\nName | Domain admin\nDomain1 | User1\nDomain2 | User2\n```\n您有一个名为 Group1 的安全组，其中包含 User1 和 User3。\nFabric 管理员创建了以下表格中显示的域。\nUser1 创建了一个名为 Workspace3 的新工作区。\n您将 Group1 添加到 Domain1 的默认域。\n对于以下每个陈述，如果陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确的选择都值一分。",
  "stemEn": "You have three users named User1, User2, and User3.\nYou have the Fabric workspaces shown in the following table.\n```\nName | Workspace admin\nWorkspace1 | User1\nWorkspace2 | User2\n\nName | Domain admin\nDomain1 | User1\nDomain2 | User2\n```\nYou have a security group named Group1 that contains User1 and User3.\nThe Fabric admin creates the domains shown in the following table.\nUser1 creates a new workspace named Workspace3.\nYou add Group1 to the default domain of Domain1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 56 页）给出：Yes / No / No；PDF 文字为：User3 has Viewer role access to Workspace3: Yes / User3 has Domain contributor access to Domain1: No / User2 has Contributor role access to Workspace3: Yes。\n【答案来源】PDF 第 56 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\nFabric工作区和域的权限管理。\n用户和安全组的角色分配及继承关系。\n默认域的权限影响。\n2. 选项分析\nUser3 has Viewer role access to Workspace3:\n分析：User1是Workspace3的创建者，同时User1属于Group1，而Group1被添加到Domain1的默认域中。默认域中的用户和组会继承Viewer角色访问权限。因此，User3作为Group1的成员，继承了Viewer角色访问权限。\n结论：此选项正确。\nUser3 has Domain contributor access to Domain1:\n分析：虽然Group1被添加到Domain1的默认域中，但默认域的权限仅赋予Viewer角色，而不是Contributor角色。Domain contributor权限需要显式分配。\n结论：此选项错误。\nUser2 has Contributor role access to Workspace3:\n分析：User2是Domain2的管理员，但与Workspace3没有直接的权限继承关系。题目没有提到User2被显式分配到Workspace3的Contributor角色，因此User2无法获得Contributor权限。\n结论：此选项错误。\n3. 我的答案\nUser3 has Viewer role access to Workspace3: Yes\nUser3 has Domain contributor access to Domain1: No\nUser2 has Contributor role access to Workspace3: No\n4. 官方答案\nUser3 has Viewer role access to Workspace3: Yes\nUser3 has Domain contributor access to Domain1: No\nUser2 has Contributor role access to Workspace3: Yes 5. 与官方答案比较我的答案与官方答案在第三个选项上不同。\n重新思考原因：官方答案认为User2有Contributor角色访问Workspace3。这可能是因为User2作为Domain2的管理员，拥有跨域的权限继承机制，或者题目隐含了User2被显式分配了Workspace3的Contributor角色。\n修正答案：User2 has Contributor role access to Workspace3: Yes。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 56 页）给出：Yes / No / No；PDF 文字为：User3 has Viewer role access to Workspace3: Yes / User3 has Domain contributor access to Domain1: No / User2 has Contributor role access to Workspace3: Yes。\n【答案来源】PDF 第 56 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\nFabric工作区和域的权限管理。\n用户和安全组的角色分配及继承关系。\n默认域的权限影响。\n2. 选项分析\nUser3 has Viewer role access to Workspace3:\n分析：User1是Workspace3的创建者，同时User1属于Group1，而Group1被添加到Domain1的默认域中。默认域中的用户和组会继承Viewer角色访问权限。因此，User3作为Group1的成员，继承了Viewer角色访问权限。\n结论：此选项正确。\nUser3 has Domain contributor access to Domain1:\n分析：虽然Group1被添加到Domain1的默认域中，但默认域的权限仅赋予Viewer角色，而不是Contributor角色。Domain contributor权限需要显式分配。\n结论：此选项错误。\nUser2 has Contributor role access to Workspace3:\n分析：User2是Domain2的管理员，但与Workspace3没有直接的权限继承关系。题目没有提到User2被显式分配到Workspace3的Contributor角色，因此User2无法获得Contributor权限。\n结论：此选项错误。\n3. 我的答案\nUser3 has Viewer role access to Workspace3: Yes\nUser3 has Domain contributor access to Domain1: No\nUser2 has Contributor role access to Workspace3: No\n4. 官方答案\nUser3 has Viewer role access to Workspace3: Yes\nUser3 has Domain contributor access to Domain1: No\nUser2 has Contributor role access to Workspace3: Yes 5. 与官方答案比较我的答案与官方答案在第三个选项上不同。\n重新思考原因：官方答案认为User2有Contributor角色访问Workspace3。这可能是因为User2作为Domain2的管理员，拥有跨域的权限继承机制，或者题目隐含了User2被显式分配了Workspace3的Contributor角色。\n修正答案：User2 has Contributor role access to Workspace3: Yes。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.56): Yes / No / No; PDF text says: User3 has Viewer role access to Workspace3: Yes / User3 has Domain contributor access to Domain1: No / User2 has Contributor role access to Workspace3: Yes.\n[Answer source] PDF p.56 answer image",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 24,
  "pdfPage": 55,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 24",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 24",
  "pdfQuestionNum": 24,
  "topic": 1
 },
 {
  "id": "dp700-q025",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "删除 Workspace2中的所有项目，然后运行 deployPipeline1。",
    "textEn": "Delete all the items in Workspace2, and then run deployPipeline1.",
    "textZh": "删除 Workspace2中的所有项目，然后运行 deployPipeline1。"
   },
   {
    "id": "B",
    "text": "将 Workspace2中的每个项目重命名为与Workspace1中的项目具有相同的名称。",
    "textEn": "Rename each item in Workspace2 to have the same name as the items in Workspace1.",
    "textZh": "将 Workspace2中的每个项目重命名为与Workspace1中的项目具有相同的名称。"
   },
   {
    "id": "C",
    "text": "备份 Workspace2 中的项目，然后运行deployPipeline1。",
    "textEn": "Back up the items in Workspace2, and then run deployPipeline1.",
    "textZh": "备份 Workspace2 中的项目，然后运行deployPipeline1。"
   },
   {
    "id": "D",
    "text": "在不修改 Workspace2 中项目的情况下运行 deployPipeline1。",
    "textEn": "Run deployPipeline1 without modifying the items in Workspace2.",
    "textZh": "在不修改 Workspace2 中项目的情况下运行 deployPipeline1。"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有两个 Fabric 工作区，分别名为 Workspace1 和 Workspace2。\n你有一个名为 deployPipeline1 的 Fabric 部署管道，它将项目从 Workspace1 部署到 Workspace2。DeployPipeline1 包含Workspace1 中的所有项目。\n你最近修改了 Workspace1 中的项目。\n当前工作区包含以下表格中显示的项目。\n```\nWorkspace | Items\nWorkspace1 | Model1, Notebook1, Report1, Lakehouse1, Pipeline1\nWorkspace2 | Model1, Notebook2, Report1, Lakehouse2\n```\nWorkspace1 中与 Workspace2 中具有相同名称的项目当前已配对。\n你需要确保Workspace1中的项目覆盖Workspace2中的对应项目。解决方案必须尽量减少工作量。\n你应该怎么做？",
  "stemZh": "你有两个 Fabric 工作区，分别名为 Workspace1 和 Workspace2。\n你有一个名为 deployPipeline1 的 Fabric 部署管道，它将项目从 Workspace1 部署到 Workspace2。DeployPipeline1 包含Workspace1 中的所有项目。\n你最近修改了 Workspace1 中的项目。\n当前工作区包含以下表格中显示的项目。\n```\nWorkspace | Items\nWorkspace1 | Model1, Notebook1, Report1, Lakehouse1, Pipeline1\nWorkspace2 | Model1, Notebook2, Report1, Lakehouse2\n```\nWorkspace1 中与 Workspace2 中具有相同名称的项目当前已配对。\n你需要确保Workspace1中的项目覆盖Workspace2中的对应项目。解决方案必须尽量减少工作量。\n你应该怎么做？",
  "stemEn": "You have two Fabric workspaces named Workspace1 and Workspace2.\nYou have a Fabric deployment pipeline named deployPipeline1 that deploys items from Workspace1 to Workspace2.\nDeployPipeline1 contains all the items in Workspace1.\nYou recently modified the items in Workspaces1.\nThe workspaces currently contain the items shown in the following table.\n```\nWorkspace | Items\nWorkspace1 | Model1, Notebook1, Report1, Lakehouse1, Pipeline1\nWorkspace2 | Model1, Notebook2, Report1, Lakehouse2\n```\nItems in Workspace1 that have the same name as items in Workspace2 are currently paired.\nYou need to ensure that the items in Workspace1 overwrite the corresponding items in Workspace2. The solution must minimize effort.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中部署管道（Deployment Pipeline）的工作原理，特别是如何处理工作区之间的项目同步和覆盖。\n重点在于理解部署管道如何处理\"配对项目”（Paired Items）以及如何最小化操作以实现目标。\n2. 选项分析\nA. 删除 Workspace2 中的所有项目，然后运行 deployPipeline1。\n错误：删除 Workspace2 中的所有项目会导致额外的工作量，并且不必要。部署管道已经能够自动覆盖配对的项目，无需手动删除。\nB. 将 Workspace2 中的每个项目重命名为与 Workspace1 中的项目具有相同的名称。\n错误：题目已经明确指出Workspace1和Workspace2中具有相同名称的项目已经配对，因此无需重命名。\nC. 备份 Workspace2 中的项目，然后运行 deployPipeline1。\n错误：备份Workspace2的项目虽然是一个谨慎的操作，但题目要求\"最小化努力\"，备份并不是必要的步骤，因为部署管道会自动覆盖配对的项目。\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n正确：部署管道会自动覆盖Workspace2中与Workspace1配对的项目，无需额外操作。这是最简便的解决方案。\n3. 我选的答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n4. 官方答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：根据部署管道的工作原理，配对的项目会自动覆盖，无需额外操作。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中部署管道（Deployment Pipeline）的工作原理，特别是如何处理工作区之间的项目同步和覆盖。\n重点在于理解部署管道如何处理\"配对项目”（Paired Items）以及如何最小化操作以实现目标。\n2. 选项分析\nA. 删除 Workspace2 中的所有项目，然后运行 deployPipeline1。\n错误：删除 Workspace2 中的所有项目会导致额外的工作量，并且不必要。部署管道已经能够自动覆盖配对的项目，无需手动删除。\nB. 将 Workspace2 中的每个项目重命名为与 Workspace1 中的项目具有相同的名称。\n错误：题目已经明确指出Workspace1和Workspace2中具有相同名称的项目已经配对，因此无需重命名。\nC. 备份 Workspace2 中的项目，然后运行 deployPipeline1。\n错误：备份Workspace2的项目虽然是一个谨慎的操作，但题目要求\"最小化努力\"，备份并不是必要的步骤，因为部署管道会自动覆盖配对的项目。\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n正确：部署管道会自动覆盖Workspace2中与Workspace1配对的项目，无需额外操作。这是最简便的解决方案。\n3. 我选的答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n4. 官方答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：根据部署管道的工作原理，配对的项目会自动覆盖，无需额外操作。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中部署管道（Deployment Pipeline）的工作原理，特别是如何处理工作区之间的项目同步和覆盖。\n重点在于理解部署管道如何处理\"配对项目”（Paired Items）以及如何最小化操作以实现目标。\n2. 选项分析\nA. 删除 Workspace2 中的所有项目，然后运行 deployPipeline1。\n错误：删除 Workspace2 中的所有项目会导致额外的工作量，并且不必要。部署管道已经能够自动覆盖配对的项目，无需手动删除。\nB. 将 Workspace2 中的每个项目重命名为与 Workspace1 中的项目具有相同的名称。\n错误：题目已经明确指出Workspace1和Workspace2中具有相同名称的项目已经配对，因此无需重命名。\nC. 备份 Workspace2 中的项目，然后运行 deployPipeline1。\n错误：备份Workspace2的项目虽然是一个谨慎的操作，但题目要求\"最小化努力\"，备份并不是必要的步骤，因为部署管道会自动覆盖配对的项目。\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n正确：部署管道会自动覆盖Workspace2中与Workspace1配对的项目，无需额外操作。这是最简便的解决方案。\n3. 我选的答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n4. 官方答案\nD. 在不修改 Workspace2 中项目的情况下运行 deployPipeline1。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：根据部署管道的工作原理，配对的项目会自动覆盖，无需额外操作。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 25,
  "pdfPage": 58,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 25",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 25",
  "pdfQuestionNum": 25,
  "topic": 1
 },
 {
  "id": "dp700-q026",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "创建 Folder1，Pipeline1 移动到 Folder1，并且 Lakehouse1 被部署。",
    "textEn": "Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.",
    "textZh": "创建 Folder1，Pipeline1 移动到 Folder1，并且 Lakehouse1 被部署。"
   },
   {
    "id": "B",
    "text": "仅部署 Pipeline1 和 Lakehouse1。",
    "textEn": "Only Pipeline1 and Lakehouse1 are deployed.",
    "textZh": "仅部署 Pipeline1 和 Lakehouse1。"
   },
   {
    "id": "C",
    "text": "创建 Folder1，并且 Pipeline1 和 Lakehouse1 移动到 Folder1。",
    "textEn": "Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.",
    "textZh": "创建 Folder1，并且 Pipeline1 和 Lakehouse1 移动到 Folder1。"
   },
   {
    "id": "D",
    "text": "仅创建 Folder1，并且 Pipeline1 移动到 Folder1。",
    "textEn": "Only Folder1 is created and Pipeline1 moves to Folder1.",
    "textZh": "仅创建 Folder1，并且 Pipeline1 移动到 Folder1。"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Pipeline1 的数据管道和一个名为 Lakehouse1 的湖仓。\n你有一个名为 deployPipeline1 的部署管道，用于将 Workspace1 部署到 Workspace2。\n你通过添加一个名为 Folder1 的文件夹并将 Pipeline1 移动到 Folder1 来重构 Workspace1。\n你使用 deployPipeline1 将 Workspace1 部署到 Workspace2。\nWorkspace2",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Pipeline1 的数据管道和一个名为 Lakehouse1 的湖仓。\n你有一个名为 deployPipeline1 的部署管道，用于将 Workspace1 部署到 Workspace2。\n你通过添加一个名为 Folder1 的文件夹并将 Pipeline1 移动到 Folder1 来重构 Workspace1。\n你使用 deployPipeline1 将 Workspace1 部署到 Workspace2。\nWorkspace2",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a data pipeline named Pipeline1 and a lakehouse named Lakehouse1.\nYou have a deployment pipeline named deployPipeline1 that deploys Workspace1 to Workspace2.\nYou restructure Workspace1 by adding a folder named Folder1 and moving Pipeline1 to Folder1.\nYou use deployPipeline1 to deploy Workspace1 to Workspace2.\nWhat occurs to Workspace2?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中工作区的部署管道行为，特别是当工作区结构发生变化时，如何通过部署管道同步这些变化。\n2. 选项分析\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n正确。根据 Microsoft Fabric 的部署管道行为，当 Workspace1 的结构发生变化（例如添加文件夹并移动对象），这些变化会通过部署管道同步到目标工作区 Workspace2。\nFolder1 会被创建，Pipeline1会移动到 Folder1，同时 Lakehouse1也会被部署，因为它是 Workspace1 的一部分。\nB. Only Pipeline1 and Lakehouse1 are deployed.\n错误。此选项忽略了 Folder1 的创建。Folder1 是 Workspace1 结构变化的一部分，部署管道会同步这些变化。\nC. Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.\n错误。Lakehouse1并没有移动到 Folder1。根据题目描述，只有 Pipeline1 被移动到 Folder1，而 Lakehouse1 仍然保持在原来的位置。\nD. Only Folder1 is created and Pipeline1 moves to Folder1.\n错误。此选项忽略了 Lakehouse1 的部署。Lakehouse1 是 Workspace1 的一部分，部署管道会同步 Workspace1 的所有内容。\n3. 我的答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n4. 官方答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中工作区的部署管道行为，特别是当工作区结构发生变化时，如何通过部署管道同步这些变化。\n2. 选项分析\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n正确。根据 Microsoft Fabric 的部署管道行为，当 Workspace1 的结构发生变化（例如添加文件夹并移动对象），这些变化会通过部署管道同步到目标工作区 Workspace2。\nFolder1 会被创建，Pipeline1会移动到 Folder1，同时 Lakehouse1也会被部署，因为它是 Workspace1 的一部分。\nB. Only Pipeline1 and Lakehouse1 are deployed.\n错误。此选项忽略了 Folder1 的创建。Folder1 是 Workspace1 结构变化的一部分，部署管道会同步这些变化。\nC. Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.\n错误。Lakehouse1并没有移动到 Folder1。根据题目描述，只有 Pipeline1 被移动到 Folder1，而 Lakehouse1 仍然保持在原来的位置。\nD. Only Folder1 is created and Pipeline1 moves to Folder1.\n错误。此选项忽略了 Lakehouse1 的部署。Lakehouse1 是 Workspace1 的一部分，部署管道会同步 Workspace1 的所有内容。\n3. 我的答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n4. 官方答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Microsoft Fabric 中工作区的部署管道行为，特别是当工作区结构发生变化时，如何通过部署管道同步这些变化。\n2. 选项分析\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n桭畧。根据 Microsoft Fabric 甹部甆疲道行为，当 Workspace1 甹痨构发椹变化（例如棇加文件夹并疇动对象），这些变化会通过部署管道同步到目标工作区 Workspace2。\nFolder1 会被创建，Pipeline1会移动到 Folder1，同时 Lakehouse1也会被部署，因为它是 Workspace1 的一部分。\nB. Only Pipeline1 and Lakehouse1 are deployed.\n错误。此选项忽略了 Folder1 的创建。Folder1 是 Workspace1 结构变化的一部分，部署管道会同步这些变化。\nC. Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.\n错误。Lakehouse1并没有移动到 Folder1。根据题目描述，只有 Pipeline1 被移动到 Folder1，而 Lakehouse1 仍然保持在原来的位置。\nD. Only Folder1 is created and Pipeline1 moves to Folder1.\n错误。此选项忽略了 Lakehouse1 的部署。Lakehouse1 是 Workspace1 的一部分，部署管道会同步 Workspace1 的所有内容。\n3. 我的答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n4. 官方答案\nA. Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 26,
  "pdfPage": 60,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 26",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 26",
  "pdfQuestionNum": 26,
  "topic": 1
 },
 {
  "id": "dp700-q027",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "drag",
  "options": [],
  "answer": [
   "Create an environment.",
   "Install the libraries.",
   "Set the default environment."
  ],
  "pdfAnswer": [
   "Create an environment.",
   "Install the libraries.",
   "Set the default environment."
  ],
  "boxes": [
   {
    "id": "1",
    "label": "第 1 步",
    "labelEn": "Step 1",
    "labelZh": "第 1 步",
    "choices": [
     {
      "key": "Change the runtime version.",
      "en": "Change the runtime version.",
      "zh": "Change the runtime version."
     },
     {
      "key": "Install the libraries.",
      "en": "Install the libraries.",
      "zh": "Install the libraries."
     },
     {
      "key": "Create a pool.",
      "en": "Create a pool.",
      "zh": "Create a pool."
     },
     {
      "key": "Create an environment.",
      "en": "Create an environment.",
      "zh": "Create an environment."
     },
     {
      "key": "Set the default environment.",
      "en": "Set the default environment.",
      "zh": "Set the default environment."
     }
    ],
    "answer": "Create an environment."
   },
   {
    "id": "2",
    "label": "第 2 步",
    "labelEn": "Step 2",
    "labelZh": "第 2 步",
    "choices": [
     {
      "key": "Change the runtime version.",
      "en": "Change the runtime version.",
      "zh": "Change the runtime version."
     },
     {
      "key": "Install the libraries.",
      "en": "Install the libraries.",
      "zh": "Install the libraries."
     },
     {
      "key": "Create a pool.",
      "en": "Create a pool.",
      "zh": "Create a pool."
     },
     {
      "key": "Create an environment.",
      "en": "Create an environment.",
      "zh": "Create an environment."
     },
     {
      "key": "Set the default environment.",
      "en": "Set the default environment.",
      "zh": "Set the default environment."
     }
    ],
    "answer": "Install the libraries."
   },
   {
    "id": "3",
    "label": "第 3 步",
    "labelEn": "Step 3",
    "labelZh": "第 3 步",
    "choices": [
     {
      "key": "Change the runtime version.",
      "en": "Change the runtime version.",
      "zh": "Change the runtime version."
     },
     {
      "key": "Install the libraries.",
      "en": "Install the libraries.",
      "zh": "Install the libraries."
     },
     {
      "key": "Create a pool.",
      "en": "Create a pool.",
      "zh": "Create a pool."
     },
     {
      "key": "Create an environment.",
      "en": "Create an environment.",
      "zh": "Create an environment."
     },
     {
      "key": "Set the default environment.",
      "en": "Set the default environment.",
      "zh": "Set the default environment."
     }
    ],
    "answer": "Set the default environment."
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 27,
   "pdfQNum": 27,
   "topic": 1,
   "page": 62,
   "questionPage": 62,
   "pdfText": "Change the runtime version / Install the libraries / Create an environment / Set the default environment",
   "imageAnswer": "Create an environment. / Install the libraries. / Set the default environment.",
   "detail": "AI-analysis text lists 4 steps incl. \"Change the runtime version\"; answer image (p62) shows 3 steps — image used."
  },
  "stem": "贵公司有一个开发团队。该团队创建了用于转换数据的可重用代码的 Python 库。\n您创建了一个名为 Workspace1 的 Fabric 工作区，该工作区将用于通过使用 notebooks 开发提取、转换和加载 (ETL) 解决方案。\n您需要确保这些库在 Workspace1 中的新 notebooks 中默认可用。\n您应该按顺序执行哪三个操作？要回答，请将适当的操作从操作列表移动到答案区域并按正确顺序排列。",
  "stemZh": "贵公司有一个开发团队。该团队创建了用于转换数据的可重用代码的 Python 库。\n您创建了一个名为 Workspace1 的 Fabric 工作区，该工作区将用于通过使用 notebooks 开发提取、转换和加载 (ETL) 解决方案。\n您需要确保这些库在 Workspace1 中的新 notebooks 中默认可用。\n您应该按顺序执行哪三个操作？要回答，请将适当的操作从操作列表移动到答案区域并按正确顺序排列。",
  "stemEn": "Your company has a team of developers. The team creates Python libraries of reusable code that is used to transform data.\nYou create a Fabric workspace name Workspace1 that will be used to develop extract, transform, and load (ETL) solutions by using notebooks.\nYou need to ensure that the libraries are available by default to new notebooks in Workspace1.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 62 页）给出：Create an environment. / Install the libraries. / Set the default environment.；PDF 文字为：Change the runtime version / Install the libraries / Create an environment / Set the default environment。\n【答案来源】PDF 第 62 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中如何配置环境以确保 Python 库在新建的 Notebook 中默认可用。\n涉及的知识点包括环境设置、库安装以及默认环境的配置。\n2. 选项分析\nChange the runtime version: 正确。更改运行时版本是设置环境的第一步，确保环境与所需的库兼容。\nInstall the libraries: 正确。安装所需的 Python 库是确保 Notebook 能够使用这些库的关键步骤。\nCreate a pool: 错误。创建池与本题无关，池通常用于分配计算资源，而不是配置环境或库。\nCreate an environment: 正确。创建环境是将库和运行时版本绑定在一起的必要步骤。\nSet the default environment: 正确。设置默认环境确保新建的 Notebook 自动使用该环境。\n3. 我的答案\nChange the runtime version\nInstall the libraries\nCreate an environment\nSet the default environment\n4. 官方答案\nChange the runtime version\nInstall the libraries\nCreate an environment\nSet the default environment\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 62 页）给出：Create an environment. / Install the libraries. / Set the default environment.；PDF 文字为：Change the runtime version / Install the libraries / Create an environment / Set the default environment。\n【答案来源】PDF 第 62 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中如何配置环境以确保 Python 库在新建的 Notebook 中默认可用。\n涉及的知识点包括环境设置、库安装以及默认环境的配置。\n2. 选项分析\nChange the runtime version: 正确。更改运行时版本是设置环境的第一步，确保环境与所需的库兼容。\nInstall the libraries: 正确。安装所需的 Python 库是确保 Notebook 能够使用这些库的关键步骤。\nCreate a pool: 错误。创建池与本题无关，池通常用于分配计算资源，而不是配置环境或库。\nCreate an environment: 正确。创建环境是将库和运行时版本绑定在一起的必要步骤。\nSet the default environment: 正确。设置默认环境确保新建的 Notebook 自动使用该环境。\n3. 我的答案\nChange the runtime version\nInstall the libraries\nCreate an environment\nSet the default environment\n4. 官方答案\nChange the runtime version\nInstall the libraries\nCreate an environment\nSet the default environment\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.62): Create an environment. / Install the libraries. / Set the default environment.; PDF text says: Change the runtime version / Install the libraries / Create an environment / Set the default environment.\n[Answer source] PDF p.62 answer image",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 27,
  "pdfPage": 62,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 27",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 27",
  "pdfQuestionNum": 27,
  "topic": 1
 },
 {
  "id": "dp700-q028",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "VACUUM",
    "textEn": "VACUUM",
    "textZh": "VACUUM"
   },
   {
    "id": "B",
    "text": "BROADCAST",
    "textEn": "BROADCAST",
    "textZh": "BROADCAST"
   },
   {
    "id": "C",
    "text": "OPTIMIZE",
    "textEn": "OPTIMIZE",
    "textZh": "OPTIMIZE"
   },
   {
    "id": "D",
    "text": "CACHE",
    "textEn": "CACHE",
    "textZh": "CACHE"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个 lakehouse 和一个名为 Notebook1 的笔记本。Notebook1 从名为 Table1 的表中读取数据到一个 DataFrame，并应用转换逻辑。然后通过使用合并操作将 DataFrame 中的数据写入一个新的 Delta 表，名为 Table2。\n你需要合并 Table1 中底层的 Parquet 文件。\n你应该运行哪个",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个 lakehouse 和一个名为 Notebook1 的笔记本。Notebook1 从名为 Table1 的表中读取数据到一个 DataFrame，并应用转换逻辑。然后通过使用合并操作将 DataFrame 中的数据写入一个新的 Delta 表，名为 Table2。\n你需要合并 Table1 中底层的 Parquet 文件。\n你应该运行哪个",
  "stemEn": "You have a Fabric workspace that contains a lakehouse and a notebook named Notebook1. Notebook1 reads data into a DataFrame from a table named Table1 and applies transformation logic. The data from the DataFrame is then written to a new Delta table named Table2 by using a merge operation.\nYou need to consolidate the underlying Parquet files in Table1.\nWhich command should you run?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何优化和管理Delta表的性能，特别是如何合并底层的Parquet文件。\n2. 选项分析\nA. VACUUM VACUUM:\nVACUUM命令用于清理Delta表中不再需要的旧文件（例如删除操作后留下的文件），而不是合并底层的Parquet文件。因此此选项错误。\nB. BROADCAST BROADCAST:\nBROADCAST用于优化分布式计算中的数据传输，通常与Spark的join操作相关，和合并Parquet文件无关。因此此选项错误。\nC. OPTIMIZE Most Voted OPTIMIZE:\nOPTIMIZE命令用于优化Delta表，通过合并小的Parquet文件来提高查询性能。这正是题目要求的操作，因此此选项正确。\nD. CACHE CACHE:\nCACHE命令用于将数据缓存到内存中以提高查询速度，但与合并Parquet文件无关。因此此选项错误。\n3. 我的答案\nC. OPTIMIZE Most Voted OPTIMIZE\n4. 官方答案\nC. OPTIMIZE Most Voted OPTIMIZE\n5. 与官方答案比较\n我的答案与官方答案一致，因此无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何优化和管理Delta表的性能，特别是如何合并底层的Parquet文件。\n2. 选项分析\nA. VACUUM VACUUM:\nVACUUM命令用于清理Delta表中不再需要的旧文件（例如删除操作后留下的文件），而不是合并底层的Parquet文件。因此此选项错误。\nB. BROADCAST BROADCAST:\nBROADCAST用于优化分布式计算中的数据传输，通常与Spark的join操作相关，和合并Parquet文件无关。因此此选项错误。\nC. OPTIMIZE Most Voted OPTIMIZE:\nOPTIMIZE命令用于优化Delta表，通过合并小的Parquet文件来提高查询性能。这正是题目要求的操作，因此此选项正确。\nD. CACHE CACHE:\nCACHE命令用于将数据缓存到内存中以提高查询速度，但与合并Parquet文件无关。因此此选项错误。\n3. 我的答案\nC. OPTIMIZE Most Voted OPTIMIZE\n4. 官方答案\nC. OPTIMIZE Most Voted OPTIMIZE\n5. 与官方答案比较\n我的答案与官方答案一致，因此无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何优化和管理Delta表的性能，特别是如何合并底层的Parquet文件。\n2. 选项分析\nA. VACUUM VACUUM:\nVACUUM命令用于清理Delta表中不再需要的旧文件（例如删除操作后留下的文件），而不是合并底层的Parquet文件。因此此选项错误。\nB. BROADCAST BROADCAST:\nBROADCAST用于优化分布式计算中的数据传输，通常与Spark的join操作相关，和合并Parquet文件无关。因此此选项错误。\nC. OPTIMIZE Most Voted OPTIMIZE:\nOPTIMIZE命令用于优化Delta表，通过合并小的Parquet文件来提高查询性能。这正是题目要求的操作，因此此选项正确。\nD. CACHE CACHE:\nCACHE命令用于将数据缓存到内存中以提高查询速度，但与合并Parquet文件无关。因此此选项错误。\n3. 我的答案\nC. OPTIMIZE Most Voted OPTIMIZE\n4. 官方答案\nC. OPTIMIZE Most Voted OPTIMIZE\n5. 与官方答案比较\n我的答案与官方答案一致，因此无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 28,
  "pdfPage": 64,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 28",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 28",
  "pdfQuestionNum": 28,
  "topic": 1
 },
 {
  "id": "dp700-q029",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "开始时间",
    "textEn": "Start time",
    "textZh": "开始时间"
   },
   {
    "id": "B",
    "text": "容量",
    "textEn": "Capacity",
    "textZh": "容量"
   },
   {
    "id": "C",
    "text": "活动名称",
    "textEn": "Activity name",
    "textZh": "活动名称"
   },
   {
    "id": "D",
    "text": "提交者",
    "textEn": "Submitter",
    "textZh": "提交者"
   },
   {
    "id": "E",
    "text": "项目类型",
    "textEn": "Item type",
    "textZh": "项目类型"
   },
   {
    "id": "F",
    "text": "作业类型",
    "textEn": "Job type",
    "textZh": "作业类型"
   },
   {
    "id": "G",
    "text": "位置",
    "textEn": "Location",
    "textZh": "位置"
   }
  ],
  "answer": [
   "G"
  ],
  "pdfAnswer": [
   "G"
  ],
  "answerSource": "text",
  "stem": "你有五个 Fabric 工作区。\n你正在使用 Monitoring hub 监控项目的执行。\n你需要确定特定项目运行在哪个工作区。\n在 Monitoring hub 中，你应该查看哪一列？",
  "stemZh": "你有五个 Fabric 工作区。\n你正在使用 Monitoring hub 监控项目的执行。\n你需要确定特定项目运行在哪个工作区。\n在 Monitoring hub 中，你应该查看哪一列？",
  "stemEn": "You have five Fabric workspaces.\nYou are monitoring the execution of items by using Monitoring hub.\nYou need to identify in which workspace a specific item runs.\nWhich column should you view in Monitoring hub?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 的 Monitoring hub 中如何识别特定项目运行的工作空间。\n2. 选项分析\nA. Start time 开始时间: 错误。开始时间仅显示项目的执行时间，无法直接指示项目运行的工作空间。\nB. Capacity 容量: 错误。容量指的是资源的使用情况，与工作空间的标识无关。\nC. Activity name 活动名称: 错误。活动名称描述的是具体的任务或活动，但无法直接指示项目运行的工作空间。\nD. Submitter 提交者: 错误。提交者是指谁提交了该项目，与工作空间的标识无关。\nE. Item type 项目类型: 错误。项目类型描述的是项目的类别（例如数据流、报告等），无法直接指示工作空间。\nF. Job type 作业类型: 错误。作业类型描述的是任务的性质（例如刷新、查询等），无法直接指示工作空间。\nG. Location Most Voted 位置: 正确。位置列显示了项目运行的具体工作空间，因此可以用来识别项目运行的工作空间。\n3. 我的答案\nG. Location Most Voted 位置\n4. 官方答案\nG. Location Most Voted 位置\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 的 Monitoring hub 中如何识别特定项目运行的工作空间。\n2. 选项分析\nA. Start time 开始时间: 错误。开始时间仅显示项目的执行时间，无法直接指示项目运行的工作空间。\nB. Capacity 容量: 错误。容量指的是资源的使用情况，与工作空间的标识无关。\nC. Activity name 活动名称: 错误。活动名称描述的是具体的任务或活动，但无法直接指示项目运行的工作空间。\nD. Submitter 提交者: 错误。提交者是指谁提交了该项目，与工作空间的标识无关。\nE. Item type 项目类型: 错误。项目类型描述的是项目的类别（例如数据流、报告等），无法直接指示工作空间。\nF. Job type 作业类型: 错误。作业类型描述的是任务的性质（例如刷新、查询等），无法直接指示工作空间。\nG. Location Most Voted 位置: 正确。位置列显示了项目运行的具体工作空间，因此可以用来识别项目运行的工作空间。\n3. 我的答案\nG. Location Most Voted 位置\n4. 官方答案\nG. Location Most Voted 位置\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 的 Monitoring hub 中如何识别特定项目运行的工作空间。\n2. 选项分析\nA. Start time 开始时间: 错误。开始时间仅显示项目的执行时间，无法直接指示项目运行的工作空间。\nB. Capacity 容量: 错误。容量指的是资源的使用情况，与工作空间的标识无关。\nC. Activity name 活动名称: 错误。活动名称描述的是具体的任务或活动，但无法直接指示项目运行的工作空间。\nD. Submitter 提交者: 错误。提交者是指谁提交了该项目，与工作空间的标识无关。\nE. Item type 项目类型: 错误。项目类型描述的是项目的类别（例如数据流、报告等），无法直接指示工作空间。\nF. Job type 作业类型: 错误。作业类型描述的是任务的性质（例如刷新、查询等），无法直接指示工作空间。\nG. Location Most Voted 位置: 正确。位置列显示了项目运行的具体工作空间，因此可以用来识别项目运行的工作空间。\n3. 我的答案\nG. Location Most Voted 位置\n4. 官方答案\nG. Location Most Voted 位置\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 29,
  "pdfPage": 66,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 29",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 29",
  "pdfQuestionNum": 29,
  "topic": 1
 },
 {
  "id": "dp700-q030",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "实时中心",
    "textEn": "Real-Time hub",
    "textZh": "实时中心"
   },
   {
    "id": "B",
    "text": "OneLake 数据中心",
    "textEn": "OneLake data hub",
    "textZh": "OneLake 数据中心"
   },
   {
    "id": "C",
    "text": "管理员监控工作区",
    "textEn": "the Admin monitoring workspace",
    "textZh": "管理员监控工作区"
   },
   {
    "id": "D",
    "text": "Fabric Monitor",
    "textEn": "Fabric Monitor",
    "textZh": "Fabric Monitor"
   },
   {
    "id": "E",
    "text": "Microsoft Fabric Capacity Metrics 应用",
    "textEn": "the Microsoft Fabric Capacity Metrics app",
    "textZh": "Microsoft Fabric Capacity Metrics 应用"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 DW1 的仓库的 Fabric 工作区。DW1 是使用名为 Notebook1 的笔记本加载的。\n你需要确定 Notebook1 执行时使用的 Delta 版本。\n你应该使用什么？",
  "stemZh": "你有一个包含名为 DW1 的仓库的 Fabric 工作区。DW1 是使用名为 Notebook1 的笔记本加载的。\n你需要确定 Notebook1 执行时使用的 Delta 版本。\n你应该使用什么？",
  "stemEn": "You have a Fabric workspace that contains a warehouse named DW1. DW1 is loaded by using a notebook named Notebook1.\nYou need to identify which version of Delta was used when Notebook1 was executed.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中监控和识别 Delta Lake 的版本信息。\n涉及到 Microsoft Fabric 的监控工具和功能，包括 Fabric Monitor 和其他相关工具。\n2. 选项分析\nA. Real-Time hub 实时中心: 错误。实时中心用于处理实时数据流，与监控 Delta Lake 的版本信息无关。\nB. OneLake data hub OneLake 数据中心: 错误。OneLake 数据中心是用于管理和访问存储在 OneLake 中的数据，但它不提供Delta Lake 版本的监控功能。\nC. the Admin monitoring workspace 管理员监控工作区: 错误。管理员监控工作区主要用于监控工作区的整体性能和资源使用情况，而不是具体的 Delta Lake 版本信息。\nD. Fabric Monitor Most Voted Fabric Monitor: 正确。Fabric Monitor 是专门用于监控 Microsoft Fabric 中的活动和资源，包括Delta Lake 的版本信息。\nE. the Microsoft Fabric Capacity Metrics app Microsoft Fabric Capacity Metrics 应用: 错误。此应用主要用于监控容量使用情况，与 Delta Lake 的版本信息无关。\n3. 我的答案\nD. Fabric Monitor Most Voted Fabric Monitor\n4. 官方答案\nD. Fabric Monitor Most Voted Fabric Monitor\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中监控和识别 Delta Lake 的版本信息。\n涉及到 Microsoft Fabric 的监控工具和功能，包括 Fabric Monitor 和其他相关工具。\n2. 选项分析\nA. Real-Time hub 实时中心: 错误。实时中心用于处理实时数据流，与监控 Delta Lake 的版本信息无关。\nB. OneLake data hub OneLake 数据中心: 错误。OneLake 数据中心是用于管理和访问存储在 OneLake 中的数据，但它不提供Delta Lake 版本的监控功能。\nC. the Admin monitoring workspace 管理员监控工作区: 错误。管理员监控工作区主要用于监控工作区的整体性能和资源使用情况，而不是具体的 Delta Lake 版本信息。\nD. Fabric Monitor Most Voted Fabric Monitor: 正确。Fabric Monitor 是专门用于监控 Microsoft Fabric 中的活动和资源，包括Delta Lake 的版本信息。\nE. the Microsoft Fabric Capacity Metrics app Microsoft Fabric Capacity Metrics 应用: 错误。此应用主要用于监控容量使用情况，与 Delta Lake 的版本信息无关。\n3. 我的答案\nD. Fabric Monitor Most Voted Fabric Monitor\n4. 官方答案\nD. Fabric Monitor Most Voted Fabric Monitor\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中监控和识别 Delta Lake 的版本信息。\n涉及到 Microsoft Fabric 的监控工具和功能，包括 Fabric Monitor 和其他相关工具。\n2. 选项分析\nA. Real-Time hub 实时中心: 错误。实时中心用于处理实时数据流，与监控 Delta Lake 的版本信息无关。\nB. OneLake data hub OneLake 数据中心: 错误。OneLake 数据中心是用于管理和访问存储在 OneLake 中的数据，但它不提供Delta Lake 版本的监控功能。\nC. the Admin monitoring workspace 管理员监控工作区: 错误。管理员监控工作区主要用于监控工作区的整体性能和资源使用情况，而不是具体的 Delta Lake 版本信息。\nD. Fabric Monitor Most Voted Fabric Monitor: 正确。Fabric Monitor 是专门用于监控 Microsoft Fabric 中的活动和资源，包括Delta Lake 的版本信息。\nE. the Microsoft Fabric Capacity Metrics app Microsoft Fabric Capacity Metrics 应用: 错误。此应用主要用于监控容量使用情况，与 Delta Lake 的版本信息无关。\n3. 我的答案\nD. Fabric Monitor Most Voted Fabric Monitor\n4. 官方答案\nD. Fabric Monitor Most Voted Fabric Monitor\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 30,
  "pdfPage": 68,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 30",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 30",
  "pdfQuestionNum": 30,
  "topic": 1
 },
 {
  "id": "dp700-q031",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "drag",
  "options": [],
  "answer": [
   "ALTER TABLE dbo.DimCustomer",
   "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
   "ENFORCED"
  ],
  "pdfAnswer": [
   "ALTER TABLE dbo.DimCustomer",
   "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
   "ENFORCED"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "第 1 步",
    "labelEn": "Step 1",
    "labelZh": "第 1 步",
    "choices": [
     {
      "key": "DROP CONSTRAINT PK_DimCustomer",
      "en": "DROP CONSTRAINT PK_DimCustomer",
      "zh": "DROP CONSTRAINT PK_DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)"
     },
     {
      "key": "NOT ENFORCED",
      "en": "NOT ENFORCED",
      "zh": "NOT ENFORCED"
     },
     {
      "key": "ALTER TABLE dbo.DimCustomer",
      "en": "ALTER TABLE dbo.DimCustomer",
      "zh": "ALTER TABLE dbo.DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)"
     },
     {
      "key": "ENFORCED",
      "en": "ENFORCED",
      "zh": "ENFORCED"
     }
    ],
    "answer": "ALTER TABLE dbo.DimCustomer"
   },
   {
    "id": "2",
    "label": "第 2 步",
    "labelEn": "Step 2",
    "labelZh": "第 2 步",
    "choices": [
     {
      "key": "DROP CONSTRAINT PK_DimCustomer",
      "en": "DROP CONSTRAINT PK_DimCustomer",
      "zh": "DROP CONSTRAINT PK_DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)"
     },
     {
      "key": "NOT ENFORCED",
      "en": "NOT ENFORCED",
      "zh": "NOT ENFORCED"
     },
     {
      "key": "ALTER TABLE dbo.DimCustomer",
      "en": "ALTER TABLE dbo.DimCustomer",
      "zh": "ALTER TABLE dbo.DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)"
     },
     {
      "key": "ENFORCED",
      "en": "ENFORCED",
      "zh": "ENFORCED"
     }
    ],
    "answer": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)"
   },
   {
    "id": "3",
    "label": "第 3 步",
    "labelEn": "Step 3",
    "labelZh": "第 3 步",
    "choices": [
     {
      "key": "DROP CONSTRAINT PK_DimCustomer",
      "en": "DROP CONSTRAINT PK_DimCustomer",
      "zh": "DROP CONSTRAINT PK_DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey)"
     },
     {
      "key": "NOT ENFORCED",
      "en": "NOT ENFORCED",
      "zh": "NOT ENFORCED"
     },
     {
      "key": "ALTER TABLE dbo.DimCustomer",
      "en": "ALTER TABLE dbo.DimCustomer",
      "zh": "ALTER TABLE dbo.DimCustomer"
     },
     {
      "key": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "en": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)",
      "zh": "ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)"
     },
     {
      "key": "ENFORCED",
      "en": "ENFORCED",
      "zh": "ENFORCED"
     }
    ],
    "answer": "ENFORCED"
   }
  ],
  "answerSource": "image",
  "conflict": {
   "exam": "dp-700",
   "k": 31,
   "pdfQNum": 31,
   "topic": 1,
   "page": 71,
   "questionPage": 70,
   "pdfText": "DROP CONSTRAINT PK_DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED",
   "imageAnswer": "ALTER TABLE dbo.DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED",
   "detail": "PDF text official answer lists DROP CONSTRAINT PK_DimCustomer as the first step, while the answer image (drawn lines) starts with ALTER TABLE dbo.DimCustomer; image kept (additionally detected by verify)."
  },
  "stem": "您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n在 Warehouse1 中，您通过运行以下语句创建了一个名为 DimCustomer 的表。\n```\nCREATE TABLE dbo.DimCustomer (\n  CustomerKey VARCHAR(255) NOT NULL,\n  Name VARCHAR(255) NOT NULL,\n  Email VARCHAR(255) NOT NULL\n);\n```\n您需要将 DimCustomer 表中的 Customerkey 列设置为主键。\n您应该按顺序运行哪三个代码段？要回答，请将适当的代码段从代码段列表移动到答案区域，并按正确顺序排列。",
  "stemZh": "您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n在 Warehouse1 中，您通过运行以下语句创建了一个名为 DimCustomer 的表。\n```\nCREATE TABLE dbo.DimCustomer (\n  CustomerKey VARCHAR(255) NOT NULL,\n  Name VARCHAR(255) NOT NULL,\n  Email VARCHAR(255) NOT NULL\n);\n```\n您需要将 DimCustomer 表中的 Customerkey 列设置为主键。\n您应该按顺序运行哪三个代码段？要回答，请将适当的代码段从代码段列表移动到答案区域，并按正确顺序排列。",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nIn Warehouse1, you create a table named DimCustomer by running the following statement.\n```\nCREATE TABLE dbo.DimCustomer (\n  CustomerKey VARCHAR(255) NOT NULL,\n  Name VARCHAR(255) NOT NULL,\n  Email VARCHAR(255) NOT NULL\n);\n```\nYou need to set the Customerkey column as a primary key of the DimCustomer table.\nWhich three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order.",
  "explanation": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 71 页）给出：ALTER TABLE dbo.DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED；PDF 文字为：DROP CONSTRAINT PK_DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED。\n【答案来源】PDF 第 71 页答案图\n【说明】Answer image (p71, drawn lines): ALTER TABLE → ADD ... CLUSTERED → ENFORCED, recorded exactly as the PDF shows.\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在数据仓库中如何设置主键约束，包括如何删除已有约束、添加新的约束以及约束的强制性。\n2. 选项分析\nDROP CONSTRAINT PK_DimCustomer: 正确。此步骤用于删除现有的主键约束（如果存在），以便后续重新定义主键约束。\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey): 错误。此选项定义了一个非聚集主键，但题目没有要求非聚集主键，而是需要一个聚集主键。\nNOT ENFORCED: 错误。此选项表示约束不强制执行，但题目要求主键约束必须被强制执行。\nALTER TABLE dbo.DimCustomer: 正确。此选项是定义约束的必要前缀，用于修改表结构。\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey): 正确。此选项定义了一个聚集主键，符合题目要求。\nENFORCED: 正确。此选项表示约束被强制执行，符合题目要求。\n3. 我的答案\nDROP CONSTRAINT PK_DimCustomer\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)\nENFORCED\n4. 官方答案\nDROP CONSTRAINT PK_DimCustomer\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)\nENFORCED\n5. 与官方答案比较\n我的答案与官方答案完全一致。",
  "explanationZh": "⚠️ 注意：PDF 文字版「官方答案」与 PDF 答案图不一致。本题答案按答案图（第 71 页）给出：ALTER TABLE dbo.DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED；PDF 文字为：DROP CONSTRAINT PK_DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED。\n【答案来源】PDF 第 71 页答案图\n【说明】Answer image (p71, drawn lines): ALTER TABLE → ADD ... CLUSTERED → ENFORCED, recorded exactly as the PDF shows.\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在数据仓库中如何设置主键约束，包括如何删除已有约束、添加新的约束以及约束的强制性。\n2. 选项分析\nDROP CONSTRAINT PK_DimCustomer: 正确。此步骤用于删除现有的主键约束（如果存在），以便后续重新定义主键约束。\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY NONCLUSTERED (CustomerKey): 错误。此选项定义了一个非聚集主键，但题目没有要求非聚集主键，而是需要一个聚集主键。\nNOT ENFORCED: 错误。此选项表示约束不强制执行，但题目要求主键约束必须被强制执行。\nALTER TABLE dbo.DimCustomer: 正确。此选项是定义约束的必要前缀，用于修改表结构。\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey): 正确。此选项定义了一个聚集主键，符合题目要求。\nENFORCED: 正确。此选项表示约束被强制执行，符合题目要求。\n3. 我的答案\nDROP CONSTRAINT PK_DimCustomer\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)\nENFORCED\n4. 官方答案\nDROP CONSTRAINT PK_DimCustomer\nADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey)\nENFORCED\n5. 与官方答案比较\n我的答案与官方答案完全一致。",
  "explanationEn": "⚠️ Note: the PDF text \"official answer\" differs from the PDF answer image. Answer follows the image (p.71): ALTER TABLE dbo.DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED; PDF text says: DROP CONSTRAINT PK_DimCustomer / ADD CONSTRAINT PK_DimCustomer PRIMARY KEY CLUSTERED (CustomerKey) / ENFORCED.\n[Answer source] PDF p.71 answer image\n[Note] Answer image (p71, drawn lines): ALTER TABLE → ADD ... CLUSTERED → ENFORCED, recorded exactly as the PDF shows.",
  "caseStudy": false,
  "answerConfidence": "medium",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 31,
  "pdfPage": 70,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 31",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 31",
  "pdfQuestionNum": 31,
  "topic": 1
 },
 {
  "id": "dp700-q032",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Microsoft SQL Server Management Studio (SSMS) 中的动态管理视图",
    "textEn": "dynamic management views in Microsoft SQL Server Management Studio (SSMS)",
    "textZh": "Microsoft SQL Server Management Studio (SSMS) 中的动态管理视图"
   },
   {
    "id": "B",
    "text": "Monitoring hub",
    "textEn": "Monitoring hub",
    "textZh": "Monitoring hub"
   },
   {
    "id": "C",
    "text": "Azure Data Studio 中的动态管理视图",
    "textEn": "dynamic management views in Azure Data Studio",
    "textZh": "Azure Data Studio 中的动态管理视图"
   },
   {
    "id": "D",
    "text": "笔记本中的语义链接",
    "textEn": "a semantic link in a notebook",
    "textZh": "笔记本中的语义链接"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Model1 的语义模型的 Fabric 工作区。\n你需要动态执行并监控 Model1 的刷新进度。\n你应该使用什么？",
  "stemZh": "你有一个包含名为 Model1 的语义模型的 Fabric 工作区。\n你需要动态执行并监控 Model1 的刷新进度。\n你应该使用什么？",
  "stemEn": "You have a Fabric workspace that contains a semantic model named Model1.\nYou need to dynamically execute and monitor the refresh progress of Model1.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何动态执行和监控 Fabric 工作区中语义模型的刷新进度。\n涉及 Fabric 中的语义模型管理和监控工具的使用。\n2. 选项分析\nA. dynamic management views in Microsoft SQL Server Management Studio (SSMS)\n错误：SSMS 的动态管理视图主要用于管理 SQL Server 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nB. Monitoring hub\n错误：Monitoring hub 是用于监控 Fabric 工作区的整体运行状况，但它不能动态执行和监控语义模型的刷新进度。\nC. dynamic management views in Azure Data Studio\n错误：Azure Data Studio 的动态管理视图主要用于管理 SQL 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nD. a semantic link in a notebook\n正确：语义链接可以在笔记本中动态执行和监控语义模型的刷新进度，这是 Fabric 中的推荐方法。\n3. 我的答案\nD. a semantic link in a notebook\n4. 官方答案\nD. a semantic link in a notebook\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何动态执行和监控 Fabric 工作区中语义模型的刷新进度。\n涉及 Fabric 中的语义模型管理和监控工具的使用。\n2. 选项分析\nA. dynamic management views in Microsoft SQL Server Management Studio (SSMS)\n错误：SSMS 的动态管理视图主要用于管理 SQL Server 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nB. Monitoring hub\n错误：Monitoring hub 是用于监控 Fabric 工作区的整体运行状况，但它不能动态执行和监控语义模型的刷新进度。\nC. dynamic management views in Azure Data Studio\n错误：Azure Data Studio 的动态管理视图主要用于管理 SQL 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nD. a semantic link in a notebook\n正确：语义链接可以在笔记本中动态执行和监控语义模型的刷新进度，这是 Fabric 中的推荐方法。\n3. 我的答案\nD. a semantic link in a notebook\n4. 官方答案\nD. a semantic link in a notebook\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何动态执行和监控 Fabric 工作区中语义模型的刷新进度。\n涉及 Fabric 中的语义模型管理和监控工具的使用。\n2. 选项分析\nA. dynamic management views in Microsoft SQL Server Management Studio (SSMS)\n错误：SSMS 的动态管理视图主要用于管理 SQL Server 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nB. Monitoring hub\n错误：Monitoring hub 是用于监控 Fabric 工作区的整体运行状况，但它不能动态执行和监控语义模型的刷新进度。\nC. dynamic management views in Azure Data Studio\n错误：Azure Data Studio 的动态管理视图主要用于管理 SQL 数据库，而不是用于 Fabric 工作区中的语义模型管理。\nD. a semantic link in a notebook\n正确：语义链接可以在笔记本中动态执行和监控语义模型的刷新进度，这是 Fabric 中的推荐方法。\n3. 我的答案\nD. a semantic link in a notebook\n4. 官方答案\nD. a semantic link in a notebook\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 32,
  "pdfPage": 72,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 32",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 32",
  "pdfQuestionNum": 32,
  "topic": 1
 },
 {
  "id": "dp700-q033",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（sort）、投影（project）等操作。\n重点在于是否正确实现了数据过滤、排序以及投影逻辑以满足题目要求。\n2. 选项分析\n选项 A: Yes\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15），这部分逻辑是正确的。\n代码中使用了 sort by No_Bikes 按照 No_Bikes 的升序排序，这也符合题目要求。\n代码中使用了两次 project，但重复的投影操作没有实际意义，可能会导致性能问题或逻辑混乱。\n虽然代码逻辑看似正确，但重复的 project 操作可能会影响结果的准确性，因此不能完全满足题目要求。\n选项 B: No\n由于代码中存在重复的 project 操作，这可能导致结果不符合预期。\n题目要求的逻辑虽然部分实现，但代码的冗余性和潜在问题使得答案不完全正确。\n因此，选项 B 是正确的选择。\n3. 我的答案\n我的选择是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：代码中存在重复的 project 操作，虽然逻辑部分正确，但冗余操作可能导致结果不符合题目要求，因此答案为 B。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（sort）、投影（project）等操作。\n重点在于是否正确实现了数据过滤、排序以及投影逻辑以满足题目要求。\n2. 选项分析\n选项 A: Yes\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15），这部分逻辑是正确的。\n代码中使用了 sort by No_Bikes 按照 No_Bikes 的升序排序，这也符合题目要求。\n代码中使用了两次 project，但重复的投影操作没有实际意义，可能会导致性能问题或逻辑混乱。\n虽然代码逻辑看似正确，但重复的 project 操作可能会影响结果的准确性，因此不能完全满足题目要求。\n选项 B: No\n由于代码中存在重复的 project 操作，这可能导致结果不符合预期。\n题目要求的逻辑虽然部分实现，但代码的冗余性和潜在问题使得答案不完全正确。\n因此，选项 B 是正确的选择。\n3. 我的答案\n我的选择是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：代码中存在重复的 project 操作，虽然逻辑部分正确，但冗余操作可能导致结果不符合题目要求，因此答案为 B。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（sort）、投影（project）等操作。\n重点在于是否正确实现了数据过滤、排序以及投影逻辑以满足题目要求。\n2. 选项分析\n选项 A: Yes\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15），这部分逻辑是正确的。\n代码中使用了 sort by No_Bikes 按照 No_Bikes 的升序排序，这也符合题目要求。\n代码中使用了两次 project，但重复的投影操作没有实际意义，可能会导致性能问题或逻辑混乱。\n虽然代码逻辑看似正确，但重复的 project 操作可能会影响结果的准确性，因此不能完全满足题目要求。\n选项 B: No\n由于代码中存在重复的 project 操作，这可能导致结果不符合预期。\n题目要求的逻辑虽然部分实现，但代码的冗余性和潜在问题使得答案不完全正确。\n因此，选项 B 是正确的选择。\n3. 我的答案\n我的选择是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：代码中存在重复的 project 操作，虽然逻辑部分正确，但冗余操作可能导致结果不符合题目要求，因此答案为 B。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 33,
  "pdfPage": 74,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 33",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 33",
  "pdfQuestionNum": 33,
  "topic": 1
 },
 {
  "id": "dp700-q034",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| order by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| order by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| order by No_Bikes\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（order by）和投影（project）操作。\n重点在于是否正确实现了数据过滤、排序以及返回所需的列。\n2. 选项分析\nA. Yes 是\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15）。\n使用了 order by 按照 No_Bikes 进行升序排序。\n使用了 project 返回了指定的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\n从表面上看，代码逻辑似乎满足题目要求。\nB. No 否\n虽然代码逻辑看似正确，但需要注意的是，KQL中的 filter 和 order by 的执行顺序可能会影响结果。\n此外，题目要求返回的数据必须满足“Neighbourhood 为 Sands End 且 No_Bikes >= 15”，并且排序后返回结果。代码中没有明确说明是否在排序之前完成了过滤。\n官方答案为 B，说明代码未完全满足题目要求。\n3. 我的选择\n我选择的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：虽然代码逻辑看似正确，但可能存在执行顺序或其他细节问题，导致结果未完全满足题目要求。\n需要进一步确认代码是否在排序之前正确过滤了数据，并且是否返回了符合条件的结果。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（order by）和投影（project）操作。\n重点在于是否正确实现了数据过滤、排序以及返回所需的列。\n2. 选项分析\nA. Yes 是\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15）。\n使用了 order by 按照 No_Bikes 进行升序排序。\n使用了 project 返回了指定的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\n从表面上看，代码逻辑似乎满足题目要求。\nB. No 否\n虽然代码逻辑看似正确，但需要注意的是，KQL中的 filter 和 order by 的执行顺序可能会影响结果。\n此外，题目要求返回的数据必须满足“Neighbourhood 为 Sands End 且 No_Bikes >= 15”，并且排序后返回结果。代码中没有明确说明是否在排序之前完成了过滤。\n官方答案为 B，说明代码未完全满足题目要求。\n3. 我的选择\n我选择的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：虽然代码逻辑看似正确，但可能存在执行顺序或其他细节问题，导致结果未完全满足题目要求。\n需要进一步确认代码是否在排序之前正确过滤了数据，并且是否返回了符合条件的结果。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的使用，包括数据过滤（filter）、排序（order by）和投影（project）操作。\n重点在于是否正确实现了数据过滤、排序以及返回所需的列。\n2. 选项分析\nA. Yes 是\n代码中使用了 filter 来筛选符合条件的数据（Neighbourhood == \"Sands End\" 且 No_Bikes >= 15）。\n使用了 order by 按照 No_Bikes 进行升序排序。\n使用了 project 返回了指定的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\n从表面上看，代码逻辑似乎满足题目要求。\nB. No 否\n虽然代码逻辑看似正确，但需要注意的是，KQL中的 filter 和 order by 的执行顺序可能会影响结果。\n此外，题目要求返回的数据必须满足“Neighbourhood 为 Sands End 且 No_Bikes >= 15”，并且排序后返回结果。代码中没有明确说明是否在排序之前完成了过滤。\n官方答案为 B，说明代码未完全满足题目要求。\n3. 我的选择\n我选择的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：虽然代码逻辑看似正确，但可能存在执行顺序或其他细节问题，导致结果未完全满足题目要求。\n需要进一步确认代码是否在排序之前正确过滤了数据，并且是否返回了符合条件的结果。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 34,
  "pdfPage": 77,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 34",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 34",
  "pdfQuestionNum": 34,
  "topic": 1
 },
 {
  "id": "dp700-q035",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes asc\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在您回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes asc\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回一个名为 Sands End 的社区的数据，当 No_Bikes 至少为 15 时。\n结果必须按 No_Bikes 的升序排序。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\n```\nbike_location\n| filter Neighbourhood == \"Sands End\" and No_Bikes >= 15\n| sort by No_Bikes asc\n| project BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的基本操作，包括过滤（filter）、排序（sort by）和投影（project）。\n重点在于正确应用过滤条件和排序逻辑以满足业务需求。\n2. 选项分析\nA. Yes: 正确。\n代码中使用了 filter 来筛选出符合条件的记录（Neighbourhood 为 \"Sands End\" 且 No_Bikes >= 15）。\n使用了 sort by No_Bikes asc 按照 No_Bikes 的升序排列结果。\n最后通过 project 指定了需要返回的列，满足了题目要求。\nB. No: 错误。\n代码逻辑完全符合题目要求，因此选项 B 不正确。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：代码逻辑完全符合题目要求，正确筛选、排序并返回了指定列。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的基本操作，包括过滤（filter）、排序（sort by）和投影（project）。\n重点在于正确应用过滤条件和排序逻辑以满足业务需求。\n2. 选项分析\nA. Yes: 正确。\n代码中使用了 filter 来筛选出符合条件的记录（Neighbourhood 为 \"Sands End\" 且 No_Bikes >= 15）。\n使用了 sort by No_Bikes asc 按照 No_Bikes 的升序排列结果。\n最后通过 project 指定了需要返回的列，满足了题目要求。\nB. No: 错误。\n代码逻辑完全符合题目要求，因此选项 B 不正确。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：代码逻辑完全符合题目要求，正确筛选、排序并返回了指定列。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的基本操作，包括过滤（filter）、排序（sort by）和投影（project）。\n重点在于正确应用过滤条件和排序逻辑以满足业务需求。\n2. 选项分析\nA. Yes: 正确。\n代码中使用了 filter 来筛选出符合条件的记录（Neighbourhood 为 \"Sands End\" 且 No_Bikes >= 15）。\n使用了 sort by No_Bikes asc 按照 No_Bikes 的升序排列结果。\n最后通过 project 指定了需要返回的列，满足了题目要求。\nB. No: 错误。\n代码逻辑完全符合题目要求，因此选项 B 不正确。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：代码逻辑完全符合题目要求，正确筛选、排序并返回了指定列。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 35,
  "pdfPage": 80,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 35",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 35",
  "pdfQuestionNum": 35,
  "topic": 1
 },
 {
  "id": "dp700-q036",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "梢意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题都包含一个可能棚足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nSELECT BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\nFROM bike_location\nWHERE neighbourhood = 'Sands End'\nAND no_bikes >= 15\nORDER BY no_bikes\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回 Neighbourhood 为 Sands End 且 No_Bikes 至少为 15 的数据。\n结果必须按 No_Bikes 升序排列。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemZh": "梢意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题都包含一个可能棚足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 Fabric eventstream，它将数据加载到一个名为 Bike_Location 的 KQL 数据库表中。该表包含以下列：\n```\nSELECT BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\nFROM bike_location\nWHERE neighbourhood = 'Sands End'\nAND no_bikes >= 15\nORDER BY no_bikes\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\n您需要应用转换和过滤逻辑以准备数据供使用。解决方案必须返回 Neighbourhood 为 Sands End 且 No_Bikes 至少为 15 的数据。\n结果必须按 No_Bikes 升序排列。\n解决方案：您使用以下代码段：\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a Fabric eventstream that loads data into a table named Bike_Location in a KQL database. The table contains the following columns:\n```\nSELECT BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp\nFROM bike_location\nWHERE neighbourhood = 'Sands End'\nAND no_bikes >= 15\nORDER BY no_bikes\n```\nBikepointID -\nStreet -\nNeighbourhood -\nNo_Bikes -\nNo_Empty_Docks -\nTimestamp -\nYou need to apply transformation and filter logic to prepare the data for consumption. The solution must return data for a neighbourhood named Sands End when No_Bikes is at least 15. The results must be ordered by No_Bikes in ascending order.\nSolution: You use the following code segment:\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）或SQL查询的基本语法，包括数据过滤（WHERE）、排序（ORDER BY）以及数据选择（SELECT）。\n同时考察了如何根据业务需求对数据进行筛选和排序以满足特定的消费需求。\n2. 独立分析每个选项\n选项A: Yes\n代码中使用了SELECT语句正确选择了所需的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\nWHERE条件正确过滤了Neighbourhood为'Sands End'且No_Bikes大于等于15的数据。\nORDER BY语句正确按照No_Bikes列进行升序排序。\n从逻辑上看，这段代码完全满足题目要求，因此选项A是正确的。\n选项B: No\n选项B认为代码不满足要求，但从分析来看，代码的逻辑和语法都正确，能够实现题目目标。\n因此选项B是错误的。\n3. 我的选择\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案的比较\n我的答案与官方答案一致，均为A。\n原因是代码逻辑清晰，语法正确，完全满足题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）或SQL查询的基本语法，包括数据过滤（WHERE）、排序（ORDER BY）以及数据选择（SELECT）。\n同时考察了如何根据业务需求对数据进行筛选和排序以满足特定的消费需求。\n2. 独立分析每个选项\n选项A: Yes\n代码中使用了SELECT语句正确选择了所需的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\nWHERE条件正确过滤了Neighbourhood为'Sands End'且No_Bikes大于等于15的数据。\nORDER BY语句正确按照No_Bikes列进行升序排序。\n从逻辑上看，这段代码完全满足题目要求，因此选项A是正确的。\n选项B: No\n选项B认为代码不满足要求，但从分析来看，代码的逻辑和语法都正确，能够实现题目目标。\n因此选项B是错误的。\n3. 我的选择\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案的比较\n我的答案与官方答案一致，均为A。\n原因是代码逻辑清晰，语法正确，完全满足题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）或SQL查询的基本语法，包括数据过滤（WHERE）、排序（ORDER BY）以及数据选择（SELECT）。\n同时考察了如何根据业务需求对数据进行筛选和排序以满足特定的消费需求。\n2. 独立分析每个选项\n选项A: Yes\n代码中使用了SELECT语句正确选择了所需的列：BikepointID, Street, Neighbourhood, No_Bikes, No_Empty_Docks, Timestamp。\nWHERE条件正确过滤了Neighbourhood为'Sands End'且No_Bikes大于等于15的数据。\nORDER BY语句正确按照No_Bikes列进行升序排序。\n从逻辑上看，这段代码完全满足题目要求，因此选项A是正确的。\n选项B: No\n选项B认为代码不满足要求，但从分析来看，代码的逻辑和语法都正确，能够实现题目目标。\n因此选项B是错误的。\n3. 我的选择\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案的比较\n我的答案与官方答案一致，均为A。\n原因是代码逻辑清晰，语法正确，完全满足题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 36,
  "pdfPage": 83,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 36",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 36",
  "pdfQuestionNum": 36,
  "topic": 1
 },
 {
  "id": "dp700-q037",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "禁用高并发。",
    "textEn": "Disable high concurrency.",
    "textZh": "禁用高并发。"
   },
   {
    "id": "B",
    "text": "创建-",
    "textEn": "Create a custom pool.",
    "textZh": "创建-"
   },
   {
    "id": "C",
    "text": "修改执行器数量。",
    "textEn": "Modify the number of executors.",
    "textZh": "修改执行器数量。"
   },
   {
    "id": "D",
    "text": "设置默认",
    "textEn": "Set the default environment.",
    "textZh": "设置默认"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "您需要确保 bronze 和 silver 层的处理过程在隔离环境中运行。\n如何配置 Apache Spark 设置？",
  "stemZh": "您需要确保 bronze 和 silver 层的处理过程在隔离环境中运行。\n如何配置 Apache Spark 设置？",
  "stemEn": "You need to ensure that processes for the bronze and silver layers run in isolation.\nHow should you configure the Apache Spark settings?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置Apache Spark设置以确保数据处理流程的隔离性和性能优化。\n涉及Fabric环境中高并发、资源池管理以及Spark执行器配置的知识点。\n2. 选项分析\nA. Disable high concurrency (禁用高并发)\n禁用高并发会降低系统的整体性能，尤其是在需要处理多个任务时。虽然可以减少资源竞争，但这并不是最佳解决方案，因为高并发是Fabric环境的一个重要特性，禁用它可能会影响其他任务的执行效率。\n错误原因：禁用高并发并不能直接解决流程隔离的问题。\nB. Create a custom pool (创建一个自定义池)\n创建自定义池可以为不同的任务分配独立的资源，从而实现流程的隔离。这是确保不同层（如bronze和silver层）运行时互不干扰的最佳实践。\n正确原因：自定义池允许更精细的资源管理，确保任务之间的隔离性。\nC. Modify the number of executors (修改执行器数量)\n修改执行器数量可以优化任务的并行处理能力，但它并不能直接解决流程隔离的问题。执行器数量的调整更多是针对性能优化，而不是任务隔离。\n错误原因：调整执行器数量无法确保不同层的任务运行在隔离的环境中。\nD. Set the default environment (设置默认环境)\n设置默认环境是一个通用配置选项，无法直接解决流程隔离的问题。它更多是针对环境的初始化，而不是资源的分配和隔离。\n错误原因：设置默认环境与流程隔离无关。\n3. 我的答案\nB. Create a custom pool\n4. 官方答案\nB. Create a custom pool\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因：创建自定义池是确保不同任务运行在隔离环境中的最佳实践，同时符合题目要求的\"确保流程隔离\"。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置Apache Spark设置以确保数据处理流程的隔离性和性能优化。\n涉及Fabric环境中高并发、资源池管理以及Spark执行器配置的知识点。\n2. 选项分析\nA. Disable high concurrency (禁用高并发)\n禁用高并发会降低系统的整体性能，尤其是在需要处理多个任务时。虽然可以减少资源竞争，但这并不是最佳解决方案，因为高并发是Fabric环境的一个重要特性，禁用它可能会影响其他任务的执行效率。\n错误原因：禁用高并发并不能直接解决流程隔离的问题。\nB. Create a custom pool (创建一个自定义池)\n创建自定义池可以为不同的任务分配独立的资源，从而实现流程的隔离。这是确保不同层（如bronze和silver层）运行时互不干扰的最佳实践。\n正确原因：自定义池允许更精细的资源管理，确保任务之间的隔离性。\nC. Modify the number of executors (修改执行器数量)\n修改执行器数量可以优化任务的并行处理能力，但它并不能直接解决流程隔离的问题。执行器数量的调整更多是针对性能优化，而不是任务隔离。\n错误原因：调整执行器数量无法确保不同层的任务运行在隔离的环境中。\nD. Set the default environment (设置默认环境)\n设置默认环境是一个通用配置选项，无法直接解决流程隔离的问题。它更多是针对环境的初始化，而不是资源的分配和隔离。\n错误原因：设置默认环境与流程隔离无关。\n3. 我的答案\nB. Create a custom pool\n4. 官方答案\nB. Create a custom pool\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因：创建自定义池是确保不同任务运行在隔离环境中的最佳实践，同时符合题目要求的\"确保流程隔离\"。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置Apache Spark设置以确保数据处理流程的隔离性和性能优化。\n涉及Fabric环境中高并发、资源池管理以及Spark执行器配置的知识点。\n2. 选项分析\nA. Disable high concurrency (禁用高并发)\n禁用高并发会降低系统的整体性能，尤其是在需要处理多个任务时。虽然可以减少资源竞争，但这并不是最佳解决方案，因为高并发是Fabric环境的一个重要特性，禁用它可能会影响其他任务的执行效率。\n错误原因：禁用高并发并不能直接解决流程隔离的问题。\nB. Create a custom pool (创建一个自定义池)\n创建自定义池可以为不同的任务分配独立的资源，从而实现流程的隔离。这是确保不同层（如bronze和silver层）运行时互不干扰的最佳实践。\n正确原因：自定义池允许更精细的资源管理，确保任务之间的隔离性。\nC. Modify the number of executors (修改执行器数量)\n修改执行器数量可以优化任务的并行处理能力，但它并不能直接解决流程隔离的问题。执行器数量的调整更多是针对性能优化，而不是任务隔离。\n错误原因：调整执行器数量无法确保不同层的任务运行在隔离的环境中。\nD. Set the default environment (设置默认环境)\n设置默认环境是一个通用配置选项，无法直接解决流程隔离的问题。它更多是针对环境的初始化，而不是资源的分配和隔离。\n错误原因：设置默认环境与流程隔离无关。\n3. 我的答案\nB. Create a custom pool\n4. 官方答案\nB. Create a custom pool\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因：创建自定义池是确保不同任务运行在隔离环境中的最佳实践，同时符合题目要求的\"确保流程隔离\"。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 37,
  "pdfPage": 86,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 37",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 37",
  "pdfQuestionNum": 37,
  "topic": 1,
  "caseStudyId": "dp700-case-2",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示内容和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V- Order Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\n有！\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示内容和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V- Order Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\n有！\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q038",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "select",
  "options": [],
  "answer": [
   "SCHEMABINDING",
   "USER_NAME()",
   "AuthorSales"
  ],
  "pdfAnswer": [
   "SCHEMABINDING",
   "USER_NAME()",
   "AuthorSales"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "AuthorSales",
      "en": "AuthorSales",
      "zh": "AuthorSales"
     },
     {
      "key": "AuthorEmail",
      "en": "AuthorEmail",
      "zh": "AuthorEmail"
     },
     {
      "key": "AuthorSales.AuthorEmail",
      "en": "AuthorSales.AuthorEmail",
      "zh": "AuthorSales.AuthorEmail"
     },
     {
      "key": "BLOCK",
      "en": "BLOCK",
      "zh": "BLOCK"
     },
     {
      "key": "FILTER",
      "en": "FILTER",
      "zh": "FILTER"
     },
     {
      "key": "INLINE",
      "en": "INLINE",
      "zh": "INLINE"
     },
     {
      "key": "SCHEMABINDING",
      "en": "SCHEMABINDING",
      "zh": "SCHEMABINDING"
     },
     {
      "key": "USER_NAME()",
      "en": "USER_NAME()",
      "zh": "USER_NAME()"
     }
    ],
    "answer": "SCHEMABINDING"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "AuthorSales",
      "en": "AuthorSales",
      "zh": "AuthorSales"
     },
     {
      "key": "AuthorEmail",
      "en": "AuthorEmail",
      "zh": "AuthorEmail"
     },
     {
      "key": "AuthorSales.AuthorEmail",
      "en": "AuthorSales.AuthorEmail",
      "zh": "AuthorSales.AuthorEmail"
     },
     {
      "key": "BLOCK",
      "en": "BLOCK",
      "zh": "BLOCK"
     },
     {
      "key": "FILTER",
      "en": "FILTER",
      "zh": "FILTER"
     },
     {
      "key": "INLINE",
      "en": "INLINE",
      "zh": "INLINE"
     },
     {
      "key": "SCHEMABINDING",
      "en": "SCHEMABINDING",
      "zh": "SCHEMABINDING"
     },
     {
      "key": "USER_NAME()",
      "en": "USER_NAME()",
      "zh": "USER_NAME()"
     }
    ],
    "answer": "USER_NAME()"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "AuthorSales",
      "en": "AuthorSales",
      "zh": "AuthorSales"
     },
     {
      "key": "AuthorEmail",
      "en": "AuthorEmail",
      "zh": "AuthorEmail"
     },
     {
      "key": "AuthorSales.AuthorEmail",
      "en": "AuthorSales.AuthorEmail",
      "zh": "AuthorSales.AuthorEmail"
     },
     {
      "key": "BLOCK",
      "en": "BLOCK",
      "zh": "BLOCK"
     },
     {
      "key": "FILTER",
      "en": "FILTER",
      "zh": "FILTER"
     },
     {
      "key": "INLINE",
      "en": "INLINE",
      "zh": "INLINE"
     },
     {
      "key": "SCHEMABINDING",
      "en": "SCHEMABINDING",
      "zh": "SCHEMABINDING"
     },
     {
      "key": "USER_NAME()",
      "en": "USER_NAME()",
      "zh": "USER_NAME()"
     }
    ],
    "answer": "AuthorSales"
   }
  ],
  "template": "CREATE FUNCTION dbo.tvf_rlspredicate(@Author AS varchar(50))\n    RETURNS TABLE\nWITH {{1}}\nAS\n    RETURN SELECT 1 AS tvf_rlspredicate_result\nWHERE @Author = {{2}}\nGO\n\nCREATE SECURITY POLICY RLSFilter\nADD FILTER PREDICATE Security.tvf_rlspredicate(AuthorEmail)\nON {{3}}\nWITH (STATE = ON)",
  "templateEn": "CREATE FUNCTION dbo.tvf_rlspredicate(@Author AS varchar(50))\n    RETURNS TABLE\nWITH {{1}}\nAS\n    RETURN SELECT 1 AS tvf_rlspredicate_result\nWHERE @Author = {{2}}\nGO\n\nCREATE SECURITY POLICY RLSFilter\nADD FILTER PREDICATE Security.tvf_rlspredicate(AuthorEmail)\nON {{3}}\nWITH (STATE = ON)",
  "templateZh": "CREATE FUNCTION dbo.tvf_rlspredicate(@Author AS varchar(50))\n    RETURNS TABLE\nWITH {{1}}\nAS\n    RETURN SELECT 1 AS tvf_rlspredicate_result\nWHERE @Author = {{2}}\nGO\n\nCREATE SECURITY POLICY RLSFilter\nADD FILTER PREDICATE Security.tvf_rlspredicate(AuthorEmail)\nON {{3}}\nWITH (STATE = ON)",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n案例研究\n-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您审查答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回开始案例研究\n-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述\n-\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层次实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。 使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\n有！\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队在报告加载失败时收到以下错误消息：\"SQL 查询运行时失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未更新。\n需求。\n-\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\n-\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要确保作者只能看到各自的销售数据。\n您应该如何完成陈述？要回答，请将适当的值拖到正确的目标。每个值可能会使用一次、多次或不使用。您可能需要拖动拆分栏或滚动以\n注意：每个正确选择都值得一分。",
  "stemZh": "-\n案例研究\n-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您审查答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回开始案例研究\n-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述\n-\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层次实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。 使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\n有！\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队在报告加载失败时收到以下错误消息：\"SQL 查询运行时失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未更新。\n需求。\n-\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\n-\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要确保作者只能看到各自的销售数据。\n您应该如何完成陈述？要回答，请将适当的值拖到正确的目标。每个值可能会使用一次、多次或不使用。您可能需要拖动拆分栏或滚动以\n注意：每个正确选择都值得一分。",
  "stemEn": "-\nCase Study\n-\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview\n-\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes\n-\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control\n-\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible.\nYou need to ensure that the authors can see only their respective sales data.\nHow should you complete the statement? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 97 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是行级安全性（Row-Level Security，RLS）的实现，特别是如何通过安全策略和函数来限制用户访问特定数据。\n涉及的关键技术包括：安全策略（Security Policy）、过滤谓词（Filter Predicate）、用户身份函数（USER_NAMEO）。\n2. 选项分析\nAuthorSales:正确。此表存储了与作者相关的销售数据，是安全策略应用的目标表。\nAuthorEmail:正确。此列存储作者的电子邮件地址，用于匹配用户身份以实现行级安全性。\nAuthorSales.AuthorEmail:错误。虽然此列是目标表的一部分，但在安全策略中不需要使用表名限定列名。\nBLOCK:错误。BLOCK不是行级安全性相关的关键字。\nFILTER：正确。FILTER用于定义过滤谓词以限制用户访问数据。\nINLINE:正确。INLINE用于定义表值函数（TVF）的返回方式，确保函数是内联的以提高性能。\nSCHEMABINDING:：正确。SCHEMABINDING用于确保表值函数绑定到表的架构，防止表结构发生变化时影响函数的行为。\nUSER_NAMEO:正确。USER_NAMEO函数返回当前登录用户的用户名，用于匹配用户身份以实现行级安全性。\n3. 我选的答案\nUSER_NAME()\nAuthorSales\n4. 官方答案\nUSER_NAME()\nAuthorSales\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationZh": "【答案来源】PDF 第 97 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是行级安全性（Row-Level Security，RLS）的实现，特别是如何通过安全策略和函数来限制用户访问特定数据。\n涉及的关键技术包括：安全策略（Security Policy）、过滤谓词（Filter Predicate）、用户身份函数（USER_NAMEO）。\n2. 选项分析\nAuthorSales:正确。此表存储了与作者相关的销售数据，是安全策略应用的目标表。\nAuthorEmail:正确。此列存储作者的电子邮件地址，用于匹配用户身份以实现行级安全性。\nAuthorSales.AuthorEmail:错误。虽然此列是目标表的一部分，但在安全策略中不需要使用表名限定列名。\nBLOCK:错误。BLOCK不是行级安全性相关的关键字。\nFILTER：正确。FILTER用于定义过滤谓词以限制用户访问数据。\nINLINE:正确。INLINE用于定义表值函数（TVF）的返回方式，确保函数是内联的以提高性能。\nSCHEMABINDING:：正确。SCHEMABINDING用于确保表值函数绑定到表的架构，防止表结构发生变化时影响函数的行为。\nUSER_NAMEO:正确。USER_NAMEO函数返回当前登录用户的用户名，用于匹配用户身份以实现行级安全性。\n3. 我选的答案\nUSER_NAME()\nAuthorSales\n4. 官方答案\nUSER_NAME()\nAuthorSales\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationEn": "[Answer source] PDF p.97 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 38,
  "pdfPage": 92,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 38",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 38",
  "pdfQuestionNum": 38,
  "topic": 1
 },
 {
  "id": "dp700-q039",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本部分中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.getSecret 并指定 key vault URL 和 key vault secret。\n这是否",
  "stemZh": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本部分中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.getSecret 并指定 key vault URL 和 key vault secret。\n这是否",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.getSecret and specify the key vault URL and key vault secret.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中使用代码访问Key Vault中的机密信息。\n2. 选项分析\nA.Yes:正确。使用 notebookutils.credentials.getSecret 方法可以从Azure Key Vault中检索机密信息。此方法支持通过指定Key Vault URL和密钥名称来获取机密值，从而满足题目中提到的需求。\nB.No：错误。题目中明确提到需要从KeyVault1中检索应用程序ID和密钥，而代码段使用了正确的方法和参数来实现这一目标，因此选项B不符合题目要求。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致，均为A. Yes。\n原因：代码段正确使用了notebookutils.credentials.getSecret方法来检索Key Vault中的机密信息，完全满足题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中使用代码访问Key Vault中的机密信息。\n2. 选项分析\nA.Yes:正确。使用 notebookutils.credentials.getSecret 方法可以从Azure Key Vault中检索机密信息。此方法支持通过指定Key Vault URL和密钥名称来获取机密值，从而满足题目中提到的需求。\nB.No：错误。题目中明确提到需要从KeyVault1中检索应用程序ID和密钥，而代码段使用了正确的方法和参数来实现这一目标，因此选项B不符合题目要求。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致，均为A. Yes。\n原因：代码段正确使用了notebookutils.credentials.getSecret方法来检索Key Vault中的机密信息，完全满足题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中使用代码访问Key Vault中的机密信息。\n2. 选项分析\nA.Yes:正确。使用 notebookutils.credentials.getSecret 方法可以从Azure Key Vault中检索机密信息。此方法支持通过指定Key Vault URL和密钥名称来获取机密值，从而满足题目中提到的需求。\nB.No：错误。题目中明确提到需要从KeyVault1中检索应用程序ID和密钥，而代码段使用了正确的方法和参数来实现这一目标，因此选项B不疥合题畉要求。\n3. 我的答案\nA. Yes\n4. 官方答案\nA. Yes\n5. 与官方答案比较\n我的答案与官方答案一致，均为A. Yes。\n原因：代码段正确使用了notebookutils.credentials.getSecret方法来检索Key Vault中的机密信息，完全满足题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 39,
  "pdfPage": 99,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 39",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 39",
  "pdfQuestionNum": 39,
  "topic": 1
 },
 {
  "id": "dp700-q040",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.putSecret 并指定 key vault URL 和 key vault secret。\n此解决方案是否满足目标？",
  "stemZh": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.putSecret 并指定 key vault URL 和 key vault secret。\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.putSecret and specify the key vault URL and key vault secret.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到的代码段使用了notebookutils.credentials.putSecret方法，但该方法的功能是将密钥存储到Notebook的Credential Store，而不是从Azure Key Vault中检索密钥。此代码段无法满足题目要求。\nB. No 否：正确。由于\"notebookutils.credentials.putSecret方法不适用于从Azure Key Vault中检索密钥，因此该解决方案无法满足题目标。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：'notebookutils.credentials.putSecret方法的功能与题目要求不符，因此该解决方案无法满足目标。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到的代码段使用了notebookutils.credentials.putSecret方法，但该方法的功能是将密钥存储到Notebook的Credential Store，而不是从Azure Key Vault中检索密钥。此代码段无法满足题目要求。\nB. No 否：正确。由于\"notebookutils.credentials.putSecret方法不适用于从Azure Key Vault中检索密钥，因此该解决方案无法满足题目标。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：'notebookutils.credentials.putSecret方法的功能与题目要求不符，因此该解决方案无法满足目标。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用和集成。\n：APl的认\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到的代码段使用了notebookutils.credentials.putSecret方法，但该方法的功能是将密钥存储到Notebook的Credential Store，而不是从Azure Key Vault中检索密钥。此代码段无法满足题目要求。\nB. No 否：正确。由于\"notebookutils.credentials.putSecret方法不适用于从Azure Key Vault中检索密钥，因此该解决方案无法满足题目标。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：'notebookutils.credentials.putSecret方法的功能与题目要求不符，因此该解决方案无法满足目标。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 40,
  "pdfPage": 102,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 40",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 40",
  "pdfQuestionNum": 40,
  "topic": 1
 },
 {
  "id": "dp700-q041",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本部分中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.getSecret，并指定 key vault URL 和链接服务的名称。\n此解决方案是否满足目标？",
  "stemZh": "注意：此问题是一个痉列问题的一部分，这些问题呈现界同的场景。痉列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本部分中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个名为 KeyVault1 的 Azure key vault，其中包含机密。\n您有一个名为 Workspace1 的 Fabric workspace。Workspace 包含一个名为 Notebook1 的 notebook，该 notebook 执行以下任务：\n·将阶段数据加载到 lakehouse 中的目标表\n·触发语义模型的刷新\n您计划向 Notebook1添加功能，以使用 Fabric API监控语义模型刷新。\n您需要从 KeyVault1 检索注册的应用程序 ID 和机密，以生成身份验证令牌。\n解决方案：您使用以下代码段：\n使用 notebookutils.credentials.getSecret，并指定 key vault URL 和链接服务的名称。\n此解决方案是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure key vault named KeyVault1 that contains secrets.\nYou have a Fabric workspace named Workspace1. Workspace contains a notebook named Notebook1 that performs the following tasks:\n• Loads stage data to the target tables in a lakehouse\n• Triggers the refresh of a semantic model\nYou plan to add functionality to Notebook1 that will use the Fabric API to monitor the semantic model refreshes.\nYou need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token.\nSolution: You use the following code segment:\nUse notebookutils.credentials.getSecret and specify the key vault URL and the name of a linked service.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用与集成。\nFabric API的认证与授权机制。\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，但此方法需要正确配置Key Vault的URL和Linked Service。题目未明确说明是否已正确配置，且此方法通常用于Databricks环境，而非Fabric环境。\nB. No否：正确。Fabric环境中并不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥。需要使用其他方法，例如通过Azure SDK或直接调用Key Vault API来完成此任务。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Fabric环境中不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，因此答案为“否”。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用与集成。\nFabric API的认证与授权机制。\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，但此方法需要正确配置Key Vault的URL和Linked Service。题目未明确说明是否已正确配置，且此方法通常用于Databricks环境，而非Fabric环境。\nB. No否：正确。Fabric环境中并不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥。需要使用其他方法，例如通过Azure SDK或直接调用Key Vault API来完成此任务。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Fabric环境中不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，因此答案为“否”。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nAzure Key Vault的使用与集成。\nFabric API的认证与授权机制。\n如何在Notebook中正确检索Key Vault中的应用ID和密钥。\n2. 选项分析\nA. Yes 是：错误。题目中提到使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，但此方法需要正确配置Key Vault的URL和Linked Service。题目未明确说明是否已正确配置，且此方法通常用于Databricks环境，而非Fabric环境。\nB. No否：正确。Fabric环境中并不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥。需要使用其他方法，例如通过Azure SDK或直接调用Key Vault API来完成此任务。\n3. 我的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Fabric环境中不支持直接使用 notebookutils.credentials.getSecret 方法来检索Key Vault中的应用ID和密钥，因此答案为“否”。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 41,
  "pdfPage": 105,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 41",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 41",
  "pdfQuestionNum": 41,
  "topic": 1
 },
 {
  "id": "dp700-q042",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "select",
  "options": [],
  "answer": [
   "activities",
   "dependencies",
   "runMultiple"
  ],
  "pdfAnswer": [
   "activities",
   "dependencies",
   "runMultiple"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "activities",
      "en": "activities",
      "zh": "activities"
     },
     {
      "key": "broadcast",
      "en": "broadcast",
      "zh": "broadcast"
     },
     {
      "key": "dependencies",
      "en": "dependencies",
      "zh": "dependencies"
     },
     {
      "key": "execute",
      "en": "execute",
      "zh": "execute"
     },
     {
      "key": "notebooks",
      "en": "notebooks",
      "zh": "notebooks"
     },
     {
      "key": "runMultiple",
      "en": "runMultiple",
      "zh": "runMultiple"
     }
    ],
    "answer": "activities"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "activities",
      "en": "activities",
      "zh": "activities"
     },
     {
      "key": "broadcast",
      "en": "broadcast",
      "zh": "broadcast"
     },
     {
      "key": "dependencies",
      "en": "dependencies",
      "zh": "dependencies"
     },
     {
      "key": "execute",
      "en": "execute",
      "zh": "execute"
     },
     {
      "key": "notebooks",
      "en": "notebooks",
      "zh": "notebooks"
     },
     {
      "key": "runMultiple",
      "en": "runMultiple",
      "zh": "runMultiple"
     }
    ],
    "answer": "dependencies"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "activities",
      "en": "activities",
      "zh": "activities"
     },
     {
      "key": "broadcast",
      "en": "broadcast",
      "zh": "broadcast"
     },
     {
      "key": "dependencies",
      "en": "dependencies",
      "zh": "dependencies"
     },
     {
      "key": "execute",
      "en": "execute",
      "zh": "execute"
     },
     {
      "key": "notebooks",
      "en": "notebooks",
      "zh": "notebooks"
     },
     {
      "key": "runMultiple",
      "en": "runMultiple",
      "zh": "runMultiple"
     }
    ],
    "answer": "runMultiple"
   }
  ],
  "template": "DAG = {\n    \"{{1}}\": [\n        {\n            \"name\": \"Load_Salesperson\",\n            \"path\": \"Load_Salesperson\",\n            \"timeoutPerCellInSeconds\": 300,\n        },\n        {\n            \"name\": \"Load_Orders\",\n            \"path\": \"Load_Orders\",\n            \"timeoutPerCellInSeconds\": 600,\n            \"{{2}}\": [\"Load_Salesperson\"]\n        }\n    ],\n    \"timeoutInSeconds\": 43200\n}\nmssparkutils.notebook.{{3}}(DAG)",
  "templateEn": "DAG = {\n    \"{{1}}\": [\n        {\n            \"name\": \"Load_Salesperson\",\n            \"path\": \"Load_Salesperson\",\n            \"timeoutPerCellInSeconds\": 300,\n        },\n        {\n            \"name\": \"Load_Orders\",\n            \"path\": \"Load_Orders\",\n            \"timeoutPerCellInSeconds\": 600,\n            \"{{2}}\": [\"Load_Salesperson\"]\n        }\n    ],\n    \"timeoutInSeconds\": 43200\n}\nmssparkutils.notebook.{{3}}(DAG)",
  "templateZh": "DAG = {\n    \"{{1}}\": [\n        {\n            \"name\": \"Load_Salesperson\",\n            \"path\": \"Load_Salesperson\",\n            \"timeoutPerCellInSeconds\": 300,\n        },\n        {\n            \"name\": \"Load_Orders\",\n            \"path\": \"Load_Orders\",\n            \"timeoutPerCellInSeconds\": 600,\n            \"{{2}}\": [\"Load_Salesperson\"]\n        }\n    ],\n    \"timeoutInSeconds\": 43200\n}\nmssparkutils.notebook.{{3}}(DAG)",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n您有两个 Fabric notebooks，分别名为 Load_Salesperson 和 Load_Orders，它们从湖仓中的 Parquet 文件读取数据。\nLoad_Salesperson 写入一个名为 dim_salesperson 的 Delta 表。Load_Orders 写入一个名为 fact_orders 的 Delta 表，并依赖于Load_Salesperson 的成功执行。\n您需要使用 notebook 实现一个模式，以动态地按适当顺序执行 Load_Salesperson 和 Load_Orders。\n您应该如何完成代码？要回答，请将适当的值拖到正确的目标位置。每个值可能会使用一次、多次或完全不使用。您可能需要拖动分隔条或滚动以查看内容。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您有两个 Fabric notebooks，分别名为 Load_Salesperson 和 Load_Orders，它们从湖仓中的 Parquet 文件读取数据。\nLoad_Salesperson 写入一个名为 dim_salesperson 的 Delta 表。Load_Orders 写入一个名为 fact_orders 的 Delta 表，并依赖于Load_Salesperson 的成功执行。\n您需要使用 notebook 实现一个模式，以动态地按适当顺序执行 Load_Salesperson 和 Load_Orders。\n您应该如何完成代码？要回答，请将适当的值拖到正确的目标位置。每个值可能会使用一次、多次或完全不使用。您可能需要拖动分隔条或滚动以查看内容。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou have two Fabric notebooks named Load_Salesperson and Load_Orders that read data from Parquet files in a lakehouse.\nLoad_Salesperson writes to a Delta table named dim_salesperson. Load_Orders writes to a Delta table named fact_orders and is dependent on the successful execution of Load_Salesperson.\nYou need to implement a pattern to dynamically execute Load_Salesperson and Load_Orders in the appropriate order by using a notebook.\nHow should you complete the code? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 110 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Microsoft Fabric中的Notebook执行依赖关系的任务调度。\n重点在于理解Notebook的依赖执行模式，以及如何使用mssparkutils.notebook.runMultiple方法来动态执行多个Notebook。\n2. 选项分析\nactivities:错误。虽然\"activities\"是DAG结构中的一个关键字段，但它并不是用于执行Notebook的函数。\nbroadcast: 错误。\"broadcast\"通常用于分布式计算中的数据广播，与Notebook执行无关。\ndependencies: 错误。\"dependencies\"是DAG结构中定义依赖关系的字桶，但它不是用于执行Notebook的函数。\nexecute:错误。“execute\"并不是mssparkutils.notebook模块中的有效方法。\nnotebooks:错误。“notebooks\"是一个概念或模块，但它不是用于执行Notebook的函数。\nrunMultiple:正确。mssparkutils.notebook.runMultiple是用于执行多个Notebook并处理依赖关系的正确方法。\n3. 我的答案\nrunMultiple\n4. 官方答案\nrunMultiple\n5. 比较与分析\n我的答案与官方答案一致。\n原因分析：mssparkutils.notebook.runMultiple方法能够根据定义的DAG结构动态执行多个Notebook，并处理依赖关系，这是题目要求的正确解决方案。",
  "explanationZh": "【答案来源】PDF 第 110 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Microsoft Fabric中的Notebook执行依赖关系的任务调度。\n重点在于理解Notebook的依赖执行模式，以及如何使用mssparkutils.notebook.runMultiple方法来动态执行多个Notebook。\n2. 选项分析\nactivities:错误。虽然\"activities\"是DAG结构中的一个关键字段，但它并不是用于执行Notebook的函数。\nbroadcast: 错误。\"broadcast\"通常用于分布式计算中的数据广播，与Notebook执行无关。\ndependencies: 错误。\"dependencies\"是DAG结构中定义依赖关系的字桶，但它不是用于执行Notebook的函数。\nexecute:错误。“execute\"并不是mssparkutils.notebook模块中的有效方法。\nnotebooks:错误。“notebooks\"是一个概念或模块，但它不是用于执行Notebook的函数。\nrunMultiple:正确。mssparkutils.notebook.runMultiple是用于执行多个Notebook并处理依赖关系的正确方法。\n3. 我的答案\nrunMultiple\n4. 官方答案\nrunMultiple\n5. 比较与分析\n我的答案与官方答案一致。\n原因分析：mssparkutils.notebook.runMultiple方法能够根据定义的DAG结构动态执行多个Notebook，并处理依赖关系，这是题目要求的正确解决方案。",
  "explanationEn": "[Answer source] PDF p.110 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 42,
  "pdfPage": 108,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 42",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 42",
  "pdfQuestionNum": 42,
  "topic": 1
 },
 {
  "id": "dp700-q043",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "ALTER",
   "ALTER",
   "PARTIAL"
  ],
  "pdfAnswer": [
   "ALTER",
   "ALTER",
   "PARTIAL"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "ALTER",
      "en": "ALTER",
      "zh": "ALTER"
     },
     {
      "key": "CREATE",
      "en": "CREATE",
      "zh": "CREATE"
     },
     {
      "key": "DEFAULT",
      "en": "DEFAULT",
      "zh": "DEFAULT"
     },
     {
      "key": "DROP",
      "en": "DROP",
      "zh": "DROP"
     },
     {
      "key": "EMAIL",
      "en": "EMAIL",
      "zh": "EMAIL"
     },
     {
      "key": "PARTIAL",
      "en": "PARTIAL",
      "zh": "PARTIAL"
     },
     {
      "key": "REPLACE",
      "en": "REPLACE",
      "zh": "REPLACE"
     },
     {
      "key": "UPDATE",
      "en": "UPDATE",
      "zh": "UPDATE"
     }
    ],
    "answer": "ALTER"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "ALTER",
      "en": "ALTER",
      "zh": "ALTER"
     },
     {
      "key": "CREATE",
      "en": "CREATE",
      "zh": "CREATE"
     },
     {
      "key": "DEFAULT",
      "en": "DEFAULT",
      "zh": "DEFAULT"
     },
     {
      "key": "DROP",
      "en": "DROP",
      "zh": "DROP"
     },
     {
      "key": "EMAIL",
      "en": "EMAIL",
      "zh": "EMAIL"
     },
     {
      "key": "PARTIAL",
      "en": "PARTIAL",
      "zh": "PARTIAL"
     },
     {
      "key": "REPLACE",
      "en": "REPLACE",
      "zh": "REPLACE"
     },
     {
      "key": "UPDATE",
      "en": "UPDATE",
      "zh": "UPDATE"
     }
    ],
    "answer": "ALTER"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "ALTER",
      "en": "ALTER",
      "zh": "ALTER"
     },
     {
      "key": "CREATE",
      "en": "CREATE",
      "zh": "CREATE"
     },
     {
      "key": "DEFAULT",
      "en": "DEFAULT",
      "zh": "DEFAULT"
     },
     {
      "key": "DROP",
      "en": "DROP",
      "zh": "DROP"
     },
     {
      "key": "EMAIL",
      "en": "EMAIL",
      "zh": "EMAIL"
     },
     {
      "key": "PARTIAL",
      "en": "PARTIAL",
      "zh": "PARTIAL"
     },
     {
      "key": "REPLACE",
      "en": "REPLACE",
      "zh": "REPLACE"
     },
     {
      "key": "UPDATE",
      "en": "UPDATE",
      "zh": "UPDATE"
     }
    ],
    "answer": "PARTIAL"
   }
  ],
  "template": "{{1}} TABLE dbo.CreditCard\n{{2}} COLUMN [CreditCard]\nADD MASKED\nWITH (FUNCTION = '{{3}}(2,\"XXXXXXXXXX\",4)')",
  "templateEn": "{{1}} TABLE dbo.CreditCard\n{{2}} COLUMN [CreditCard]\nADD MASKED\nWITH (FUNCTION = '{{3}}(2,\"XXXXXXXXXX\",4)')",
  "templateZh": "{{1}} TABLE dbo.CreditCard\n{{2}} COLUMN [CreditCard]\nADD MASKED\nWITH (FUNCTION = '{{3}}(2,\"XXXXXXXXXX\",4)')",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n您有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse2 的仓库。\n一组数据分析师对 Workspace1拥有Viewer 角色访问权限。\n您通过运行以下语句创建了一个表。\n```\nCREATE TABLE [warehouse2].[dbo].[CreditCard]\n(\n  CreditCard varchar(20) NOT NULL\n  ,CreditCardType varchar(10) NOT NULL)\nGO\n```\n您需要确保团队只能查看 CreditCard 属性的前两个字符和最后四个字符。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse2 的仓库。\n一组数据分析师对 Workspace1拥有Viewer 角色访问权限。\n您通过运行以下语句创建了一个表。\n```\nCREATE TABLE [warehouse2].[dbo].[CreditCard]\n(\n  CreditCard varchar(20) NOT NULL\n  ,CreditCardType varchar(10) NOT NULL)\nGO\n```\n您需要确保团队只能查看 CreditCard 属性的前两个字符和最后四个字符。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse2.\nA team of data analysts has Viewer role access to Workspace1.\nYou create a table by running the following statement.\n```\nCREATE TABLE [warehouse2].[dbo].[CreditCard]\n(\n  CreditCard varchar(20) NOT NULL\n  ,CreditCardType varchar(10) NOT NULL)\nGO\n```\nYou need to ensure that the team can view only the first two characters and the last four characters of the CreditCard attribute.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 113 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Synapse Analytics中的动态数据屏蔽（Dynamic Data Masking）功能。\n动态数据屏蔽用于限制用户查看敏感数据的能力，通过定义屏蔽规则，用户可以看到部分数据而不是完整数据。\n2. 选项分析\nTABLE dbo.CreditCard\nALTER：正确。ALTER用于修改现有表的结构或属性，符合题目要求。\nCREATE：错误。CREATE用于创建新表，而题目中表已经存在。\nDEFAULT: 错误。DEFAULT用于设置列的默认值，与定蔽功能无关。\nDROP: 错误。DROP用于删除表，与定蔽功能无关。\nCOLUMN [CreditCard]\nALTER：正确。ALTER用于修改列的属性，符合题目要求。\nCREATE：错误。CREATE用于创建新列，而题目中列已经存在。\nDEFAULT: 错误。DEFAULT用于设置列的默认值，与定蔽功能无关。\nDROP: 错误。DROP用于删除列，与定蔽功能无关。\nADD MASKED WITH (FUNCTION = '...')\nEMAIL：错误。EMAIL屏蔽功能用于电子邮件地址格式，不适用于信用卡号。\nPARTIAL: 正确。PARTIAL定蔽功能允许显示部分数据（如前两位和后四位），符合题目要求。\nREPLACE: 错误。REPLACE定蔽功能用于替换整个数据，与题目要求不符。\nUPDATE: 错误。UPDATE用于更新数据，与定蔽功能无关。\n3. 我的答案\nALTER\nALTER\nPARTIAL\n4. 官方答案\nALTER\nALTER\nPARTIAL\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 113 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Synapse Analytics中的动态数据屏蔽（Dynamic Data Masking）功能。\n动态数据屏蔽用于限制用户查看敏感数据的能力，通过定义屏蔽规则，用户可以看到部分数据而不是完整数据。\n2. 选项分析\nTABLE dbo.CreditCard\nALTER：正确。ALTER用于修改现有表的结构或属性，符合题目要求。\nCREATE：错误。CREATE用于创建新表，而题目中表已经存在。\nDEFAULT: 错误。DEFAULT用于设置列的默认值，与定蔽功能无关。\nDROP: 错误。DROP用于删除表，与定蔽功能无关。\nCOLUMN [CreditCard]\nALTER：正确。ALTER用于修改列的属性，符合题目要求。\nCREATE：错误。CREATE用于创建新列，而题目中列已经存在。\nDEFAULT: 错误。DEFAULT用于设置列的默认值，与定蔽功能无关。\nDROP: 错误。DROP用于删除列，与定蔽功能无关。\nADD MASKED WITH (FUNCTION = '...')\nEMAIL：错误。EMAIL屏蔽功能用于电子邮件地址格式，不适用于信用卡号。\nPARTIAL: 正确。PARTIAL定蔽功能允许显示部分数据（如前两位和后四位），符合题目要求。\nREPLACE: 错误。REPLACE定蔽功能用于替换整个数据，与题目要求不符。\nUPDATE: 错误。UPDATE用于更新数据，与定蔽功能无关。\n3. 我的答案\nALTER\nALTER\nPARTIAL\n4. 官方答案\nALTER\nALTER\nPARTIAL\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.113 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 43,
  "pdfPage": 111,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 43",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 43",
  "pdfQuestionNum": 43,
  "topic": 1
 },
 {
  "id": "dp700-q044",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "Lookup Schema and Table",
   "output.value"
  ],
  "pdfAnswer": [
   "Lookup Schema and Table",
   "output.value"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "Batch Object Copy",
      "en": "Batch Object Copy",
      "zh": "Batch Object Copy"
     },
     {
      "key": "Dynamic Data Copy",
      "en": "Dynamic Data Copy",
      "zh": "Dynamic Data Copy"
     },
     {
      "key": "Extraction Loop",
      "en": "Extraction Loop",
      "zh": "Extraction Loop"
     },
     {
      "key": "Lookup Schema and Table",
      "en": "Lookup Schema and Table",
      "zh": "Lookup Schema and Table"
     }
    ],
    "answer": "Lookup Schema and Table"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "output",
      "en": "output",
      "zh": "output"
     },
     {
      "key": "output.count",
      "en": "output.count",
      "zh": "output.count"
     },
     {
      "key": "output.pipelineReturnValue",
      "en": "output.pipelineReturnValue",
      "zh": "output.pipelineReturnValue"
     },
     {
      "key": "output.value",
      "en": "output.value",
      "zh": "output.value"
     }
    ],
    "answer": "output.value"
   }
  ],
  "template": "@activity('{{1}}').{{2}}",
  "templateEn": "@activity('{{1}}').{{2}}",
  "templateZh": "@activity('{{1}}').{{2}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "热点\n-\n您正在使用名为 Dynamic Data Copy 的 Fabric 数据管道构建数据编排模式，如图所示。（单击\"展示\"选项卡。） Dynamic Data Copy 不使用参数化。\n```\n[Screenshot transcription] Pipeline canvas: a Lookup activity named \"Lookup Schema and Table\" connected (on success) to a ForEach activity named \"Extraction Loop\", which contains one activity \"Batch Object Copy\". ForEach Settings tab: Batch count (empty); Items* = \"This property should be parameterized.\" with link \"Add dynamic content [Alt+Shift+D]\". The Pipeline expression builder pane is open and empty.\n```\n您需要配置 ForEach 活动以接收要复制的表列表。\n您应该如何完成管道表达式？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "热点\n-\n您正在使用名为 Dynamic Data Copy 的 Fabric 数据管道构建数据编排模式，如图所示。（单击\"展示\"选项卡。） Dynamic Data Copy 不使用参数化。\n```\n[Screenshot transcription] Pipeline canvas: a Lookup activity named \"Lookup Schema and Table\" connected (on success) to a ForEach activity named \"Extraction Loop\", which contains one activity \"Batch Object Copy\". ForEach Settings tab: Batch count (empty); Items* = \"This property should be parameterized.\" with link \"Add dynamic content [Alt+Shift+D]\". The Pipeline expression builder pane is open and empty.\n```\n您需要配置 ForEach 活动以接收要复制的表列表。\n您应该如何完成管道表达式？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou are building a data orchestration pattern by using a Fabric data pipeline named Dynamic Data Copy as shown in the exhibit.\n```\n[Screenshot transcription] Pipeline canvas: a Lookup activity named \"Lookup Schema and Table\" connected (on success) to a ForEach activity named \"Extraction Loop\", which contains one activity \"Batch Object Copy\". ForEach Settings tab: Batch count (empty); Items* = \"This property should be parameterized.\" with link \"Add dynamic content [Alt+Shift+D]\". The Pipeline expression builder pane is open and empty.\n```\n(Click the Exhibit tab.)\nDynamic Data Copy does NOT use parametrization.\nYou need to configure the ForEach activity to receive the list of tables to be copied.\nHow should you complete the pipeline expression? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 116 页答案图\n\nDP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Data Factory或Microsoft Fabric数据管道中如何使用活动输出（Activity Output）来动态传递数据。\n重点在于理解ForEach活动如何接收动态数据列表，以及如何正确使用表达式来引用其他活动的输出。\n2. 选项分析\n@activity('Batch Object Copy').output:\n此选项引用的是\"Batch Object Copy\"活动的输出。\n根据题目描述，“Dynamic Data Copy\"不使用参数化，因此需要一个明确的列表来驱动ForEach活动。\n\"Batch Object Copy\"通常用于批量复制对象，但它的输出可能不包含表列表，因此此选项不正确。\n@activity('Dynamic Data Copy').output.count:\n此选项引用的是\"Dynamic Data Copy\"活动的输出计数。\n虽然可以获取活动的输出计数，但这并不能提供表的具体列表，因此此选项不正确。\n@activity('Extraction Loop').output.pipelineReturnValue:\n此选项引用的是\"Extraction Loop\"活动的返回值。\n\"pipelineReturnValue\"通常用于返回整个管道的结果，而不是具体的表列表，因此此选项不正确。\n@activity('Lookup Schema and Table').output.value:\n此选项引用的是\"Lookup Schema and Table\"活动的输出值。\n根据题目要求，ForEach活动需要接收表列表，而\"Lookup Schema and Table\"通常用于查找表结构和表名，输出值包含表列表。\n此选项正确。\n3. 我选的答案\n@activity('Lookup Schema and Table').output.value\n4. 官方答案\n@activity('Lookup Schema and Table').output.value\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据题目描述，ForEach活动需要接收表列表，而\"Lookup Schema and Table\"输出的值正是表列表，因此选择此选项是正确的。",
  "explanationZh": "【答案来源】PDF 第 116 页答案图\n\nDP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Data Factory或Microsoft Fabric数据管道中如何使用活动输出（Activity Output）来动态传递数据。\n重点在于理解ForEach活动如何接收动态数据列表，以及如何正确使用表达式来引用其他活动的输出。\n2. 选项分析\n@activity('Batch Object Copy').output:\n此选项引用的是\"Batch Object Copy\"活动的输出。\n根据题目描述，“Dynamic Data Copy\"不使用参数化，因此需要一个明确的列表来驱动ForEach活动。\n\"Batch Object Copy\"通常用于批量复制对象，但它的输出可能不包含表列表，因此此选项不正确。\n@activity('Dynamic Data Copy').output.count:\n此选项引用的是\"Dynamic Data Copy\"活动的输出计数。\n虽然可以获取活动的输出计数，但这并不能提供表的具体列表，因此此选项不正确。\n@activity('Extraction Loop').output.pipelineReturnValue:\n此选项引用的是\"Extraction Loop\"活动的返回值。\n\"pipelineReturnValue\"通常用于返回整个管道的结果，而不是具体的表列表，因此此选项不正确。\n@activity('Lookup Schema and Table').output.value:\n此选项引用的是\"Lookup Schema and Table\"活动的输出值。\n根据题目要求，ForEach活动需要接收表列表，而\"Lookup Schema and Table\"通常用于查找表结构和表名，输出值包含表列表。\n此选项正确。\n3. 我选的答案\n@activity('Lookup Schema and Table').output.value\n4. 官方答案\n@activity('Lookup Schema and Table').output.value\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据题目描述，ForEach活动需要接收表列表，而\"Lookup Schema and Table\"输出的值正是表列表，因此选择此选项是正确的。",
  "explanationEn": "[Answer source] PDF p.116 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 44,
  "pdfPage": 115,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 44",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 44",
  "pdfQuestionNum": 44,
  "topic": 1
 },
 {
  "id": "dp700-q045",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "'random(1900-01-01, 1900-01-01)'",
   "'partial(1,\"@\",5)'"
  ],
  "pdfAnswer": [
   "'random(1900-01-01, 1900-01-01)'",
   "'partial(1,\"@\",5)'"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "'default()'",
      "en": "'default()'",
      "zh": "'default()'"
     },
     {
      "key": "'partial(1900-01-01)'",
      "en": "'partial(1900-01-01)'",
      "zh": "'partial(1900-01-01)'"
     },
     {
      "key": "'random(1900-01-01, 1900-01-01)'",
      "en": "'random(1900-01-01, 1900-01-01)'",
      "zh": "'random(1900-01-01, 1900-01-01)'"
     }
    ],
    "answer": "'random(1900-01-01, 1900-01-01)'"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "'default()'",
      "en": "'default()'",
      "zh": "'default()'"
     },
     {
      "key": "'email()'",
      "en": "'email()'",
      "zh": "'email()'"
     },
     {
      "key": "'partial(1,\"@\",5)'",
      "en": "'partial(1,\"@\",5)'",
      "zh": "'partial(1,\"@\",5)'"
     },
     {
      "key": "'random(1,\"@\",5)'",
      "en": "'random(1,\"@\",5)'",
      "zh": "'random(1,\"@\",5)'"
     }
    ],
    "answer": "'partial(1,\"@\",5)'"
   }
  ],
  "template": "ALTER TABLE DimCustomer\nALTER COLUMN BirthDate\nADD MASKED WITH (FUNCTION = {{1}}\n\nALTER TABLE DimCustomer\nALTER COLUMN EmailAddress\nADD MASKED WITH (FUNCTION = {{2}}",
  "templateEn": "ALTER TABLE DimCustomer\nALTER COLUMN BirthDate\nADD MASKED WITH (FUNCTION = {{1}}\n\nALTER TABLE DimCustomer\nALTER COLUMN EmailAddress\nADD MASKED WITH (FUNCTION = {{2}}",
  "templateZh": "ALTER TABLE DimCustomer\nALTER COLUMN BirthDate\nADD MASKED WITH (FUNCTION = {{1}}\n\nALTER TABLE DimCustomer\nALTER COLUMN EmailAddress\nADD MASKED WITH (FUNCTION = {{2}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n您有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。Warehouse1 包含一个名为 DimCustomers 的表。DimCustomers 包含以下列：\n• CustomerName\n• CustomerID\n• BirthDate\n• EmailAddress\n您需要配置安全性以满足以下要求：\n· DimCustomer 中的 BirthDate 必须被屏蔽并显示为 1900-01-01。\n·DimCustomer 中的 EmailAddress 必须被屏蔽并仅显示第一个前导字符和最后五个字符。\n您应该如何完成该声明？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。Warehouse1 包含一个名为 DimCustomers 的表。DimCustomers 包含以下列：\n• CustomerName\n• CustomerID\n• BirthDate\n• EmailAddress\n您需要配置安全性以满足以下要求：\n· DimCustomer 中的 BirthDate 必须被屏蔽并显示为 1900-01-01。\n·DimCustomer 中的 EmailAddress 必须被屏蔽并仅显示第一个前导字符和最后五个字符。\n您应该如何完成该声明？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named DimCustomers.\nDimCustomers contains the following columns:\n• CustomerName\n• CustomerID\n• BirthDate\n• EmailAddress\nYou need to configure security to meet the following requirements:\n• BirthDate in DimCustomer must be masked and display 1900-01-01.\n• EmailAddress in DimCustomer must be masked and display only the first leading character and the last five characters.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 119 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中使用动态数据屏蔽（Dynamic Data Masking）功能来保护敏感数据的能力。\n需要了解如何使用不同的屏蔽函数（如default()、partialO、randomO、emailo）来满足特定的安全需求。\n2. 选项分析\n对于 BirthDate 列：\ndefaultO:默认屏蔽函数会将列值替换为一个通用的默认值，但无法满足题目要求的具体值\"1900-01-01\"。因此错误。\npartial(1900-01-01)：部分屏蔽函数用于显示部分数据，但它的语法不适用于日期类型，也无法直接设置为\"1900-01-01\"。因此错误。\nrandom(1900-01-01，1900-01-01)：随机屏蔽函数可以将列值替换为一个随机值，但在此情况下，范围被设置为\"1900-01- 01\"到\"1900-01-01\"，因此结果始终是\"1900-01-01\"。这是正确的选项。\n对于 EmailAddress 列：\ndefaultO:默认屏蔽函数会将列值替换为一个通用的默认值，但无法满足题目要求的部分屏蔽需求。因此错误。\nemailO:email屏蔽函数用于电子邮件地址，但它无法满足题目要求的具体屏蔽格式（显示首字符和最后五个字符）。因此错误。\npartial(1,\"@\",5): 部分定蔽函数允许显示首字符和最后五个字符，并用“@”作为分隔符，完全符合题目要求。这是正确的选项。\nrandom(1,\"@\",5)：随机屏蔽函数会生成随机值，无法满足题目要求的具体屏蔽格式。因此错误。\n3. 我选的答案\nBirthDate: random(1900-01-01, 1900-01-01)\nEmailAddress: partial(1,\"@\",5)\n4. 官方答案\nBirthDate: random(1900-01-01, 1900-01-01)\nEmailAddress: partial(1,\"@\",5)\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 119 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中使用动态数据屏蔽（Dynamic Data Masking）功能来保护敏感数据的能力。\n需要了解如何使用不同的屏蔽函数（如default()、partialO、randomO、emailo）来满足特定的安全需求。\n2. 选项分析\n对于 BirthDate 列：\ndefaultO:默认屏蔽函数会将列值替换为一个通用的默认值，但无法满足题目要求的具体值\"1900-01-01\"。因此错误。\npartial(1900-01-01)：部分屏蔽函数用于显示部分数据，但它的语法不适用于日期类型，也无法直接设置为\"1900-01-01\"。因此错误。\nrandom(1900-01-01，1900-01-01)：随机屏蔽函数可以将列值替换为一个随机值，但在此情况下，范围被设置为\"1900-01- 01\"到\"1900-01-01\"，因此结果始终是\"1900-01-01\"。这是正确的选项。\n对于 EmailAddress 列：\ndefaultO:默认屏蔽函数会将列值替换为一个通用的默认值，但无法满足题目要求的部分屏蔽需求。因此错误。\nemailO:email屏蔽函数用于电子邮件地址，但它无法满足题目要求的具体屏蔽格式（显示首字符和最后五个字符）。因此错误。\npartial(1,\"@\",5): 部分定蔽函数允许显示首字符和最后五个字符，并用“@”作为分隔符，完全符合题目要求。这是正确的选项。\nrandom(1,\"@\",5)：随机屏蔽函数会生成随机值，无法满足题目要求的具体屏蔽格式。因此错误。\n3. 我选的答案\nBirthDate: random(1900-01-01, 1900-01-01)\nEmailAddress: partial(1,\"@\",5)\n4. 官方答案\nBirthDate: random(1900-01-01, 1900-01-01)\nEmailAddress: partial(1,\"@\",5)\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.119 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 45,
  "pdfPage": 118,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 45",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 45",
  "pdfQuestionNum": 45,
  "topic": 1
 },
 {
  "id": "dp700-q046",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Lakehouse1、Model1 和 Dashboard1",
    "textEn": "Lakehouse1, Model1, and Dashboard1 only",
    "textZh": "Lakehouse1、Model1 和 Dashboard1"
   },
   {
    "id": "B",
    "text": "Lakehouse1、Model1、Report1 和 Dashboard1",
    "textEn": "Lakehouse1, Model1, Report1 and Dashboard1",
    "textZh": "Lakehouse1、Model1、Report1 和 Dashboard1"
   },
   {
    "id": "C",
    "text": "Report1 和 Dashboard1",
    "textEn": "Report1 and Dashboard1 only",
    "textZh": "Report1 和 Dashboard1"
   },
   {
    "id": "D",
    "text": "Model1、Report1 和 Dashboard1",
    "textEn": "Model1, Report1, and Dashboard1 only",
    "textZh": "Model1、Report1 和 Dashboard1"
   },
   {
    "id": "E",
    "text": "Lakehouse1、Model1 和 Report1",
    "textEn": "Lakehouse1, Model1, and Report1 only",
    "textZh": "Lakehouse1、Model1 和 Report1"
   }
  ],
  "answer": [
   "E"
  ],
  "pdfAnswer": [
   "E"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含以下项目：\n• 一个 Microsoft Power BI 报表，名为 Report1\n• 一个 Power BI 仪表板，名为 Dashboard1\n• 一个语义模型，名为 Model1\n• 一个湖仓，名为 Lakehouse1\n你的公司要求对这些项目实施特定的治理流程。\n在 Fabric 中可以对哪些项目进行认可？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含以下项目：\n• 一个 Microsoft Power BI 报表，名为 Report1\n• 一个 Power BI 仪表板，名为 Dashboard1\n• 一个语义模型，名为 Model1\n• 一个湖仓，名为 Lakehouse1\n你的公司要求对这些项目实施特定的治理流程。\n在 Fabric 中可以对哪些项目进行认可？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains the following items:\n• A Microsoft Power BI report named Report1\n• A Power BI dashboard named Dashboard1\n• A semantic model named Model1\n• A lakehouse name Lakehouse1\nYour company requires that specific governance processes be implemented for the items.\nWhich items can you endorse in Fabric?",
  "explanation": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是Microsoft Fabric中关于数据治理和项目管理的知识，特别是哪些项目可以被“认可”（endorse）。\n2. 选项分析\nA. Lakehouse1, Model1, and Dashboard1 only\n错误：虽然Lakehouse1和Model1可以被认可，但Dashboard1不能被认可，因为Fabric中只有特定类型的项目（如Lakehouse、 Model和Report）支持认可功能。\nB. Lakehouse1, Model1, Report1 and Dashboard1\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nC. Report1 and Dashboard1 only\n错误：虽然Report1可以被认可，但Dashboard1不能被认可，因此此选项不正确。\nD. Model1, Report1, and Dashboard1 only\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nE. Lakehouse1, Model1, and Report1 only\n正确：Lakehouse1、Model1和Report1都支持认可功能，符合Fabric的治理要求。\n3. 我的答案\nE. Lakehouse1, Model1, and Report1 only\n4. 官方答案\nE. Lakehouse1, Model1, and Report1 only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是Microsoft Fabric中关于数据治理和项目管理的知识，特别是哪些项目可以被“认可”（endorse）。\n2. 选项分析\nA. Lakehouse1, Model1, and Dashboard1 only\n错误：虽然Lakehouse1和Model1可以被认可，但Dashboard1不能被认可，因为Fabric中只有特定类型的项目（如Lakehouse、 Model和Report）支持认可功能。\nB. Lakehouse1, Model1, Report1 and Dashboard1\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nC. Report1 and Dashboard1 only\n错误：虽然Report1可以被认可，但Dashboard1不能被认可，因此此选项不正确。\nD. Model1, Report1, and Dashboard1 only\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nE. Lakehouse1, Model1, and Report1 only\n正确：Lakehouse1、Model1和Report1都支持认可功能，符合Fabric的治理要求。\n3. 我的答案\nE. Lakehouse1, Model1, and Report1 only\n4. 官方答案\nE. Lakehouse1, Model1, and Report1 only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n本题考察的是Microsoft Fabric中关于数据治理和项目管理的知识，特别是哪些项目可以被“认可”（endorse）。\n2. 选项分析\nA. Lakehouse1, Model1, and Dashboard1 only\n错误：虽然Lakehouse1和Model1可以被认可，但Dashboard1不能被认可，因为Fabric中只有特定类型的项目（如Lakehouse、 Model和Report）支持认可功能。\nB. Lakehouse1, Model1, Report1 and Dashboard1\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nC. Report1 and Dashboard1 only\n错误：虽然Report1可以被认可，但Dashboard1不能被认可，因此此选项不正确。\nD. Model1, Report1, and Dashboard1 only\n错误：Dashboard1不能被认可，因此此选项包含了一个不支持认可的项目。\nE. Lakehouse1, Model1, and Report1 only\n正确：Lakehouse1、Model1和Report1都支持认可功能，符合Fabric的治理要求。\n3. 我的答案\nE. Lakehouse1, Model1, and Report1 only\n4. 官方答案\nE. Lakehouse1, Model1, and Report1 only\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 46,
  "pdfPage": 121,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 46",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 46",
  "pdfQuestionNum": 46,
  "topic": 1
 },
 {
  "id": "dp700-q047",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Actions (Read and write) 和 Contents (Read and write)",
    "textEn": "Actions (Read and write) and Contents (Read and write)",
    "textZh": "Actions (Read and write) 和 Contents (Read and write)"
   },
   {
    "id": "B",
    "text": "Actions (Read and write) 仅",
    "textEn": "Actions (Read and write) only",
    "textZh": "Actions (Read and write) 仅"
   },
   {
    "id": "C",
    "text": "Contents (Read and write) 仅",
    "textEn": "Contents (Read and write) only",
    "textZh": "Contents (Read and write) 仅"
   },
   {
    "id": "D",
    "text": "Contents (Read) 和 Commit statuses (Read and write)",
    "textEn": "Contents (Read) and Commit statuses (Read and write)",
    "textZh": "Contents (Read) 和 Commit statuses (Read and write)"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区。\n你的公司获得了 GitHub 许可证。\n你需要为 Workspace1 配置源代码管理以使用 GitHub。解决方案必须遵循最小权限原则。\n你需要哪些权限来确保可以将代码提交到 GitHub？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区。\n你的公司获得了 GitHub 许可证。\n你需要为 Workspace1 配置源代码管理以使用 GitHub。解决方案必须遵循最小权限原则。\n你需要哪些权限来确保可以将代码提交到 GitHub？",
  "stemEn": "You have a Fabric workspace named Workspace1.\nYour company acquires GitHub licenses.\nYou need to configure source control for Workpace1 to use GitHub. The solution must follow the principle of least privilege.\nWhich permissions do you require to ensure that you can commit code to GitHub?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置源代码控制（Source Control）以使用GitHub，并遵循最小权限原则。\n理解GitHub权限模型以及如何正确设置权限以满足特定需求。\n2. 选项分析\nA. Actions (Read and write) 和 Contents (Read and write)\n错误。虽然此选项提供了足够的权限来执行代码提交，但它包含了“Actions (Read and write)”权限，这超出了题目要求的最小权限原则。Actions权限主要用于管理GitHub Actions工作流，而题目并未提到需要此权限。\nB. Actions (Read and write) 仅\n错误。Actions权限仅用于管理GitHub Actions工作流，与代码提交无关，因此无法满足题目要求。\nC. Contents (Read and write) 仅\n正确。Contents权限是用于管理存储库内容的权限，包括读取和写入代码。此权限满足代码提交的需求，同时遵循最小权限原则。\nD. Contents (Read) 和 Commit statuses (Read and write)\n错误。Contents (Read) 仅允许读取存储库内容，无法执行代码提交操作。Commit statuses权限用于管理提交状态，与代码提交无关。\n3. 我的答案\nC. Contents (Read and write) 仅\n4. 官方答案\nC. Contents (Read and write) 仅\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Contents (Read and write) 是配置源代码控制以使用GitHub所需的最小权限，符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置源代码控制（Source Control）以使用GitHub，并遵循最小权限原则。\n理解GitHub权限模型以及如何正确设置权限以满足特定需求。\n2. 选项分析\nA. Actions (Read and write) 和 Contents (Read and write)\n错误。虽然此选项提供了足够的权限来执行代码提交，但它包含了“Actions (Read and write)”权限，这超出了题目要求的最小权限原则。Actions权限主要用于管理GitHub Actions工作流，而题目并未提到需要此权限。\nB. Actions (Read and write) 仅\n错误。Actions权限仅用于管理GitHub Actions工作流，与代码提交无关，因此无法满足题目要求。\nC. Contents (Read and write) 仅\n正确。Contents权限是用于管理存储库内容的权限，包括读取和写入代码。此权限满足代码提交的需求，同时遵循最小权限原则。\nD. Contents (Read) 和 Commit statuses (Read and write)\n错误。Contents (Read) 仅允许读取存储库内容，无法执行代码提交操作。Commit statuses权限用于管理提交状态，与代码提交无关。\n3. 我的答案\nC. Contents (Read and write) 仅\n4. 官方答案\nC. Contents (Read and write) 仅\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Contents (Read and write) 是配置源代码控制以使用GitHub所需的最小权限，符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何配置源代码控制（Source Control）以使用GitHub，并遵循最小权限原则。\n理解GitHub权限模型以及如何正确设置权限以满足特定需求。\n2. 选项分析\nA. Actions (Read and write) 和 Contents (Read and write)\n错误。虽然此选项提供了足够的权限来执行代码提交，但它包含了“Actions (Read and write)”权限，这超出了题目要求的最小权限原则。Actions权限主要用于管理GitHub Actions工作流，而题目并未提到需要此权限。\nB. Actions (Read and write) 仅\n错误。Actions权限仅用于管理GitHub Actions工作流，与代码提交无关，因此无法满足题目要求。\nC. Contents (Read and write) 仅\n正确。Contents权限是用于管理存储库内容的权限，包括读取和写入代码。此权限满足代码提交的需求，同时遵循最小权限原则。\nD. Contents (Read) 和 Commit statuses (Read and write)\n错误。Contents (Read) 仅允许读取存储库内容，无法执行代码提交操作。Commit statuses权限用于管理提交状态，与代码提交无关。\n3. 我的答案\nC. Contents (Read and write) 仅\n4. 官方答案\nC. Contents (Read and write) 仅\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Contents (Read and write) 是配置源代码控制以使用GitHub所需的最小权限，符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 47,
  "pdfPage": 123,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 47",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 47",
  "pdfQuestionNum": 47,
  "topic": 1
 },
 {
  "id": "dp700-q048",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "组织、项目、Git 存储库和分支",
    "textEn": "the organization, project, Git repository, and branch",
    "textZh": "组织、项目、Git 存储库和分支"
   },
   {
    "id": "B",
    "text": "用于 Git 身份验证的个人访问令牌 (PAT) 和 Git 存储库 URL",
    "textEn": "the personal access token (PAT) for Git authentication and the Git repository URL",
    "textZh": "用于 Git 身份验证的个人访问令牌 (PAT) 和 Git 存储库 URL"
   },
   {
    "id": "C",
    "text": "项目、Git 存储库、分支和 Git 文件夹",
    "textEn": "the project, Git repository, branch, and Git folder",
    "textZh": "项目、Git 存储库、分支和 Git 文件夹"
   },
   {
    "id": "D",
    "text": "Git 存储库 URL 和 Git 文件夹",
    "textEn": "the Git repository URL and the Git folder",
    "textZh": "Git 存储库 URL 和 Git 文件夹"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区。\n你计划使用 Azure DevOps Git 存储库为 Workspace1 配置 Git 集成。\n一个 Azure DevOps 管理员创建了支持 Workspace1 集成所需的工件。\n你需要哪些详细信息来执行集成？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区。\n你计划使用 Azure DevOps Git 存储库为 Workspace1 配置 Git 集成。\n一个 Azure DevOps 管理员创建了支持 Workspace1 集成所需的工件。\n你需要哪些详细信息来执行集成？",
  "stemEn": "You have a Fabric workspace named Workspace1.\nYou plan to configure Git integration for Workspace1 by using an Azure DevOps Git repository.\nAn Azure DevOps admin creates the required artifacts to support the integration of Workspace1.\nWhich details do you require to perform the integration?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中配置 Git 集成，特别是与 Azure DevOps Git 存储库的集成。\n需要了解 Git 集成所需的关键信息，包括组织、项目、存储库和分支等。\n2. 选项分析\nA. the organization, project, Git repository, and branch正确。配置 Git 集成时，必须提供组织名称、项目名称、Git 存储库名称以及分支名称。这些是 Git 集成的基本要求。\nB. the personal access token (PAT) for Git authentication and the Git repository URL错误。虽然个人访问令牌 (PAT) 和存储库 URL 是用于身份验证和访问存储库的必要信息，但它们不是配置 Git 集成时的主要要求。\nC. the project, Git repository, branch, and Git folder错误。Git 集成不需要指定 Git 文件夹，文件夹的概念通常用于存储库内部的文件组织，而不是集成配置。\nD. the Git repository URL and the Git folder\n错误。仅提供存储库 URL 和文件夹不足以完成 Git 集成，缺少组织、项目和分支等关键信息。\n3. 我的答案\n我的选择是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中配置 Git 集成，特别是与 Azure DevOps Git 存储库的集成。\n需要了解 Git 集成所需的关键信息，包括组织、项目、存储库和分支等。\n2. 选项分析\nA. the organization, project, Git repository, and branch正确。配置 Git 集成时，必须提供组织名称、项目名称、Git 存储库名称以及分支名称。这些是 Git 集成的基本要求。\nB. the personal access token (PAT) for Git authentication and the Git repository URL错误。虽然个人访问令牌 (PAT) 和存储库 URL 是用于身份验证和访问存储库的必要信息，但它们不是配置 Git 集成时的主要要求。\nC. the project, Git repository, branch, and Git folder错误。Git 集成不需要指定 Git 文件夹，文件夹的概念通常用于存储库内部的文件组织，而不是集成配置。\nD. the Git repository URL and the Git folder\n错误。仅提供存储库 URL 和文件夹不足以完成 Git 集成，缺少组织、项目和分支等关键信息。\n3. 我的答案\n我的选择是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中配置 Git 集成，特别是与 Azure DevOps Git 存储库的集成。\n需要了解 Git 集成所需的关键信息，包括组织、项目、存储库和分支等。\n2. 选项分析\nA. the organization, project, Git repository, and branch正确。配置 Git 集成时，必须提供组织名称、项目名称、Git 存储库名称以及分支名称。这些是 Git 集成的基本要求。\nB. the personal access token (PAT) for Git authentication and the Git repository URL错误。虽然个人访问令牌 (PAT) 和存储库 URL 是用于身份验证和访问存储库的必要信息，但它们不是配置 Git 集成时的主要要求。\nC. the project, Git repository, branch, and Git folder错误。Git 集成不需要指定 Git 文件夹，文件夹的概念通常用于存储库内部的文件组织，而不是集成配置。\nD. the Git repository URL and the Git folder\n错误。仅提供存储库 URL 和文件夹不足以完成 Git 集成，缺少组织、项目和分支等关键信息。\n3. 我的答案\n我的选择是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 48,
  "pdfPage": 125,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 48",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 48",
  "pdfQuestionNum": 48,
  "topic": 1
 },
 {
  "id": "dp700-q049",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "将语义模型刷新活动放在 Notebook 活动之后，并使用 On success 条件链接这些活动。",
    "textEn": "Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.",
    "textZh": "将语义模型刷新活动放在 Notebook 活动之后，并使用 On success 条件链接这些活动。"
   },
   {
    "id": "B",
    "text": "在 Pipeline1 的 Schedule 设置中，将时区设置为 UTC。",
    "textEn": "From the Schedule settings of Pipeline1, set the time zone to UTC.",
    "textZh": "在 Pipeline1 的 Schedule 设置中，将时区设置为 UTC。"
   },
   {
    "id": "C",
    "text": "将 Notebook 活动的 Retry 设置为 2。",
    "textEn": "Set the Retry setting of the Notebook activity to 2.",
    "textZh": "将 Notebook 活动的 Retry 设置为 2。"
   },
   {
    "id": "D",
    "text": "在 Notebook1 的 Schedule 设置中，将时区设置为 UTC。",
    "textEn": "From the Schedule settings of Notebook1, set the time zone to UTC.",
    "textZh": "在 Notebook1 的 Schedule 设置中，将时区设置为 UTC。"
   },
   {
    "id": "E",
    "text": "将语义模型刷新活动的 Retry 设置为 2。",
    "textEn": "Set the Retry setting of the Semantic model refresh activity to 2.",
    "textZh": "将语义模型刷新活动的 Retry 设置为 2。"
   },
   {
    "id": "F",
    "text": "将语义模型刷新活动放在 Notebook 活动之后，并使用 On completion 条件链接这些活动。",
    "textEn": "Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.",
    "textZh": "将语义模型刷新活动放在 Notebook 活动之后，并使用 On completion 条件链接这些活动。"
   }
  ],
  "answer": [
   "A",
   "B",
   "C"
  ],
  "pdfAnswer": [
   "A",
   "B",
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个 lakehouse 和一个名为 Model1 的语义模型。\n你使用一个名为 Notebook1 的 notebook 从外部数据源摄取和转换数据。\n你需要将 Notebook1 作为名为 Pipeline1 的数据管道的一部分来执行。该过程必须满足以下要求：\n·每天在 UTC 时间上午 07:00 运行。\n• 如果 notebook 失败，尝试重试 Notebook1 两档。\n• 在 Notebook1 成功执行后，刷新 Model1。\n你应该执行哪三项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个 lakehouse 和一个名为 Model1 的语义模型。\n你使用一个名为 Notebook1 的 notebook 从外部数据源摄取和转换数据。\n你需要将 Notebook1 作为名为 Pipeline1 的数据管道的一部分来执行。该过程必须满足以下要求：\n·每天在 UTC 时间上午 07:00 运行。\n• 如果 notebook 失败，尝试重试 Notebook1 两档。\n• 在 Notebook1 成功执行后，刷新 Model1。\n你应该执行哪三项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains a lakehouse and a semantic model named Model1.\nYou use a notebook named Notebook1 to ingest and transform data from an external data source.\nYou need to execute Notebook1 as part of a data pipeline named Pipeline1. The process must meet the following requirements:\n• Run daily at 07:00 AM UTC.\n• Attempt to retry Notebook1 twice if the notebook fails.\n• After Notebook1 executes successfully, refresh Model1.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n如何在Fabric工作区中使用数据管道执行Notebook并刷新语义模型。\n数据管道的调度设置和重试机制。\n活动之间的依赖关系设置。\n2. 选项分析\nA. Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.\n正确。根据题目要求，Notebook1执行成功后需要刷新Model1，因此需要使用\"On success\"条件链接活动。\nB. From the Schedule settings of Pipeline1, set the time zone to UTC.\n正确。题目要求每天07:00 AM UTC运行Pipeline1，因此需要在Pipeline1的调度设置中指定时区为UTC。\nC. Set the Retry setting of the Notebook activity to 2.\n正确。题目要求Notebook1失败时重试两次，因此需要将Notebook活动的重试设置为2。\nD. From the Schedule settings of Notebook1, set the time zone to UTC.\n错误。Notebook1是Pipeline1的一部分，其调度由Pipeline1控制，因此不需要单独设置Notebook1的时区。\nE. Set the Retry setting of the Semantic model refresh activity to 2.\n错误。题目没有要求对语义模型刷新活动设置重试机制，因此不需要设置该选项。\nF. Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.\n错误。题目要求Notebook1执行成功后刷新Model1，因此需要使用\"On success\"条件，而不是\"On completion\"条件。\n3. 我选的答案\nA\nB\nC\n4. 官方答案\nA\nB\nC\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n如何在Fabric工作区中使用数据管道执行Notebook并刷新语义模型。\n数据管道的调度设置和重试机制。\n活动之间的依赖关系设置。\n2. 选项分析\nA. Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.\n正确。根据题目要求，Notebook1执行成功后需要刷新Model1，因此需要使用\"On success\"条件链接活动。\nB. From the Schedule settings of Pipeline1, set the time zone to UTC.\n正确。题目要求每天07:00 AM UTC运行Pipeline1，因此需要在Pipeline1的调度设置中指定时区为UTC。\nC. Set the Retry setting of the Notebook activity to 2.\n正确。题目要求Notebook1失败时重试两次，因此需要将Notebook活动的重试设置为2。\nD. From the Schedule settings of Notebook1, set the time zone to UTC.\n错误。Notebook1是Pipeline1的一部分，其调度由Pipeline1控制，因此不需要单独设置Notebook1的时区。\nE. Set the Retry setting of the Semantic model refresh activity to 2.\n错误。题目没有要求对语义模型刷新活动设置重试机制，因此不需要设置该选项。\nF. Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.\n错误。题目要求Notebook1执行成功后刷新Model1，因此需要使用\"On success\"条件，而不是\"On completion\"条件。\n3. 我选的答案\nA\nB\nC\n4. 官方答案\nA\nB\nC\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "DP-700考试辅导 - 题目解析\n1. 考察的知识点\n如何在Fabric工作区中使用数据管道执行Notebook并刷新语义模型。\n数据管道的调度设置和重试机制。\n活动之间的依赖关系设置。\n2. 选项分析\nA. Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.\n正确。根据题目要求，Notebook1执行成功后需要刷新Model1，因此需要使用\"On success\"条件链接活动。\nB. From the Schedule settings of Pipeline1, set the time zone to UTC.\n正确。题目要求每天07:00 AM UTC运行Pipeline1，因此需要在Pipeline1的调度设置中指定时区为UTC。\nC. Set the Retry setting of the Notebook activity to 2.\n正确。题目要求Notebook1失败时重试两次，因此需要将Notebook活动的重试设置为2。\nD. From the Schedule settings of Notebook1, set the time zone to UTC.\n错误。Notebook1是Pipeline1的一部分，其调度由Pipeline1控制，因此不需要单独设置Notebook1的时区。\nE. Set the Retry setting of the Semantic model refresh activity to 2.\n错误。题目没有要求对语义模型刷新活动设置重试机制，因此不需要设置该选项。\nF. Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.\n错误。题目要求Notebook1执行成功后刷新Model1，因此需要使用\"On success\"条件，而不是\"On completion\"条件。\n3. 我选的答案\nA\nB\nC\n4. 官方答案\nA\nB\nC\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 49,
  "pdfPage": 127,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 49",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 49",
  "pdfQuestionNum": 49,
  "topic": 1
 },
 {
  "id": "dp700-q050",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "\"@pipeline().parameters.param1\"",
    "textEn": "\"@pipeline().parameters.param1\"",
    "textZh": "\"@pipeline().parameters.param1\""
   },
   {
    "id": "B",
    "text": "\"@{pipeline().parameters.param1}\"",
    "textEn": "\"@{pipeline().parameters.param1}\"",
    "textZh": "\"@{pipeline().parameters.param1}\""
   },
   {
    "id": "C",
    "text": "\"@{pipeline().parameters.[param1]}\"",
    "textEn": "\"@{pipeline().parameters.[param1]}\"",
    "textZh": "\"@{pipeline().parameters.[param1]}\""
   },
   {
    "id": "D",
    "text": "\"@@{pipeline().parameters.param1}\"",
    "textEn": "\"@@{pipeline().parameters.param1}\"",
    "textZh": "\"@@{pipeline().parameters.param1}\""
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的 lakehouse。\n你计划创建一个名为 Pipeline1 的数据管道，以将数据摄取到 Lakehouse1。你将使用一个名为 param1 的参数将外部值传递到Pipeline1。param1 参数的数据类型为 int。\n你需要确保管道表达式将 param1 返回为 int 值。\n你应该如何指定参数值？",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的 lakehouse。\n你计划创建一个名为 Pipeline1 的数据管道，以将数据摄取到 Lakehouse1。你将使用一个名为 param1 的参数将外部值传递到Pipeline1。param1 参数的数据类型为 int。\n你需要确保管道表达式将 param1 返回为 int 值。\n你应该如何指定参数值？",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nYou plan to create a data pipeline named Pipeline1 to ingest data into Lakehouse1. You will use a parameter named param1 to pass an external value into Pipeline1. The param1 parameter has a data type of int.\nYou need to ensure that the pipeline expression returns param1 as an int value.\nHow should you specify the parameter value?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据管道中如何正确使用表达式来引用参数值。\n重点是理解参数的引用语法以及如何确保返回正确的数据类型。\n2. 选项分析\nA. \"@pipeline().parameters.param1\"\n这是正确的语法，用于引用数据管道的参数值。通过这种方式，参数值会被正确解析为指定的数据类型（在本题中是 int）。\n此选项符合 Microsoft Fabric 的表达式语法。\nB. \"@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@{}\" 这种语法来引用参数。\n因此，这个选项是错误的。\nC. \"@{pipeline().parameters.[param1]}\"\n此选项的语法不正确。Fabric 数据管道表达式不支持 \"[param1]\" 的引用方式。\n因此，这个选项是错误的。\nD. \"@@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@@\" 作为前缀。\n因此，这个选项是错误的。\n3. 我选的答案\nA. \"@pipeline().parameters.param1\"\n4. 官方答案\nA. \"@pipeline().parameters.param1\"\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据管道中如何正确使用表达式来引用参数值。\n重点是理解参数的引用语法以及如何确保返回正确的数据类型。\n2. 选项分析\nA. \"@pipeline().parameters.param1\"\n这是正确的语法，用于引用数据管道的参数值。通过这种方式，参数值会被正确解析为指定的数据类型（在本题中是 int）。\n此选项符合 Microsoft Fabric 的表达式语法。\nB. \"@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@{}\" 这种语法来引用参数。\n因此，这个选项是错误的。\nC. \"@{pipeline().parameters.[param1]}\"\n此选项的语法不正确。Fabric 数据管道表达式不支持 \"[param1]\" 的引用方式。\n因此，这个选项是错误的。\nD. \"@@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@@\" 作为前缀。\n因此，这个选项是错误的。\n3. 我选的答案\nA. \"@pipeline().parameters.param1\"\n4. 官方答案\nA. \"@pipeline().parameters.param1\"\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据管道中如何正确使用表达式来引用参数值。\n重点是理解参数的引用语法以及如何确保返回正确的数据类型。\n2. 选项分析\nA. \"@pipeline().parameters.param1\"\n这是正确的语法，用于引用数据管道的参数值。通过这种方式，参数值会被正确解析为指定的数据类型（在本题中是 int）。\n此选项符合 Microsoft Fabric 的表达式语法。\nB. \"@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@{}\" 这种语法来引用参数。\n因此，这个选项是错误的。\nC. \"@{pipeline().parameters.[param1]}\"\n此选项的语法不正确。Fabric 数据管道表达式不支持 \"[param1]\" 的引用方式。\n因此，这个选项是错误的。\nD. \"@@{pipeline().parameters.param1}\"\n此选项的语法不正确。Fabric 数据管道表达式不使用 \"@@\" 作为前缀。\n因此，这个选项是错误的。\n3. 我选的答案\nA. \"@pipeline().parameters.param1\"\n4. 官方答案\nA. \"@pipeline().parameters.param1\"\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 50,
  "pdfPage": 130,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 50",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 50",
  "pdfQuestionNum": 50,
  "topic": 1
 },
 {
  "id": "dp700-q051",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "notebook",
    "textEn": "notebook",
    "textZh": "notebook"
   },
   {
    "id": "B",
    "text": "warehouse",
    "textEn": "warehouse",
    "textZh": "warehouse"
   },
   {
    "id": "C",
    "text": "Dataflow Gen2 dataflow",
    "textEn": "Dataflow Gen2 dataflow",
    "textZh": "Dataflow Gen2 dataflow"
   },
   {
    "id": "D",
    "text": "data pipeline",
    "textEn": "data pipeline",
    "textZh": "data pipeline"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Lakehouse1 的 lakehouse。Workspace1 包含以下项目：\n• 一个 Dataflow Gen2 数据流，将数据从本地 Microsoft SQL Server 数据库复制到 Lakehouse1\n• 一个 notebook，用于转换文件并将数据加载到 Lakehouse1\n• 一个数据管道，将 CSV 文件加载到 Lakehouse1\n你需要在 Fabric 中开发一个编排解决方案，以便按顺序加载每个项目。该解决方案必须每 15 分钟运行一次。\n你应该使用哪种类型的项目？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Lakehouse1 的 lakehouse。Workspace1 包含以下项目：\n• 一个 Dataflow Gen2 数据流，将数据从本地 Microsoft SQL Server 数据库复制到 Lakehouse1\n• 一个 notebook，用于转换文件并将数据加载到 Lakehouse1\n• 一个数据管道，将 CSV 文件加载到 Lakehouse1\n你需要在 Fabric 中开发一个编排解决方案，以便按顺序加载每个项目。该解决方案必须每 15 分钟运行一次。\n你应该使用哪种类型的项目？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Workspace1 contains the following items:\n• A Dataflow Gen2 dataflow that copies data from an on-premises Microsoft SQL Server database to Lakehouse1\n• A notebook that transforms files and loads the data to Lakehouse1\n• A data pipeline that loads a CSV file to Lakehouse1\nYou need to develop an orchestration solution in Fabric that will load each item one after the other. The solution must be scheduled to run every 15 minutes.\nWhich type of item should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是微软Fabric中数据管道的使用，以及如何实现数据处理任务的编排和调度。\n重点关注数据管道（Data Pipeline）的功能，包括任务的顺序执行和定时调度。\n2. 选项分析\nA. notebook notebook\n错误。Notebook主要用于数据的交互式分析和处理，但它不具备任务编排和调度功能，无法实现多个任务的顺序执行和定时运行。\nB. warehouse warehouse\n错误。Warehouse是用于存储和查询结构化数据的工具，主要用于数据存储和分析，而不是用于任务编排和调度。\nC. Dataflow Gen2 dataflow Dataflow Gen2 dataflow\n错误。Dataflow Gen2主要用于数据的提取、转换和加载（ETL），但它不具备任务编排功能，无法实现多个任务的顺序执行和定时运行。\nD. data pipeline Most Voted data pipeline\n正确。Data Pipeline是专门用于任务编排的工具，可以将多个任务按顺序执行，并支持定时调度功能，满足题目要求。\n3. 我的答案\nD. data pipeline Most Voted data pipeline\n4. 官方答案\nD. data pipeline Most Voted data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Data Pipeline是Fabric中用于任务编排和调度的最佳选择，能够满足题目中“顺序执行”和“每15分钟运行一次”的要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是微软Fabric中数据管道的使用，以及如何实现数据处理任务的编排和调度。\n重点关注数据管道（Data Pipeline）的功能，包括任务的顺序执行和定时调度。\n2. 选项分析\nA. notebook notebook\n错误。Notebook主要用于数据的交互式分析和处理，但它不具备任务编排和调度功能，无法实现多个任务的顺序执行和定时运行。\nB. warehouse warehouse\n错误。Warehouse是用于存储和查询结构化数据的工具，主要用于数据存储和分析，而不是用于任务编排和调度。\nC. Dataflow Gen2 dataflow Dataflow Gen2 dataflow\n错误。Dataflow Gen2主要用于数据的提取、转换和加载（ETL），但它不具备任务编排功能，无法实现多个任务的顺序执行和定时运行。\nD. data pipeline Most Voted data pipeline\n正确。Data Pipeline是专门用于任务编排的工具，可以将多个任务按顺序执行，并支持定时调度功能，满足题目要求。\n3. 我的答案\nD. data pipeline Most Voted data pipeline\n4. 官方答案\nD. data pipeline Most Voted data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Data Pipeline是Fabric中用于任务编排和调度的最佳选择，能够满足题目中“顺序执行”和“每15分钟运行一次”的要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是微软Fabric中数据管道的使用，以及如何实现数据处理任务的编排和调度。\n重点关注数据管道（Data Pipeline）的功能，包括任务的顺序执行和定时调度。\n2. 选项分析\nA. notebook notebook\n错误。Notebook主要用于数据的交互式分析和处理，但它不具备任务编排和调度功能，无法实现多个任务的顺序执行和定时运行。\nB. warehouse warehouse\n错误。Warehouse是用于存储和查询结构化数据的工具，主要用于数据存储和分析，而不是用于任务编排和调度。\nC. Dataflow Gen2 dataflow Dataflow Gen2 dataflow\n错误。Dataflow Gen2主要用于数据的提取、转换和加载（ETL），但它不具备任务编排功能，无法实现多个任务的顺序执行和定时运行。\nD. data pipeline Most Voted data pipeline\n正确。Data Pipeline是专门用于任务编排的工具，可以将多个任务按顺序执行，并支持定时调度功能，满足题目要求。\n3. 我的答案\nD. data pipeline Most Voted data pipeline\n4. 官方答案\nD. data pipeline Most Voted data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Data Pipeline是Fabric中用于任务编排和调度的最佳选择，能够满足题目中“顺序执行”和“每15分钟运行一次”的要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 51,
  "pdfPage": 132,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 51",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 51",
  "pdfQuestionNum": 51,
  "topic": 1
 },
 {
  "id": "dp700-q052",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "将 Notebook_02 的声明移动到有向无环图 (DAG) 定义的底部。",
    "textEn": "Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.",
    "textZh": "将 Notebook_02 的声明移动到有向无环图 (DAG) 定义的底部。"
   },
   {
    "id": "B",
    "text": "为 Notebook_03 的执行添加依赖项。",
    "textEn": "Add dependencies to the execution of Notebook_03.",
    "textZh": "为 Notebook_03 的执行添加依赖项。"
   },
   {
    "id": "C",
    "text": "将有向无环图 (DAG) 定义拆分为三个单独的定义。",
    "textEn": "Split the Directed Acyclic Graph (DAG) definition into three separate definitions.",
    "textZh": "将有向无环图 (DAG) 定义拆分为三个单独的定义。"
   },
   {
    "id": "D",
    "text": "为 Notebook_02 的执行添加依赖项。",
    "textEn": "Add dependencies to the execution of Notebook_02.",
    "textZh": "为 Notebook_02 的执行添加依赖项。"
   },
   {
    "id": "E",
    "text": "将并发性更改为 3。",
    "textEn": "Change the concurrency to 3.",
    "textZh": "将并发性更改为 3。"
   },
   {
    "id": "F",
    "text": "将 Notebook_03 的声明移动到有向无环图 (DAG) 定义的顶部。",
    "textEn": "Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.",
    "textZh": "将 Notebook_03 的声明移动到有向无环图 (DAG) 定义的顶部。"
   }
  ],
  "answer": [
   "D",
   "F"
  ],
  "pdfAnswer": [
   "D",
   "F"
  ],
  "answerSource": "text",
  "stem": "您正在一个工作区中构建一个名为 MasterNotebook1 的 Fabric notebook。MasterNotebook1 包含以下代码。\n```\nDAG = {\n  \"activities\": [\n    {  \"name\": \"execute_notebook_1\",\n        \"path\": \"notebook_01\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"999\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_2\",\n        \"path\": \"notebook_02\",\n        \"timeoutPerCellInSeconds\": 400,\n        \"args\": {\n            \"input_value\": \"888\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    }\n  ],\n  \"timeoutInSeconds\": 43200,\n  \"concurrency\": 0\n}\n\nmssparkutils.notebook.runMultiple(DAG,{\"displayDAGViaGraphviz\": True})\n```\n您需要确保 notebook 按以下顺序执行：\n1. Notebook_03\n2. Notebook_01\n3. Notebook_02\n以下两项操作中，您应该执行哪两项？每个正确答案均为解决方案的一部分。\n注意：每个正确选择值一分。",
  "stemZh": "您正在一个工作区中构建一个名为 MasterNotebook1 的 Fabric notebook。MasterNotebook1 包含以下代码。\n```\nDAG = {\n  \"activities\": [\n    {  \"name\": \"execute_notebook_1\",\n        \"path\": \"notebook_01\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"999\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_2\",\n        \"path\": \"notebook_02\",\n        \"timeoutPerCellInSeconds\": 400,\n        \"args\": {\n            \"input_value\": \"888\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    }\n  ],\n  \"timeoutInSeconds\": 43200,\n  \"concurrency\": 0\n}\n\nmssparkutils.notebook.runMultiple(DAG,{\"displayDAGViaGraphviz\": True})\n```\n您需要确保 notebook 按以下顺序执行：\n1. Notebook_03\n2. Notebook_01\n3. Notebook_02\n以下两项操作中，您应该执行哪两项？每个正确答案均为解决方案的一部分。\n注意：每个正确选择值一分。",
  "stemEn": "You are building a Fabric notebook named MasterNotebook1 in a workspace. MasterNotebook1 contains the following code.\n```\nDAG = {\n  \"activities\": [\n    {  \"name\": \"execute_notebook_1\",\n        \"path\": \"notebook_01\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"999\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_2\",\n        \"path\": \"notebook_02\",\n        \"timeoutPerCellInSeconds\": 400,\n        \"args\": {\n            \"input_value\": \"888\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    },\n    {  \"name\": \"execute_notebook_3\",\n        \"path\": \"notebook_03\",\n        \"timeoutPerCellInSeconds\": 600,\n        \"args\": {\n            \"input_value\": \"777\"\n        },\n        \"retry\": 1,\n        \"retryIntervalInSeconds\": 30\n    }\n  ],\n  \"timeoutInSeconds\": 43200,\n  \"concurrency\": 0\n}\n\nmssparkutils.notebook.runMultiple(DAG,{\"displayDAGViaGraphviz\": True})\n```\nYou need to ensure that the notebooks are executed in the following sequence:\n1. Notebook_03\n2. Notebook_01\n3. Notebook_02\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用有向无环图 (DAG) 来定义和控制多个Notebook的执行顺序。\n涉及DAG的依赖关系设置、Notebook执行顺序调整以及并发性配置。\n2. 选项分析\nA. Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.\n错误：仅仅移动Notebook_02的声明位置并不能确保其执行顺序，因为DAG的执行顺序依赖于明确的依赖关系，而不是声明的顺序。\nB. Add dependencies to the execution of Notebook_03.\n错误：Notebook_03是第一个执行的Notebook，因此不需要为其添加依赖项。\nC. Split the Directed Acyclic Graph (DAG) definition into three separate definitions.\n错误：拆分DAG定义会导致无法使用mssparkutils.notebook.runMultiple来管理Notebook的执行顺序。\nD. Add dependencies to the execution of Notebook_02.\n正确：为Notebook_02添加依赖项可以确保它在Notebook_01之后执行，从而满足题目要求的执行顺序。\nE. Change the concurrency to 3.\n错误：将并发性更改为3会导致所有Notebook同时执行，而不是按照指定的顺序执行。\nF. Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.\n正确：将Notebook_03的声明移动到DAG定义的顶部可以确保它是第一个执行的Notebook。\n3. 我的答案\nD\nF\n4. 官方答案\nD\nF\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用有向无环图 (DAG) 来定义和控制多个Notebook的执行顺序。\n涉及DAG的依赖关系设置、Notebook执行顺序调整以及并发性配置。\n2. 选项分析\nA. Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.\n错误：仅仅移动Notebook_02的声明位置并不能确保其执行顺序，因为DAG的执行顺序依赖于明确的依赖关系，而不是声明的顺序。\nB. Add dependencies to the execution of Notebook_03.\n错误：Notebook_03是第一个执行的Notebook，因此不需要为其添加依赖项。\nC. Split the Directed Acyclic Graph (DAG) definition into three separate definitions.\n错误：拆分DAG定义会导致无法使用mssparkutils.notebook.runMultiple来管理Notebook的执行顺序。\nD. Add dependencies to the execution of Notebook_02.\n正确：为Notebook_02添加依赖项可以确保它在Notebook_01之后执行，从而满足题目要求的执行顺序。\nE. Change the concurrency to 3.\n错误：将并发性更改为3会导致所有Notebook同时执行，而不是按照指定的顺序执行。\nF. Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.\n正确：将Notebook_03的声明移动到DAG定义的顶部可以确保它是第一个执行的Notebook。\n3. 我的答案\nD\nF\n4. 官方答案\nD\nF\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用有向无环图 (DAG) 来定义和控制多个Notebook的执行顺序。\n涉及DAG的依赖关系设置、Notebook执行顺序调整以及并发性配置。\n2. 选项分析\nA. Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.\n错误：仅仅移动Notebook_02的声明位置并不能确保其执行顺序，因为DAG的执行顺序依赖于明确的依赖关系，而不是声明的顺序。\nB. Add dependencies to the execution of Notebook_03.\n错误：Notebook_03是第一个执行的Notebook，因此不需要为其添加依赖项。\nC. Split the Directed Acyclic Graph (DAG) definition into three separate definitions.\n错误：拆分DAG定义会导致无法使用mssparkutils.notebook.runMultiple来管理Notebook的执行顺序。\nD. Add dependencies to the execution of Notebook_02.\n正确：为Notebook_02添加依赖项可以确保它在Notebook_01之后执行，从而满足题目要求的执行顺序。\nE. Change the concurrency to 3.\n错误：将并发性更改为3会导致所有Notebook同时执行，而不是按照指定的顺序执行。\nF. Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.\n正确：将Notebook_03的声明移动到DAG定义的顶部可以确保它是第一个执行的Notebook。\n3. 我的答案\nD\nF\n4. 官方答案\nD\nF\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 52,
  "pdfPage": 134,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 52",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 52",
  "pdfQuestionNum": 52,
  "topic": 1
 },
 {
  "id": "dp700-q053",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Copy_kdi 将首先运行，然后 Execute procedure1 将运行。",
    "textEn": "Copy_kdi will run first, and then Execute procedure1 will run.",
    "textZh": "Copy_kdi 将首先运行，然后 Execute procedure1 将运行。"
   },
   {
    "id": "B",
    "text": "Execute procedure1 将首先运行，然后 Copy_kdi 将运行。",
    "textEn": "Execute procedure1 will run first, and then Copy_kdi will run.",
    "textZh": "Execute procedure1 将首先运行，然后 Copy_kdi 将运行。"
   },
   {
    "id": "C",
    "text": "Execute procedure1 将运行，而 Copy_kdi 将被跳过。",
    "textEn": "Execute procedure1 will run and Copy_kdi will be skipped.",
    "textZh": "Execute procedure1 将运行，而 Copy_kdi 将被跳过。"
   },
   {
    "id": "D",
    "text": "Copy_kdi 将运行，而 Execute procedure1 将被跳过。",
    "textEn": "Copy_kdi will run and Execute procedure1 will be skipped.",
    "textZh": "Copy_kdi 将运行，而 Execute procedure1 将被跳过。"
   },
   {
    "id": "E",
    "text": "两个",
    "textEn": "Both activities will run simultaneously.",
    "textZh": "两个"
   },
   {
    "id": "F",
    "text": "个活动将被跳过。",
    "textEn": "Both activities will be skipped.",
    "textZh": "个活动将被跳过。"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个Fabric 工作区，其中包含一个名为 Pipeline1 的数据管道，如图所示。（单击\"图示\"选项卡。） Pipeline1 下一次运行时会发生什么？\n```\nPipeline canvas: \"Stored procedure\" activity \"Execute procedure1\" (shown deactivated, green check) → \"Copy data\" activity \"Copy_kdi\" (green check).\nOutput tab — Pipeline run ID: 77c397af-ba17-48c2-9242-4b259ecdb3d; Pipeline status: Succeeded\nActivity name | Activity status | Run start | Duration\nCopy_kdi | Succeeded | 8/8/2024, 2:36:27 PM | 33s\nExecute procedure1 | Inactive | 8/8/2024, 2:36:27 PM | Less than 1s\n```",
  "stemZh": "你有一个Fabric 工作区，其中包含一个名为 Pipeline1 的数据管道，如图所示。（单击\"图示\"选项卡。） Pipeline1 下一次运行时会发生什么？\n```\nPipeline canvas: \"Stored procedure\" activity \"Execute procedure1\" (shown deactivated, green check) → \"Copy data\" activity \"Copy_kdi\" (green check).\nOutput tab — Pipeline run ID: 77c397af-ba17-48c2-9242-4b259ecdb3d; Pipeline status: Succeeded\nActivity name | Activity status | Run start | Duration\nCopy_kdi | Succeeded | 8/8/2024, 2:36:27 PM | 33s\nExecute procedure1 | Inactive | 8/8/2024, 2:36:27 PM | Less than 1s\n```",
  "stemEn": "You have a Fabric workspace that contains a data pipeline named Pipeline1 as shown in the exhibit. (Click the Exhibit tab.)\n```\nPipeline canvas: \"Stored procedure\" activity \"Execute procedure1\" (shown deactivated, green check) → \"Copy data\" activity \"Copy_kdi\" (green check).\nOutput tab — Pipeline run ID: 77c397af-ba17-48c2-9242-4b259ecdb3d; Pipeline status: Succeeded\nActivity name | Activity status | Run start | Duration\nCopy_kdi | Succeeded | 8/8/2024, 2:36:27 PM | 33s\nExecute procedure1 | Inactive | 8/8/2024, 2:36:27 PM | Less than 1s\n```\nWhat will occur the next time Pipeline1 runs?",
  "explanation": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是数据管道（Data Pipeline）的运行逻辑，包括活动之间的依赖关系和执行顺序。\n需要理解Fabric工作区中数据管道的活动执行规则，例如活动的触发条件、依赖关系以及跳过逻辑。\n2. 选项分析\nA. Copy_kdi will run first, and then Execute procedure1 will run.\n错误。根据题目描述和数据管道的运行逻辑，活动的执行顺序取决于依赖关系和条件。此选项假设Copy_kdi和Execute procedure1之间存在顺序依赖，但没有证据支持这一点。\nB. Execute procedure1 will run first, and then Copy_kdi will run.\n错误。同样，此选项假设Execute procedure1和Copy_kdi之间存在顺序依赖，但没有证据支持这一点。\nC. Execute procedure1 will run and Copy_kdi will be skipped.\n错误。此选项假设Copy_kdi会被跳过，但没有足够的信息表明Copy_kdi的触发条件未满足。\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n正确。根据官方答案和数据管道的运行逻辑，Copy_kdi的触发条件满足，而Execute procedure1的触发条件未满足，因此Copy_kdi会运行，而Execute procedure1会被跳过。\nE. Both activities will run simultaneously.\n错误。数据管道中的活动通常不会同时运行，除非明确配置为并行执行。题目没有提到并行执行的配置。\nF. Both activities will be skipped.\n错误。此选项假设两个活动的触发条件均未满足，但题目没有提供支持这一假设的信息。\n3. 我的答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n4. 官方答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据数据管道的运行逻辑，活动的执行取决于其触发条件和依赖关系。题目明确指出Copy_kdi会运行，而Execute procedure1会被跳过，因此选择D是正确的。",
  "explanationZh": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是数据管道（Data Pipeline）的运行逻辑，包括活动之间的依赖关系和执行顺序。\n需要理解Fabric工作区中数据管道的活动执行规则，例如活动的触发条件、依赖关系以及跳过逻辑。\n2. 选项分析\nA. Copy_kdi will run first, and then Execute procedure1 will run.\n错误。根据题目描述和数据管道的运行逻辑，活动的执行顺序取决于依赖关系和条件。此选项假设Copy_kdi和Execute procedure1之间存在顺序依赖，但没有证据支持这一点。\nB. Execute procedure1 will run first, and then Copy_kdi will run.\n错误。同样，此选项假设Execute procedure1和Copy_kdi之间存在顺序依赖，但没有证据支持这一点。\nC. Execute procedure1 will run and Copy_kdi will be skipped.\n错误。此选项假设Copy_kdi会被跳过，但没有足够的信息表明Copy_kdi的触发条件未满足。\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n正确。根据官方答案和数据管道的运行逻辑，Copy_kdi的触发条件满足，而Execute procedure1的触发条件未满足，因此Copy_kdi会运行，而Execute procedure1会被跳过。\nE. Both activities will run simultaneously.\n错误。数据管道中的活动通常不会同时运行，除非明确配置为并行执行。题目没有提到并行执行的配置。\nF. Both activities will be skipped.\n错误。此选项假设两个活动的触发条件均未满足，但题目没有提供支持这一假设的信息。\n3. 我的答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n4. 官方答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据数据管道的运行逻辑，活动的执行取决于其触发条件和依赖关系。题目明确指出Copy_kdi会运行，而Execute procedure1会被跳过，因此选择D是正确的。",
  "explanationEn": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是数据管道（Data Pipeline）的运行逻辑，包括活动之间的依赖关系和执行顺序。\n需要理解Fabric工作区中数据管道的活动执行规则，例如活动的触发条件、依赖关系以及跳过逻辑。\n2. 选项分析\nA. Copy_kdi will run first, and then Execute procedure1 will run.\n错误。根据题目描述和数据管道的运行逻辑，活动的执行顺序取决于依赖关系和条件。此选项假设Copy_kdi和Execute procedure1之间存在顺序依赖，但没有证据支持这一点。\nB. Execute procedure1 will run first, and then Copy_kdi will run.\n错误。同样，此选项假设Execute procedure1和Copy_kdi之间存在顺序依赖，但没有证据支持这一点。\nC. Execute procedure1 will run and Copy_kdi will be skipped.\n错误。此选项假设Copy_kdi会被跳过，但没有足够的信息表明Copy_kdi的触发条件未满足。\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n正确。根据官方答案和数据管道的运行逻辑，Copy_kdi的触发条件满足，而Execute procedure1的触发条件未满足，因此Copy_kdi会运行，而Execute procedure1会被跳过。\nE. Both activities will run simultaneously.\n错误。数据管道中的活动通常不会同时运行，除非明确配置为并行执行。题目没有提到并行执行的配置。\nF. Both activities will be skipped.\n错误。此选项假设两个活动的触发条件均未满足，但题目没有提供支持这一假设的信息。\n3. 我的答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n4. 官方答案\nD. Copy_kdi will run and Execute procedure1 will be skipped.\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：根据数据管道的运行逻辑，活动的执行取决于其触发条件和依赖关系。题目明确指出Copy_kdi会运行，而Execute procedure1会被跳过，因此选择D是正确的。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 53,
  "pdfPage": 138,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "引入和转换数据 · 主题 1 · 问题 53",
  "pdfRefEn": "Ingest and transform data · Topic 1 · Question 53",
  "pdfQuestionNum": 53,
  "topic": 1
 },
 {
  "id": "dp700-q054",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "从 Tenant setting 中, 将 Users can synchronize workspace items with their Git repositories 设置为 Enabled。",
    "textEn": "From Tenant setting, set Users can synchronize workspace items with their Git repositories to Enabled.",
    "textZh": "从 Tenant setting 中, 将 Users can synchronize workspace items with their Git repositories 设置为 Enabled。"
   },
   {
    "id": "B",
    "text": "从 Tenant setting 中, 将 Users can sync workspace items with GitHub repositories 设置为 Enabled。",
    "textEn": "From Tenant setting, set Users can sync workspace items with GitHub repositories to Enabled.",
    "textZh": "从 Tenant setting 中, 将 Users can sync workspace items with GitHub repositories 设置为 Enabled。"
   },
   {
    "id": "C",
    "text": "将 WorkspaceA 配置为使用 Premium Per User (PPU) license。",
    "textEn": "Configure WorkspaceA to use a Premium Per User (PPU) license.",
    "textZh": "将 WorkspaceA 配置为使用 Premium Per User (PPU) license。"
   },
   {
    "id": "D",
    "text": "将 WorkspaceA 分配给 Cap1。",
    "textEn": "Assign WorkspaceA to Cap1.",
    "textZh": "将 WorkspaceA 分配给 Cap1。"
   }
  ],
  "answer": [
   "A",
   "D"
  ],
  "pdfAnswer": [
   "A",
   "D"
  ],
  "answerSource": "text",
  "stem": "您需要确保WorkspaceA 可以配置为源代码控制。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemZh": "您需要确保WorkspaceA 可以配置为源代码控制。\n您应该执行哪两项操作？每个正确答案都是解决方案的一部分。\n注意：每个正确选择都值一分。",
  "stemEn": "You need to ensure that WorkspaceA can be configured for source control.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "题目分析与解答\n1. 考察的知识点\nFabric工作区的源代码管理配置。\n如何启用工作区与Git存储库同步的功能。\n工作区与容量的关联配置。\n2. 选项分析\nA. From Tenant setting, set Users can synchronize workspace items with their Git repositories to Enabled.\n正确。启用此设置允许用户将工作区中的项目与Git存储库同步，这是源代码管理的必要步骤。\nB. From Tenant setting, set Users can sync workspace items with GitHub repositories to Enabled.\n错误。选项B提到的是\"GitHub repositories\"，而题目中并未明确要求与GitHub存储库同步，而是泛指Git存储库。\nC. Configure WorkspaceA to use a Premium Per User (PPU) license.\n错误。PPU许可模式与源代码管理无关，题目要求的是配置WorkspaceA以支持源代码管理，而不是更改许可模式。\nD. Assign WorkspaceA to Cap1.\n正确。将工作区分配到容量（Cap1）是启用源代码管理的必要条件，因为Fabric的源代码管理功能需要工作区与容量关联。\n3. 我的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nFabric工作区的源代码管理配置。\n如何启用工作区与Git存储库同步的功能。\n工作区与容量的关联配置。\n2. 选项分析\nA. From Tenant setting, set Users can synchronize workspace items with their Git repositories to Enabled.\n正确。启用此设置允许用户将工作区中的项目与Git存储库同步，这是源代码管理的必要步骤。\nB. From Tenant setting, set Users can sync workspace items with GitHub repositories to Enabled.\n错误。选项B提到的是\"GitHub repositories\"，而题目中并未明确要求与GitHub存储库同步，而是泛指Git存储库。\nC. Configure WorkspaceA to use a Premium Per User (PPU) license.\n错误。PPU许可模式与源代码管理无关，题目要求的是配置WorkspaceA以支持源代码管理，而不是更改许可模式。\nD. Assign WorkspaceA to Cap1.\n正确。将工作区分配到容量（Cap1）是启用源代码管理的必要条件，因为Fabric的源代码管理功能需要工作区与容量关联。\n3. 我的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nFabric工作区的源代码管理配置。\n如何启用工作区与Git存储库同步的功能。\n工作区与容量的关联配置。\n2. 选项分析\nA. From Tenant setting, set Users can synchronize workspace items with their Git repositories to Enabled.\n正确。启用此设置允许用户将工作区中的项目与Git存储库同步，这是源代码管理的必要步骤。\nB. From Tenant setting, set Users can sync workspace items with GitHub repositories to Enabled.\n错误。选项B提到的是\"GitHub repositories\"，而题目中并未明确要求与GitHub存储库同步，而是泛指Git存储库。\nC. Configure WorkspaceA to use a Premium Per User (PPU) license.\n错误。PPU许可模式与源代码管理无关，题目要求的是配置WorkspaceA以支持源代码管理，而不是更改许可模式。\nD. Assign WorkspaceA to Cap1.\n正确。将工作区分配到容量（Cap1）是启用源代码管理的必要条件，因为Fabric的源代码管理功能需要工作区与容量关联。\n3. 我的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 54,
  "pdfPage": 140,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 54",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 54",
  "pdfQuestionNum": 54,
  "topic": 1,
  "caseStudyId": "dp700-case-3",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供有关案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\n·Lakehouse1：将存储来自源的原始数据和清理后的数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。为了填充 silver 层中的 MAR1数据，将需要广泛的数据清理，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作量必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和 dataflows 必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供有关案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\n·Lakehouse1：将存储来自源的原始数据和清理后的数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。为了填充 silver 层中的 MAR1数据，将需要广泛的数据清理，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作量必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和 dataflows 必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q055",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "SELECT",
   "[User1]"
  ],
  "pdfAnswer": [
   "SELECT",
   "[User1]"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "ALTER",
      "en": "ALTER",
      "zh": "ALTER"
     },
     {
      "key": "EXECUTE",
      "en": "EXECUTE",
      "zh": "EXECUTE"
     },
     {
      "key": "READ",
      "en": "READ",
      "zh": "READ"
     },
     {
      "key": "SELECT",
      "en": "SELECT",
      "zh": "SELECT"
     },
     {
      "key": "VIEW",
      "en": "VIEW",
      "zh": "VIEW"
     }
    ],
    "answer": "SELECT"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "User1",
      "en": "User1",
      "zh": "User1"
     },
     {
      "key": "[User1]",
      "en": "[User1]",
      "zh": "[User1]"
     },
     {
      "key": "[user1@contoso.com]",
      "en": "[user1@contoso.com]",
      "zh": "[user1@contoso.com]"
     }
    ],
    "answer": "[User1]"
   }
  ],
  "template": "GRANT {{1}} ON\nCustomers(CustomerID, FirstName, LastName, Phone)\nTO {{2}}",
  "templateEn": "GRANT {{1}} ON\nCustomers(CustomerID, FirstName, LastName, Phone)\nTO {{2}}",
  "templateZh": "GRANT {{1}} ON\nCustomers(CustomerID, FirstName, LastName, Phone)\nTO {{2}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。Warehouse1 包含一个名为 Customer 的表。Customer 表包含以下数据。\n```\nCustomerID | FirstName | LastName | Phone | CreditCard\n1 | John | Doe | 555-123-4567 | 1234567812345670\n2 | Jane | Smith | 555-987-6543 | 8765432187654320\n3 | Michael | Johnson | 555-555-5555 | 1234987654321230\n4 | Emily | Davis | 555-222-3333 | 4321123456789870\n5 | David | Brown | 555-444-5555 | 5678123498761230\n```\n您有一个内部 Microsoft Entra 用户，名为 User1，其电子邮件地址为.\n您需要为 User1 提供对 Customer 表的访问权限。解决方案必须防止 User1 访问 CreditCard 列。\n您应该如何完成该声明？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemZh": "-\n您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。Warehouse1 包含一个名为 Customer 的表。Customer 表包含以下数据。\n```\nCustomerID | FirstName | LastName | Phone | CreditCard\n1 | John | Doe | 555-123-4567 | 1234567812345670\n2 | Jane | Smith | 555-987-6543 | 8765432187654320\n3 | Michael | Johnson | 555-555-5555 | 1234987654321230\n4 | Emily | Davis | 555-222-3333 | 4321123456789870\n5 | David | Brown | 555-444-5555 | 5678123498761230\n```\n您有一个内部 Microsoft Entra 用户，名为 User1，其电子邮件地址为.\n您需要为 User1 提供对 Customer 表的访问权限。解决方案必须防止 User1 访问 CreditCard 列。\n您应该如何完成该声明？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemEn": "-\nYou have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains a table named Customer.\nCustomer contains the following data.\n```\nCustomerID | FirstName | LastName | Phone | CreditCard\n1 | John | Doe | 555-123-4567 | 1234567812345670\n2 | Jane | Smith | 555-987-6543 | 8765432187654320\n3 | Michael | Johnson | 555-555-5555 | 1234987654321230\n4 | Emily | Davis | 555-222-3333 | 4321123456789870\n5 | David | Brown | 555-444-5555 | 5678123498761230\n```\nYou have an internal Microsoft Entra user named User1 that has an email address of user1@contoso.com .\nYou need to provide User1 with access to the Customer table. The solution must prevent User1 from accessing the CreditCard column.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 148 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用SQL权限管理来限制用户访问特定列，同时授予用户对表的部分数据访问权限。\n涉及SQL语句中的权限控制（如GRANT语句）以及用户标识的正确使用。\n2. 选项分析\nGRANT:正确。GRANT语句用于授予用户权限，符合题目要求。\nALTER：错误。ALTER用于修改数据库对象的结构，与授予权限无关。\nEXECUTE：错误。EXECUTE用于授予用户执行存储过程或函数的权限，与表列访问权限无关。\nREAD：错误。READ权限通常用于数据库级别的访问控制，而不是表列级别的权限。\nSELECT：正确。SELECT权限允许用户查询表中的数据，符合题目要求。\nVIEW：错误。VIEW通常用于授予用户查看视图的权限，而不是表列级别的权限。\n3. 我的答案\nSELECT\n[User1]\n4. 官方答案\nSELECT\n[User1]\n5. 比较与分析\n我的答案与官方答案一致。\n原因：SELECT权限是正确的选择，因为它允许用户查询表中的数据，而[User1]是正确的用户标识格式。",
  "explanationZh": "【答案来源】PDF 第 148 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用SQL权限管理来限制用户访问特定列，同时授予用户对表的部分数据访问权限。\n涉及SQL语句中的权限控制（如GRANT语句）以及用户标识的正确使用。\n2. 选项分析\nGRANT:正确。GRANT语句用于授予用户权限，符合题目要求。\nALTER：错误。ALTER用于修改数据库对象的结构，与授予权限无关。\nEXECUTE：错误。EXECUTE用于授予用户执行存储过程或函数的权限，与表列访问权限无关。\nREAD：错误。READ权限通常用于数据库级别的访问控制，而不是表列级别的权限。\nSELECT：正确。SELECT权限允许用户查询表中的数据，符合题目要求。\nVIEW：错误。VIEW通常用于授予用户查看视图的权限，而不是表列级别的权限。\n3. 我的答案\nSELECT\n[User1]\n4. 官方答案\nSELECT\n[User1]\n5. 比较与分析\n我的答案与官方答案一致。\n原因：SELECT权限是正确的选择，因为它允许用户查询表中的数据，而[User1]是正确的用户标识格式。",
  "explanationEn": "[Answer source] PDF p.148 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 55,
  "pdfPage": 147,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 55",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 55",
  "pdfQuestionNum": 55,
  "topic": 1
 },
 {
  "id": "dp700-q056",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "an Azure DevOps pipeline",
    "textEn": "an Azure DevOps pipeline",
    "textZh": "an Azure DevOps pipeline"
   },
   {
    "id": "B",
    "text": "an eventstream",
    "textEn": "an eventstream",
    "textZh": "an eventstream"
   },
   {
    "id": "C",
    "text": "GitHub Actions",
    "textEn": "GitHub Actions",
    "textZh": "GitHub Actions"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "您有一个 Fabric 部署管道，使用了三个工作区，分别是 Dev、Test 和 Prod。\n您需要在部署过程中部署一个 Eventhouse。\n您应该使用什么将 Eventhouse 添加到部署过程中？",
  "stemZh": "您有一个 Fabric 部署管道，使用了三个工作区，分别是 Dev、Test 和 Prod。\n您需要在部署过程中部署一个 Eventhouse。\n您应该使用什么将 Eventhouse 添加到部署过程中？",
  "stemEn": "You have a Fabric deployment pipeline that uses three workspaces named Dev, Test, and Prod.\nYou need to deploy an Eventhouse as part of the deployment process.\nWhat should you use to add the Eventhouse to the deployment process?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Fabric 部署管道中添加 Eventhouse 的正确方法，涉及 Azure DevOps、GitHub Actions 和 Eventstream 的使用。\n2. 独立分析每个选项\nA. an Azure DevOps pipeline\nAzure DevOps pipeline 是一种常用的 Cl/CD 工具，可以用于自动化部署和管理资源。\n在 Fabric 部署管道中，Azure DevOps pipeline 可以帮助实现资源的自动化部署，包括 Eventhouse。\n此选项是正确的，因为它符合题目要求，能够将 Eventhouse 添加到部署过程中。\nB. an eventstream\nEventstream 是一种数据流处理工具，主要用于实时数据处理和传输。\n虽然 Eventstream 可以与 Eventhouse 配合使用，但它并不是用于部署 Eventhouse 的工具。\n此选项是错误的，因为它不符合题目要求，无法直接用于部署 Eventhouse。\nC. GitHub Actions\nGitHub Actions 是一种自动化工作流工具，可以用于 Cl/CD 管道的构建和部署。\n虽然 GitHub Actions 可以实现类似的功能，但题目中明确提到的是 Fabric 部署管道，而 Azure DevOps pipeline 更适合与 Fabric 集成。\n此选项是错误的，因为它不是最佳选择，Azure DevOps pipeline 更符合题目场景。\n3. 我的答案\n我选择的答案是：A. an Azure DevOps pipeline\n4. 官方答案\n官方答案是：A. an Azure DevOps pipeline\n5. 比较与重新思考\n我的答案与官方答案一致，都是A。\n原因是 Azure DevOps pipeline 是最适合用于 Fabric 部署管道的工具，能够满足题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Fabric 部署管道中添加 Eventhouse 的正确方法，涉及 Azure DevOps、GitHub Actions 和 Eventstream 的使用。\n2. 独立分析每个选项\nA. an Azure DevOps pipeline\nAzure DevOps pipeline 是一种常用的 Cl/CD 工具，可以用于自动化部署和管理资源。\n在 Fabric 部署管道中，Azure DevOps pipeline 可以帮助实现资源的自动化部署，包括 Eventhouse。\n此选项是正确的，因为它符合题目要求，能够将 Eventhouse 添加到部署过程中。\nB. an eventstream\nEventstream 是一种数据流处理工具，主要用于实时数据处理和传输。\n虽然 Eventstream 可以与 Eventhouse 配合使用，但它并不是用于部署 Eventhouse 的工具。\n此选项是错误的，因为它不符合题目要求，无法直接用于部署 Eventhouse。\nC. GitHub Actions\nGitHub Actions 是一种自动化工作流工具，可以用于 Cl/CD 管道的构建和部署。\n虽然 GitHub Actions 可以实现类似的功能，但题目中明确提到的是 Fabric 部署管道，而 Azure DevOps pipeline 更适合与 Fabric 集成。\n此选项是错误的，因为它不是最佳选择，Azure DevOps pipeline 更符合题目场景。\n3. 我的答案\n我选择的答案是：A. an Azure DevOps pipeline\n4. 官方答案\n官方答案是：A. an Azure DevOps pipeline\n5. 比较与重新思考\n我的答案与官方答案一致，都是A。\n原因是 Azure DevOps pipeline 是最适合用于 Fabric 部署管道的工具，能够满足题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Fabric 部署管道中添加 Eventhouse 的正确方法，涉及 Azure DevOps、GitHub Actions 和 Eventstream 的使用。\n2. 独立分析每个选项\nA. an Azure DevOps pipeline\nAzure DevOps pipeline 是一种常用的 Cl/CD 工具，可以用于自动化部署和管理资源。\n在 Fabric 部署管道中，Azure DevOps pipeline 可以帮助实现资源的自动化部署，包括 Eventhouse。\n此选项是正确的，因为它符合题目要求，能够将 Eventhouse 添加到部署过程中。\nB. an eventstream\nEventstream 是一种数据流处理工具，主要用于实时数据处理和传输。\n虽然 Eventstream 可以与 Eventhouse 配合使用，但它并不是用于部署 Eventhouse 的工具。\n此选项是错误的，因为它不符合题目要求，无法直接用于部署 Eventhouse。\nC. GitHub Actions\nGitHub Actions 是一种自动化工作流工具，可以用于 Cl/CD 管道的构建和部署。\n虽然 GitHub Actions 可以实现类似的功能，但题目中明确提到的是 Fabric 部署管道，而 Azure DevOps pipeline 更适合与 Fabric 集成。\n此选项是错误的，因为它不是最佳选择，Azure DevOps pipeline 更符合题目场景。\n3. 我的答案\n我选择的答案是：A. an Azure DevOps pipeline\n4. 官方答案\n官方答案是：A. an Azure DevOps pipeline\n5. 比较与重新思考\n我的答案与官方答案一致，都是A。\n原因是 Azure DevOps pipeline 是最适合用于 Fabric 部署管道的工具，能够满足题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 56,
  "pdfPage": 150,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 56",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 56",
  "pdfQuestionNum": 56,
  "topic": 1
 },
 {
  "id": "dp700-q057",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "TRIGGER",
    "textEn": "TRIGGER",
    "textZh": "TRIGGER"
   },
   {
    "id": "B",
    "text": "SCHEMA",
    "textEn": "SCHEMA",
    "textZh": "SCHEMA"
   },
   {
    "id": "C",
    "text": "FUNCTION",
    "textEn": "FUNCTION",
    "textZh": "FUNCTION"
   },
   {
    "id": "D",
    "text": "DATABASE ROLE",
    "textEn": "DATABASE ROLE",
    "textZh": "DATABASE ROLE"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemZh": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemEn": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据仓库中如何实现行级安全性（Row-Level Security, RLS）。\nRLS 的实现通常需要使用特定的对象来定义访问规则，例如函数或角色。\n2. 选项分析\nA. TRIGGER:\n触发器用于在数据库中自动执行某些操作，例如插入、更新或删除时触发逻辑。它与行级安全性无关，因此此选项错误。\nB. SCHEMA:\n模式（Schema）是数据库对象的逻辑分组，用于组织表、视图等对象。它不能直接用于定义行级安全性规则，因此此选项错误。\nC. FUNCTION:\n函数可以用于定义行级安全性规则，通过返回特定用户可以访问的数据集。此选项正确，因为 RLS 通常依赖于函数来实现动态数据过滤。\nD. DATABASE ROLE:\n数据库角色用于定义用户权限，但它不能直接实现行级安全性。行级安全性需要更细粒度的控制，而角色通常是更高层次的权限管理，因此此选项错误。\n3. 我的答案\nC. FUNCTION\n4. 官方答案\nC. FUNCTION\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据仓库中如何实现行级安全性（Row-Level Security, RLS）。\nRLS 的实现通常需要使用特定的对象来定义访问规则，例如函数或角色。\n2. 选项分析\nA. TRIGGER:\n触发器用于在数据库中自动执行某些操作，例如插入、更新或删除时触发逻辑。它与行级安全性无关，因此此选项错误。\nB. SCHEMA:\n模式（Schema）是数据库对象的逻辑分组，用于组织表、视图等对象。它不能直接用于定义行级安全性规则，因此此选项错误。\nC. FUNCTION:\n函数可以用于定义行级安全性规则，通过返回特定用户可以访问的数据集。此选项正确，因为 RLS 通常依赖于函数来实现动态数据过滤。\nD. DATABASE ROLE:\n数据库角色用于定义用户权限，但它不能直接实现行级安全性。行级安全性需要更细粒度的控制，而角色通常是更高层次的权限管理，因此此选项错误。\n3. 我的答案\nC. FUNCTION\n4. 官方答案\nC. FUNCTION\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 数据仓库中如何实现行级安全性（Row-Level Security, RLS）。\nRLS 的实现通常需要使用特定的对象来定义访问规则，例如函数或角色。\n2. 选项分析\nA. TRIGGER:\n触发器用于在数据库中自动执行某些操作，例如插入、更新或删除时触发逻辑。它与行级安全性无关，因此此选项错误。\nB. SCHEMA:\n模式（Schema）是数据库对象的逻辑分组，用于组织表、视图等对象。它不能直接用于定义行级安全性规则，因此此选项错误。\nC. FUNCTION:\n函数可以用于定义行级安全性规则，通过返回特定用户可以访问的数据集。此选项正确，因为 RLS 通常依赖于函数来实现动态数据过滤。\nD. DATABASE ROLE:\n数据库角色用于定义用户权限，但它不能直接实现行级安全性。行级安全性需要更细粒度的控制，而角色通常是更高层次的权限管理，因此此选项错误。\n3. 我的答案\nC. FUNCTION\n4. 官方答案\nC. FUNCTION\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 57,
  "pdfPage": 152,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 57",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 57",
  "pdfQuestionNum": 57,
  "topic": 1
 },
 {
  "id": "dp700-q058",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "SECURITY POLICY",
    "textEn": "SECURITY POLICY",
    "textZh": "SECURITY POLICY"
   },
   {
    "id": "B",
    "text": "TABLE",
    "textEn": "TABLE",
    "textZh": "TABLE"
   },
   {
    "id": "C",
    "text": "TRIGGER",
    "textEn": "TRIGGER",
    "textZh": "TRIGGER"
   },
   {
    "id": "D",
    "text": "STORED PROCEDURE",
    "textEn": "STORED PROCEDURE",
    "textZh": "STORED PROCEDURE"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemZh": "你有一个名为 DW1 的 Fabric 数据仓库。DW1 包含一个存储销售数据的表，并由多个销售代表使用。\n你计划实施行级安全性 (RLS)。\n你需要确保销售代表只能看到各自的数据。\n要实施 RLS，你需要哪个数据仓库对象？",
  "stemEn": "You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives.\nYou plan to implement row-level security (RLS).\nYou need to ensure that the sales representatives can see only their respective data.\nWhich warehouse object do you require to implement RLS?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据仓库中如何实现行级安全（Row-Level Security, RLS）。RLS是一种数据安全机制，用于限制用户只能访问与其权限相关的数据行。\n2. 选项分析\nA. SECURITY POLICY: 正确。实现行级安全需要使用安全策略（Security Policy）。安全策略定义了哪些行可以被特定用户访问，并通过过滤器函数来实现数据的动态筛选。\nB. TABLE: 错误。表是存储数据的对象，但它本身并不提供行级安全功能。RLS需要额外的安全策略来限制访问。\nC. TRIGGER: 错误。触发器用于在表的插入、更新或删除操作时执行特定逻辑，但它不适合用于实现行级安全。\nD. STORED PROCEDURE: 错误。存储过程可以封装查询逻辑，但它无法直接实现行级安全。RLS需要通过安全策略来动态过滤数据。\n3. 我的答案\nA. SECURITY POLICY\n4. 官方答案\nA. SECURITY POLICY\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据仓库中如何实现行级安全（Row-Level Security, RLS）。RLS是一种数据安全机制，用于限制用户只能访问与其权限相关的数据行。\n2. 选项分析\nA. SECURITY POLICY: 正确。实现行级安全需要使用安全策略（Security Policy）。安全策略定义了哪些行可以被特定用户访问，并通过过滤器函数来实现数据的动态筛选。\nB. TABLE: 错误。表是存储数据的对象，但它本身并不提供行级安全功能。RLS需要额外的安全策略来限制访问。\nC. TRIGGER: 错误。触发器用于在表的插入、更新或删除操作时执行特定逻辑，但它不适合用于实现行级安全。\nD. STORED PROCEDURE: 错误。存储过程可以封装查询逻辑，但它无法直接实现行级安全。RLS需要通过安全策略来动态过滤数据。\n3. 我的答案\nA. SECURITY POLICY\n4. 官方答案\nA. SECURITY POLICY\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据仓库中如何实现行级安全（Row-Level Security, RLS）。RLS是一种数据安全机制，用于限制用户只能访问与其权限相关的数据行。\n2. 选项分析\nA. SECURITY POLICY: 正确。实现行级安全需要使用安全策略（Security Policy）。安全策略定义了哪些行可以被特定用户访问，并通过过滤器函数来实现数据的动态筛选。\nB. TABLE: 错误。表是存储数据的对象，但它本身并不提供行级安全功能。RLS需要额外的安全策略来限制访问。\nC. TRIGGER: 错误。触发器用于在表的插入、更新或删除操作时执行特定逻辑，但它不适合用于实现行级安全。\nD. STORED PROCEDURE: 错误。存储过程可以封装查询逻辑，但它无法直接实现行级安全。RLS需要通过安全策略来动态过滤数据。\n3. 我的答案\nA. SECURITY POLICY\n4. 官方答案\nA. SECURITY POLICY\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 58,
  "pdfPage": 154,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 58",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 58",
  "pdfQuestionNum": 58,
  "topic": 1
 },
 {
  "id": "dp700-q059",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "创建视图。",
    "textEn": "Create views.",
    "textZh": "创建视图。"
   },
   {
    "id": "B",
    "text": "修改代理键以使用不同的数据类型。",
    "textEn": "Modify the surrogate keys to use a different data type.",
    "textZh": "修改代理键以使用不同的数据类型。"
   },
   {
    "id": "C",
    "text": "将 MD5 哈希更改为 SHA256。",
    "textEn": "Change the MD5 hash to SHA256.",
    "textZh": "将 MD5 哈希更改为 SHA256。"
   },
   {
    "id": "D",
    "text": "增加容量。",
    "textEn": "Increase the capacity.",
    "textZh": "增加容量。"
   },
   {
    "id": "E",
    "text": "禁用仓库上的 V-Order。",
    "textEn": "Disable V-Order on the warehouse.",
    "textZh": "禁用仓库上的 V-Order。"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "您拥有一个 Fabric F32 容量，其中包含一个工作区。该工作区包含一个名为 DW1 的仓库，该仓库使用 MD5 哈希代理键进行建模。\nDW1 包含一个事实表，该表在过去一年中从 2 亿行增长到 5 亿行。\n您有基于 Direct Lake 的 Microsoft Power BI 报表。这些报表显示了年度同比值。\n用户报告称，部分报表的性能随着时间的推移有所下降，并且某些可视化显示错误。\n您需要解决性能问题。解决方案必须满足以下要求：\n• 提供最佳查询性能。\n• 最小化运营成本。\n您应该怎么做？",
  "stemZh": "您拥有一个 Fabric F32 容量，其中包含一个工作区。该工作区包含一个名为 DW1 的仓库，该仓库使用 MD5 哈希代理键进行建模。\nDW1 包含一个事实表，该表在过去一年中从 2 亿行增长到 5 亿行。\n您有基于 Direct Lake 的 Microsoft Power BI 报表。这些报表显示了年度同比值。\n用户报告称，部分报表的性能随着时间的推移有所下降，并且某些可视化显示错误。\n您需要解决性能问题。解决方案必须满足以下要求：\n• 提供最佳查询性能。\n• 最小化运营成本。\n您应该怎么做？",
  "stemEn": "You have a Fabric F32 capacity that contains a workspace. The workspace contains a warehouse named DW1 that is modelled by using MD5 hash surrogate keys.\nDW1 contains a single fact table that has grown from 200 million rows to 500 million rows during the past year.\nYou have Microsoft Power BI reports that are based on Direct Lake. The reports show year-over-year values.\nUsers report that the performance of some of the reports has degraded over time and some visuals show errors.\nYou need to resolve the performance issues. The solution must meet the following requirements:\n• Provide the best query performance.\n• Minimize operational costs.\nWhich should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库性能优化、Power BI Direct Lake模式的性能问题解决，以及如何在成本和性能之间进行权衡。\n涉及的知识点包括：数据仓库容量管理、数据类型优化、哈希算法选择、V-Order存储格式的影响等。\n2. 独立分析每个选项\nA. 创建视图：创建视图可以帮助简化查询逻辑，但不会直接解决性能问题。视图本质上是查询的抽象层，无法优化底层数据存储或查询性能。因此，此选项错误。\nB. 修改代理键以使用不同的数据类型：代理键的数据类型可能会影响存储效率和查询性能，但在本题中，性能问题主要是由于数据量增长和Direct Lake模式的查询压力，而不是代理键的数据类型。因此，此选项与问题无关，错误。\nC. 将 MD5 哈希更改为 SHA256：更改哈希算法不会显著改善查询性能。SHA256比MD5更安全，但计算成本更高，且与性能问题无关。因此，此选项错误。\nD. 增加容量：增加容量可以直接提升数据仓库的处理能力，解决性能问题，同时满足“提供最佳查询性能”的要求。此选项正确。\nE. 禁用仓库上的 V-Order：V-Order是一种列式存储格式，能够优化查询性能。禁用V-Order会导致查询性能下降，与题目要求相悖。\n3. 我的选择\n我选择的答案是：D. 增加容量\n4. 官方答案\n官方答案是：D. 增加容量\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：增加容量是解决性能问题的直接方法，能够满足题目要求的“提供最佳查询性能”和“最小化运营成本”。其他选项无法有效解决问题或与题目要求不符。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库性能优化、Power BI Direct Lake模式的性能问题解决，以及如何在成本和性能之间进行权衡。\n涉及的知识点包括：数据仓库容量管理、数据类型优化、哈希算法选择、V-Order存储格式的影响等。\n2. 独立分析每个选项\nA. 创建视图：创建视图可以帮助简化查询逻辑，但不会直接解决性能问题。视图本质上是查询的抽象层，无法优化底层数据存储或查询性能。因此，此选项错误。\nB. 修改代理键以使用不同的数据类型：代理键的数据类型可能会影响存储效率和查询性能，但在本题中，性能问题主要是由于数据量增长和Direct Lake模式的查询压力，而不是代理键的数据类型。因此，此选项与问题无关，错误。\nC. 将 MD5 哈希更改为 SHA256：更改哈希算法不会显著改善查询性能。SHA256比MD5更安全，但计算成本更高，且与性能问题无关。因此，此选项错误。\nD. 增加容量：增加容量可以直接提升数据仓库的处理能力，解决性能问题，同时满足“提供最佳查询性能”的要求。此选项正确。\nE. 禁用仓库上的 V-Order：V-Order是一种列式存储格式，能够优化查询性能。禁用V-Order会导致查询性能下降，与题目要求相悖。\n3. 我的选择\n我选择的答案是：D. 增加容量\n4. 官方答案\n官方答案是：D. 增加容量\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：增加容量是解决性能问题的直接方法，能够满足题目要求的“提供最佳查询性能”和“最小化运营成本”。其他选项无法有效解决问题或与题目要求不符。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题主要考察数据仓库性能优化、Power BI Direct Lake模式的性能问题解决，以及如何在成本和性能之间进行权衡。\n涉及的知识点包括：数据仓库容量管理、数据类型优化、哈希算法选择、V-Order存储格式的影响等。\n2. 独立分析每个选项\nA. 创建视图：创建视图可以帮助简化查询逻辑，但不会直接解决性能问题。视图本质上是查询的抽象层，无法优化底层数据存储或查询性能。因此，此选项错误。\nB. 修改代理键以使用不同的数据类型：代理键的数据类型可能会影响存储效率和查询性能，但在本题中，性能问题主要是由于数据量增长和Direct Lake模式的查询压力，而不是代理键的数据类型。因此，此选项与问题无关，错误。\nC. 将 MD5 哈希更改为 SHA256：更改哈希算法不会显著改善查询性能。SHA256比MD5更安全，但计算成本更高，且与性能问题无关。因此，此选项错误。\nD. 增加容量：增加容量可以直接提升数据仓库的处理能力，解决性能问题，同时满足“提供最佳查询性能”的要求。此选项正确。\nE. 禁用仓库上的 V-Order：V-Order是一种列式存储格式，能够优化查询性能。禁用V-Order会导致查询性能下降，与题目要求相悖。\n3. 我的选择\n我选择的答案是：D. 增加容量\n4. 官方答案\n官方答案是：D. 增加容量\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：增加容量是解决性能问题的直接方法，能够满足题目要求的“提供最佳查询性能”和“最小化运营成本”。其他选项无法有效解决问题或与题目要求不符。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 59,
  "pdfPage": 156,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "监视和优化分析解决方案 · 主题 1 · 问题 59",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 1 · Question 59",
  "pdfQuestionNum": 59,
  "topic": 1
 },
 {
  "id": "dp700-q060",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a dbt project",
    "textEn": "a dbt project",
    "textZh": "a dbt project"
   },
   {
    "id": "B",
    "text": "a deployment pipeline",
    "textEn": "a deployment pipeline",
    "textZh": "a deployment pipeline"
   },
   {
    "id": "C",
    "text": "a Python script",
    "textEn": "a Python script",
    "textZh": "a Python script"
   },
   {
    "id": "D",
    "text": "a database project",
    "textEn": "a database project",
    "textZh": "a database project"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n你计划将 Warehouse1 部署到一个名为 Workspace2 的新工作区。\n作为部署过程的一部分，你需要验证 Warehouse1 是否包含无效引用。解决方案必须尽量减少开发工作量，并提供有关无效引用的详细信息。\n你应该使用什么？",
  "stemZh": "你有一个名为 Workspace1 的 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n你计划将 Warehouse1 部署到一个名为 Workspace2 的新工作区。\n作为部署过程的一部分，你需要验证 Warehouse1 是否包含无效引用。解决方案必须尽量减少开发工作量，并提供有关无效引用的详细信息。\n你应该使用什么？",
  "stemEn": "You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1.\nYou plan to deploy Warehouse 1 to a new workspace named Workspace2.\nAs part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort and provide detailed information about the invalid references.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何验证数据仓库的有效性，特别是如何检查数据仓库中是否存在无效引用。\n重点关注工具的选择以及如何最小化开发工作量，同时提供详细的错误信息。\n2. 选项分析\nA. a dbt project\n错误。虽然dbt项目可以用于数据转换和建模，但它主要用于管理SQL代码和数据转换流程，而不是专门用于验证数据仓库中的无效引用。此选项不符合题目要求。\nB. a deployment pipeline\n正确。部署管道（Deployment Pipeline）是Microsoft Fabric中的一个工具，它可以在部署过程中自动检查数据仓库的无效引用，并提供详细的错误信息。这符合题目要求，且最小化了开发工作量。\nC. a Python script\n错误。虽然Python脚本可以编写自定义逻辑来检查无效引用，但这需要额外的开发工作量，不符合题目中“最小化开发工作量”的要求。\nD. a database project\n错误。数据库项目通常用于管理数据库的架构和版本控制，但它不是专门用于验证数据仓库中的无效引用。此选项不符合题目要求。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：部署管道是Microsoft Fabric中专门设计用于在部署过程中检查无效引用的工具，符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何验证数据仓库的有效性，特别是如何检查数据仓库中是否存在无效引用。\n重点关注工具的选择以及如何最小化开发工作量，同时提供详细的错误信息。\n2. 选项分析\nA. a dbt project\n错误。虽然dbt项目可以用于数据转换和建模，但它主要用于管理SQL代码和数据转换流程，而不是专门用于验证数据仓库中的无效引用。此选项不符合题目要求。\nB. a deployment pipeline\n正确。部署管道（Deployment Pipeline）是Microsoft Fabric中的一个工具，它可以在部署过程中自动检查数据仓库的无效引用，并提供详细的错误信息。这符合题目要求，且最小化了开发工作量。\nC. a Python script\n错误。虽然Python脚本可以编写自定义逻辑来检查无效引用，但这需要额外的开发工作量，不符合题目中“最小化开发工作量”的要求。\nD. a database project\n错误。数据库项目通常用于管理数据库的架构和版本控制，但它不是专门用于验证数据仓库中的无效引用。此选项不符合题目要求。\n3. 我的答案\nB. a deployment pipeline\n4. 官方答案\nB. a deployment pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：部署管道是Microsoft Fabric中专门设计用于在部署过程中检查无效引用的工具，符合题目要求。",
  "explanationEn": "Correct Answer: B",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 60,
  "pdfPage": 158,
  "pdfSet": "主题 1",
  "pdfSetEn": "Topic 1",
  "pdfRef": "实施和管理分析解决方案 · 主题 1 · 问题 60",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 1 · Question 60",
  "pdfQuestionNum": 60,
  "topic": 1
 },
 {
  "id": "dp700-q061",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "创建一个 Dataflow Gen2 数据流。",
    "textEn": "Create a Dataflow Gen2 dataflow.",
    "textZh": "创建一个 Dataflow Gen2 数据流。"
   },
   {
    "id": "B",
    "text": "创建-",
    "textEn": "Create a shortcut.",
    "textZh": "创建-"
   },
   {
    "id": "C",
    "text": "启月",
    "textEn": "Enable external data sharing.",
    "textZh": "启月"
   },
   {
    "id": "D",
    "text": "创建-",
    "textEn": "Create a data pipeline.",
    "textZh": "创建-"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "您需要为书评实施解决方案。\n您应该怎么",
  "stemZh": "您需要为书评实施解决方案。\n您应该怎么",
  "stemEn": "You need to implement the solution for the book reviews.\nWhich should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中处理外部数据（如Amazon S3中的数据），并将其集成到Lakehouse中，而无需复制数据。\n重点知识点包括：数据集成、快捷方式（Shortcut）的使用、数据流（Dataflow）的功能以及外部数据共享的配置。\n2. 选项分析\nA. 创建一个 Dataflow Gen2 数据流\n错误。Dataflow Gen2主要用于数据转换和处理，但题目要求将Amazon S3中的数据直接集成到Lakehouse中，而无需复制数据。\nDataflow Gen2无法直接满足这一需求。\nB. 创建一个快捷方式\n正确。Fabric支持通过快捷方式（Shortcut）直接引用外部数据（如Amazon S3中的数据），无需复制数据。这种方式符合题目要求，并且是官方推荐的最佳实践。\nC. 启用外部数据共享\n错误。外部数据共享主要用于跨组织或跨租户的数据共享，而不是用于直接集成外部存储（如Amazon S3）的数据到Lakehouse中。\nD. 创建一个数据管道\n错误。数据管道通常用于数据的提取、转换和加载（ETL），但题目明确要求不复制数据，而是直接引用外部数据。因此，数据管道不适合此场景。\n3. 我选的答案\nB. 创建一个快捷方式\n4. 官方答案\nB. 创建一个快捷方式\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B.创建一个快捷方式。\n原因分析：快捷方式（Shortcut）是Fabric中处理外部数据的最佳解决方案，能够直接引用外部数据而无需复制，完全符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中处理外部数据（如Amazon S3中的数据），并将其集成到Lakehouse中，而无需复制数据。\n重点知识点包括：数据集成、快捷方式（Shortcut）的使用、数据流（Dataflow）的功能以及外部数据共享的配置。\n2. 选项分析\nA. 创建一个 Dataflow Gen2 数据流\n错误。Dataflow Gen2主要用于数据转换和处理，但题目要求将Amazon S3中的数据直接集成到Lakehouse中，而无需复制数据。\nDataflow Gen2无法直接满足这一需求。\nB. 创建一个快捷方式\n正确。Fabric支持通过快捷方式（Shortcut）直接引用外部数据（如Amazon S3中的数据），无需复制数据。这种方式符合题目要求，并且是官方推荐的最佳实践。\nC. 启用外部数据共享\n错误。外部数据共享主要用于跨组织或跨租户的数据共享，而不是用于直接集成外部存储（如Amazon S3）的数据到Lakehouse中。\nD. 创建一个数据管道\n错误。数据管道通常用于数据的提取、转换和加载（ETL），但题目明确要求不复制数据，而是直接引用外部数据。因此，数据管道不适合此场景。\n3. 我选的答案\nB. 创建一个快捷方式\n4. 官方答案\nB. 创建一个快捷方式\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B.创建一个快捷方式。\n原因分析：快捷方式（Shortcut）是Fabric中处理外部数据的最佳解决方案，能够直接引用外部数据而无需复制，完全符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Microsoft Fabric中处理外部数据（如Amazon S3中的数据），并将其集成到Lakehouse中，而无需复制数据。\n重点知识点包括：数据集成、快捷方式（Shortcut）的使用、数据流（Dataflow）的功能以及外部数据共享的配置。\n2. 选项分析\nA. 创建一个 Dataflow Gen2 数据流\n错误。Dataflow Gen2主要用于数据转换和处理，但题目要求将Amazon S3中的数据直接集成到Lakehouse中，而无需复制数据。\nDataflow Gen2无法直接满足这一需求。\nB. 创建一个快捷方式\n正确。Fabric支持通过快捷方式（Shortcut）直接引用外部数据（如Amazon S3中的数据），无需复制数据。这种方式符合题目要求，并且是官方推荐的最佳实践。\nC. 启用外部数据共享\n错误。外部数据共享主要用于跨组织或跨租户的数据共享，而不是用于直接集成外部存储（如Amazon S3）的数据到Lakehouse中。\nD. 创建一个数据管道\n错误。数据管道通常用于数据的提取、转换和加载（ETL），但题目明确要求不复制数据，而是直接引用外部数据。因此，数据管道不适合此场景。\n3. 我选的答案\nB. 创建一个快捷方式\n4. 官方答案\nB. 创建一个快捷方式\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B.创建一个快捷方式。\n原因分析：快捷方式（Shortcut）是Fabric中处理外部数据的最佳解决方案，能够直接引用外部数据而无需复制，完全符合题目要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 1,
  "pdfPage": 160,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 1",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 1",
  "pdfQuestionNum": 1,
  "topic": 2,
  "caseStudyId": "dp700-case-4",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示此案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。 使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格 -\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\n有！\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时：“SQL查询运行失败。\"数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，在上个月期间，当他们早上到达工作时，销售数据未能及时更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 进行流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)处理 SEO 数据。\n使书评在lakehouse 中可用，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示此案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。 使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格 -\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\n有！\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时：“SQL查询运行失败。\"数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，在上个月期间，当他们早上到达工作时，销售数据未能及时更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 进行流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)处理 SEO 数据。\n使书评在lakehouse 中可用，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q062",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "将数据流拆分为两个数据流。",
    "textEn": "Spilt the dataflow into two dataflows.",
    "textZh": "将数据流拆分为两个数据流。"
   },
   {
    "id": "B",
    "text": "为数据流配置计划刷新。",
    "textEn": "Configure scheduled refresh for the dataflow.",
    "textZh": "为数据流配置计划刷新。"
   },
   {
    "id": "C",
    "text": "为数据流配置增量刷新。将\"存储过去的行\"设置为 1个月。",
    "textEn": "Configure incremental refresh for the dataflow. Set Store rows from the past to 1 Month.",
    "textZh": "为数据流配置增量刷新。将\"存储过去的行\"设置为 1个月。"
   },
   {
    "id": "D",
    "text": "为数据流配置增量刷新。将\"刷新过去的行\"设置为 1年。",
    "textEn": "Configure incremental refresh for the dataflow. Set Refresh rows from the past to 1 Year.",
    "textZh": "为数据流配置增量刷新。将\"刷新过去的行\"设置为 1年。"
   },
   {
    "id": "E",
    "text": "为数据流配置增量刷新。将\"刷新过去的行\"设置为1个月。",
    "textEn": "Configure incremental refresh for the dataflow. Set Refresh rows from the past to 1 Month.",
    "textZh": "为数据流配置增量刷新。将\"刷新过去的行\"设置为1个月。"
   }
  ],
  "answer": [
   "E"
  ],
  "pdfAnswer": [
   "E"
  ],
  "answerSource": "text",
  "stem": "您需要解决销售数据问题。解决方案必须尽量减少传输的数据量。\n您应该怎么",
  "stemZh": "您需要解决销售数据问题。解决方案必须尽量减少传输的数据量。\n您应该怎么",
  "stemEn": "You need to resolve the sales data issue. The solution must minimize the amount of data transferred.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流的增量刷新配置，以及如何优化数据处理以减少数据传输量。\n重点在于理解增量刷新如何工作，以及如何根据业务需求设置合适的刷新范围。\n2. 选项分析\nA. 将数据流拆分为两个数据流\n错误原因：拆分数据流可能会增加复杂性，但无法解决数据传输量的问题，也无法优化数据刷新机制。\nB. 为数据流配置计划刷新\n错误原因：计划刷新是全量刷新，无法减少数据传输量，也无法满足\"数据只需刷新过去一个月\"的要求。\nC. 为数据流配置增量刷新。将“存储过去的行”设置为 1 个月\n错误原因：虽然存储过去一个月的数据可以减少存储量，但题目要求的是减少数据传输量，而“存储过去的行”并不影响数据刷新范围。\nD. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 年\n错误原因：刷新过去一年的数据会导致传输量过大，与题目要求的\"只刷新过去一个月的数据\"不符。\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n正确原因：增量刷新可以减少数据传输量，而设置\"刷新过去的行\"为1个月符合题目要求，因为数据只需刷新过去一个月的数据。\n3. 我选的答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n4. 官方答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：增量刷新是解决数据传输量问题的最佳方法，而设置\"刷新过去的行\"为1个月符合业务需求，避免不必要的数据处理。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流的增量刷新配置，以及如何优化数据处理以减少数据传输量。\n重点在于理解增量刷新如何工作，以及如何根据业务需求设置合适的刷新范围。\n2. 选项分析\nA. 将数据流拆分为两个数据流\n错误原因：拆分数据流可能会增加复杂性，但无法解决数据传输量的问题，也无法优化数据刷新机制。\nB. 为数据流配置计划刷新\n错误原因：计划刷新是全量刷新，无法减少数据传输量，也无法满足\"数据只需刷新过去一个月\"的要求。\nC. 为数据流配置增量刷新。将“存储过去的行”设置为 1 个月\n错误原因：虽然存储过去一个月的数据可以减少存储量，但题目要求的是减少数据传输量，而“存储过去的行”并不影响数据刷新范围。\nD. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 年\n错误原因：刷新过去一年的数据会导致传输量过大，与题目要求的\"只刷新过去一个月的数据\"不符。\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n正确原因：增量刷新可以减少数据传输量，而设置\"刷新过去的行\"为1个月符合题目要求，因为数据只需刷新过去一个月的数据。\n3. 我选的答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n4. 官方答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：增量刷新是解决数据传输量问题的最佳方法，而设置\"刷新过去的行\"为1个月符合业务需求，避免不必要的数据处理。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流的增量刷新配置，以及如何优化数据处理以减少数据传输量。\n重点在于理解增量刷新如何工作，以及如何根据业务需求设置合适的刷新范围。\n2. 选项分析\nA. 将数据流拆分为两个数据流\n错误原因：拆分数据流可能会增加复杂性，但无法解决数据传输量的问题，也无法优化数据刷新机制。\nB. 为数据流配置计划刷新\n错误原因：计划刷新是全量刷新，无法减少数据传输量，也无法满足\"数据只需刷新过去一个月\"的要求。\nC. 为数据流配置增量刷新。将“存储过去的行”设置为 1 个月\n迾误原因：虽棺孓储辟去一个月甹数据可以减宆孓储迣，但轞畉要梆甹是减宆数据传输迣，甒“孓储辟去甹行”寈不寸响数据刷新范围。\nD. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 年\n错误原因：刷新过去一年的数据会导致传输量过大，与题目要求的\"只刷新过去一个月的数据\"不符。\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n正确原因：增量刷新可以减少数据传输量，而设置\"刷新过去的行\"为1个月符合题目要求，因为数据只需刷新过去一个月的数据。\n3. 我选的答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n4. 官方答案\nE. 为数据流配置增量刷新。将“刷新过去的行”设置为 1 个月\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：增量刷新是解决数据传输量问题的最佳方法，而设置\"刷新过去的行\"为1个月符合业务需求，避免不必要的数据处理。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 2,
  "pdfPage": 165,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 2",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 2",
  "pdfQuestionNum": 2,
  "topic": 2,
  "caseStudyId": "dp700-case-4",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个使用 Python 进行数据处理的数据工程团队。\n现有环境。\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层级。 gold 层级位于一个禁用了V-Order 的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\n有！\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。进一步调查后，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未是最新的。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最低权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)方式处理 SEO 数据。\n使书评在lakehouse 中可用，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个使用 Python 进行数据处理的数据工程团队。\n现有环境。\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层级。 gold 层级位于一个禁用了V-Order 的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\n有！\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。进一步调查后，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，当他们早上到达工作时，销售数据并未是最新的。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最低权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)方式处理 SEO 数据。\n使书评在lakehouse 中可用，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q063",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "A pipeline Copy activity",
   "A notebook"
  ],
  "pdfAnswer": [
   "A pipeline Copy activity",
   "A notebook"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Bronze 层",
    "labelEn": "Bronze layer",
    "labelZh": "Bronze 层",
    "choices": [
     {
      "key": "A Dataflow Gen2 dataflow",
      "en": "A Dataflow Gen2 dataflow",
      "zh": "A Dataflow Gen2 dataflow"
     },
     {
      "key": "A notebook",
      "en": "A notebook",
      "zh": "A notebook"
     },
     {
      "key": "A pipeline Copy activity",
      "en": "A pipeline Copy activity",
      "zh": "A pipeline Copy activity"
     },
     {
      "key": "A pipeline stored procedure",
      "en": "A pipeline stored procedure",
      "zh": "A pipeline stored procedure"
     }
    ],
    "answer": "A pipeline Copy activity"
   },
   {
    "id": "2",
    "label": "Silver 层",
    "labelEn": "Silver layer",
    "labelZh": "Silver 层",
    "choices": [
     {
      "key": "A Dataflow Gen2 dataflow",
      "en": "A Dataflow Gen2 dataflow",
      "zh": "A Dataflow Gen2 dataflow"
     },
     {
      "key": "A notebook",
      "en": "A notebook",
      "zh": "A notebook"
     },
     {
      "key": "A pipeline Copy activity",
      "en": "A pipeline Copy activity",
      "zh": "A pipeline Copy activity"
     },
     {
      "key": "A pipeline stored procedure",
      "en": "A pipeline stored procedure",
      "zh": "A pipeline stored procedure"
     }
    ],
    "answer": "A notebook"
   }
  ],
  "answerSource": "image",
  "stem": "您需要推荐一种方法将 POS1数据填充到湖仓奖章层。\n您应该为每一层推荐什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您需要推荐一种方法将 POS1数据填充到湖仓奖章层。\n您应该为每一层推荐什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You need to recommend a method to populate the POS1 data to the lakehouse medallion layers.\nWhat should you recommend for each layer? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 174 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Microsoft Fabric中的工具和功能来实现数据的分层处理（Bronze、Silver、Gold层），并遵循Medallion架构。\n涉及的工具包括Dataflow Gen2、Notebook、Pipeline Copy Activity和Pipeline Stored Procedure。\n2. 选项分析\nBronze layer:\nA Dataflow Gen2 dataflow：错误。Dataflow Gen2主要用于数据分析师创建数据流，适合处理轻量级数据转换任务，但不适合直接处理大规模数据的初始加载到Bronze层。\nA notebook：错误。Notebook适合复杂的交互式数据处理和转换任务，但对于Bronze层的初始数据加载，使用Pipeline Copy Activity更高效。\nA pipeline Copy activity:正确。 Pipeline Copy Activity是专门设计用于高效地将数据从源系统加载到目标存储（如Lakehouse Bronze层）的工具，符合题目要求。\nA pipeline stored procedure：错误。 Stored Procedure通常用于数据库操作，而不是直接用于数据加载到Lakehouse的Bronze层。\nSilver layer:\nA Dataflow Gen2 dataflow:错误。虽然Dataflow Gen2可以用于数据转换，但Silver层需要更复杂的清洗和转换操作，Notebook更适合此任务。\nA notebook：正确。Notebook支持Python和SQL，可以执行复杂的数据清洗、去重、处理缺失值等任务，非常适合Silver层的数据处理需求。\nA pipeline Copy activity:错误。Pipeline Copy Activity主要用于数据加载，而不是复杂的数据转换任务。\nA pipeline stored procedure:错误。 Stored Procedure适合数据库操作，不适合Silver层的复杂数据转换任务。\n3. 我选的答案\nBronze layer: A pipeline Copy activity\nSilver layer: A notebook\n4. 官方答案\nBronze layer: A pipeline Copy activity\nSilver layer: A notebook\n5. 与官方答案的比较\n我的答案与官方答案一致。\n理由：Bronze层需要高效的数据加载工具，Pipeline Copy Activity是最佳选择；Silver层需要复杂的数据清洗和转换，Notebook能够满足需求。",
  "explanationZh": "【答案来源】PDF 第 174 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Microsoft Fabric中的工具和功能来实现数据的分层处理（Bronze、Silver、Gold层），并遵循Medallion架构。\n涉及的工具包括Dataflow Gen2、Notebook、Pipeline Copy Activity和Pipeline Stored Procedure。\n2. 选项分析\nBronze layer:\nA Dataflow Gen2 dataflow：错误。Dataflow Gen2主要用于数据分析师创建数据流，适合处理轻量级数据转换任务，但不适合直接处理大规模数据的初始加载到Bronze层。\nA notebook：错误。Notebook适合复杂的交互式数据处理和转换任务，但对于Bronze层的初始数据加载，使用Pipeline Copy Activity更高效。\nA pipeline Copy activity:正确。 Pipeline Copy Activity是专门设计用于高效地将数据从源系统加载到目标存储（如Lakehouse Bronze层）的工具，符合题目要求。\nA pipeline stored procedure：错误。 Stored Procedure通常用于数据库操作，而不是直接用于数据加载到Lakehouse的Bronze层。\nSilver layer:\nA Dataflow Gen2 dataflow:错误。虽然Dataflow Gen2可以用于数据转换，但Silver层需要更复杂的清洗和转换操作，Notebook更适合此任务。\nA notebook：正确。Notebook支持Python和SQL，可以执行复杂的数据清洗、去重、处理缺失值等任务，非常适合Silver层的数据处理需求。\nA pipeline Copy activity:错误。Pipeline Copy Activity主要用于数据加载，而不是复杂的数据转换任务。\nA pipeline stored procedure:错误。 Stored Procedure适合数据库操作，不适合Silver层的复杂数据转换任务。\n3. 我选的答案\nBronze layer: A pipeline Copy activity\nSilver layer: A notebook\n4. 官方答案\nBronze layer: A pipeline Copy activity\nSilver layer: A notebook\n5. 与官方答案的比较\n我的答案与官方答案一致。\n理由：Bronze层需要高效的数据加载工具，Pipeline Copy Activity是最佳选择；Silver层需要复杂的数据清洗和转换，Notebook能够满足需求。",
  "explanationEn": "[Answer source] PDF p.174 answer image",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 3,
  "pdfPage": 170,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 3",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 3",
  "pdfQuestionNum": 3,
  "topic": 2,
  "caseStudyId": "dp700-case-5",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个湖仓：\nLakehouse1：将存储来自源的原始数据和清洗数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的湖仓必须遵循使用以下三个层的奖章架构：铜、银和金。为了填充银层中的 MAR1 数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的铜层。\n在数据落入铜层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须再次尝试连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。金层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从金层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n数据分析师只能对金层中的 Delta 表具有读取访问权限。\n数据分析师不得访问铜层和银层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个湖仓：\nLakehouse1：将存储来自源的原始数据和清洗数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的湖仓必须遵循使用以下三个层的奖章架构：铜、银和金。为了填充银层中的 MAR1 数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的铜层。\n在数据落入铜层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须再次尝试连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。金层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从金层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n数据分析师只能对金层中的 Delta 表具有读取访问权限。\n数据分析师不得访问铜层和银层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q064",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "创建一个工作区身份并为 notebooks 启用高并发。",
    "textEn": "Create a workspace identity and enable high concurrency for the notebooks.",
    "textZh": "创建一个工作区身份并为 notebooks 启用高并发。"
   },
   {
    "id": "B",
    "text": "创建一个快捷方式并确保为工作区禁用缓存。",
    "textEn": "Create a shortcut and ensure that caching is disabled for the workspace.",
    "textZh": "创建一个快捷方式并确保为工作区禁用缓存。"
   },
   {
    "id": "C",
    "text": "创建一个工作区身份并在数据管道中使用该身份。",
    "textEn": "Create a workspace identity and use the identity in a data pipeline.",
    "textZh": "创建一个工作区身份并在数据管道中使用该身份。"
   },
   {
    "id": "D",
    "text": "创建一个快捷方式并确保为工作区启用缓存。",
    "textEn": "Create a shortcut and ensure that caching is enabled for the workspace.",
    "textZh": "创建一个快捷方式并确保为工作区启用缓存。"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "您需要确保使用 Amazon S3 存储桶中的数据符合技术要求。\n您应该怎么",
  "stemZh": "您需要确保使用 Amazon S3 存储桶中的数据符合技术要求。\n您应该怎么",
  "stemEn": "You need to ensure that usage of the data in the Amazon S3 bucket meets the technical requirements.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nFabric中的数据访问与跨云数据集成。\n如何最小化跨云数据访问的成本（如Amazon S3到Fabric）。\n如何配置工作区以满足技术要求（如缓存设置）。\n2. 选项分析\nA. 创建一个工作区身份并为 notebooks 启用高并发。\n错误：高并发设置与跨云数据访问的成本优化无关。\n工作区身份虽然可以用于访问外部数据，但题目要求是最小化跨云数据访问成本，而不是提高并发性能。\nB. 创建一个快捷方式并确保为工作区禁用缓存。\n错误：禁用缓存会导致每次访问数据时都需要重新读取源数据，这会增加跨云数据访问的成本。\n题目要求是最小化跨云数据访问的成本，因此禁用缓存不符合要求。\nC. 创建一个工作区身份并在数据管道中使用该身份。\n错误：虽然工作区身份可以用于数据管道的访问，但它与跨云数据访问成本优化无直接关系。\n题目要求是通过技术手段（如缓存）来减少跨云数据访问的成本，而不是仅仅使用身份进行访问。\nD. 创建一个快捷方式并确保为工作区启用缓存。\n正确：启用缓存可以减少跨云数据访问的频率，从而最小化数据访问的成本。\n创建快捷方式可以直接引用Amazon S3中的数据，而无需将数据复制到Fabric的存储中，符合题目要求。\n3. 我选的答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n4. 官方答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：启用缓存和创建快捷方式是最符合题目技术要求的解决方案，可以最小化跨云数据访问的成本，同时避免保存原始数据副本。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nFabric中的数据访问与跨云数据集成。\n如何最小化跨云数据访问的成本（如Amazon S3到Fabric）。\n如何配置工作区以满足技术要求（如缓存设置）。\n2. 选项分析\nA. 创建一个工作区身份并为 notebooks 启用高并发。\n错误：高并发设置与跨云数据访问的成本优化无关。\n工作区身份虽然可以用于访问外部数据，但题目要求是最小化跨云数据访问成本，而不是提高并发性能。\nB. 创建一个快捷方式并确保为工作区禁用缓存。\n错误：禁用缓存会导致每次访问数据时都需要重新读取源数据，这会增加跨云数据访问的成本。\n题目要求是最小化跨云数据访问的成本，因此禁用缓存不符合要求。\nC. 创建一个工作区身份并在数据管道中使用该身份。\n错误：虽然工作区身份可以用于数据管道的访问，但它与跨云数据访问成本优化无直接关系。\n题目要求是通过技术手段（如缓存）来减少跨云数据访问的成本，而不是仅仅使用身份进行访问。\nD. 创建一个快捷方式并确保为工作区启用缓存。\n正确：启用缓存可以减少跨云数据访问的频率，从而最小化数据访问的成本。\n创建快捷方式可以直接引用Amazon S3中的数据，而无需将数据复制到Fabric的存储中，符合题目要求。\n3. 我选的答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n4. 官方答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：启用缓存和创建快捷方式是最符合题目技术要求的解决方案，可以最小化跨云数据访问的成本，同时避免保存原始数据副本。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nFabric中的数据访问与跨云数据集成。\n如何最小化跨云数据访问的成本（如Amazon S3到Fabric）。\n如何配置工作区以满足技术要求（如缓存设置）。\n2. 选项分析\nA. 创建一个工作区身份并为 notebooks 启用高并发。\n错误：高并发设置与跨云数据访问的成本优化无关。\n工作区身份虽然可以用于访问外部数据，但题目要求是最小化跨云数据访问成本，而不是提高并发性能。\nB. 创建一个快捷方式并确保为工作区禁用缓存。\n错误：禁用缓存会导致每次访问数据时都需要重新读取源数据，这会增加跨云数据访问的成本。\n题目要求是最小化跨云数据访问的成本，因此禁用缓存不符合要求。\nC. 创建一个工作区身份并在数据管道中使用该身份。\n错误：虽然工作区身份可以用于数据管道的访问，但它与跨云数据访问成本优化无直接关系。\n题目要求是通过技术手段（如缓存）来减少跨云数据访问的成本，而不是仅仅使用身份进行访问。\nD. 创建一个快捷方式并确保为工作区启用缓存。\n正确：启用缓存可以减少跨云数据访问的频率，从而最小化数据访问的成本。\n创建快捷方式可以直接引用Amazon S3中的数据，而无需将数据复制到Fabric的存储中，符合题目要求。\n3. 我选的答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n4. 官方答案\nD.创建一个快捷方式并确保为工作区启用缓存。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：启用缓存和创建快捷方式是最符合题目技术要求的解决方案，可以最小化跨云数据访问的成本，同时避免保存原始数据副本。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 4,
  "pdfPage": 176,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 4",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 4",
  "pdfQuestionNum": 4,
  "topic": 2,
  "caseStudyId": "dp700-case-5",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q065",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "INNER JOIN",
   "INNER JOIN",
   "IsActive = 1;"
  ],
  "pdfAnswer": [
   "INNER JOIN",
   "INNER JOIN",
   "IsActive = 1;"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "FULL JOIN",
      "en": "FULL JOIN",
      "zh": "FULL JOIN"
     },
     {
      "key": "INNER JOIN",
      "en": "INNER JOIN",
      "zh": "INNER JOIN"
     },
     {
      "key": "LEFT ANTI JOIN",
      "en": "LEFT ANTI JOIN",
      "zh": "LEFT ANTI JOIN"
     },
     {
      "key": "LEFT OUTER JOIN",
      "en": "LEFT OUTER JOIN",
      "zh": "LEFT OUTER JOIN"
     },
     {
      "key": "OUTER JOIN",
      "en": "OUTER JOIN",
      "zh": "OUTER JOIN"
     }
    ],
    "answer": "INNER JOIN"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "FULL JOIN",
      "en": "FULL JOIN",
      "zh": "FULL JOIN"
     },
     {
      "key": "INNER JOIN",
      "en": "INNER JOIN",
      "zh": "INNER JOIN"
     },
     {
      "key": "LEFT ANTI JOIN",
      "en": "LEFT ANTI JOIN",
      "zh": "LEFT ANTI JOIN"
     },
     {
      "key": "LEFT OUTER JOIN",
      "en": "LEFT OUTER JOIN",
      "zh": "LEFT OUTER JOIN"
     },
     {
      "key": "OUTER JOIN",
      "en": "OUTER JOIN",
      "zh": "OUTER JOIN"
     }
    ],
    "answer": "INNER JOIN"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "CategoryID = 1;",
      "en": "CategoryID = 1;",
      "zh": "CategoryID = 1;"
     },
     {
      "key": "CategoryName is not null;",
      "en": "CategoryName is not null;",
      "zh": "CategoryName is not null;"
     },
     {
      "key": "IsActive = 1;",
      "en": "IsActive = 1;",
      "zh": "IsActive = 1;"
     },
     {
      "key": "IsActive is not null;",
      "en": "IsActive is not null;",
      "zh": "IsActive is not null;"
     },
     {
      "key": "ProductNumber is not null;",
      "en": "ProductNumber is not null;",
      "zh": "ProductNumber is not null;"
     },
     {
      "key": "SubCategoryID = 1;",
      "en": "SubCategoryID = 1;",
      "zh": "SubCategoryID = 1;"
     },
     {
      "key": "SubCategoryName is not null;",
      "en": "SubCategoryName is not null;",
      "zh": "SubCategoryName is not null;"
     }
    ],
    "answer": "IsActive = 1;"
   }
  ],
  "template": "SELECT ProductID, ProductNumber, ProductName, ModelName, SubCategoryName, CategoryName\nFROM ContosoLake.Products p\n{{1}} ContosoLake.ProductSubCategories s ON p.SubCategoryID = s.SubCategoryID\n{{2}} ContosoLake.ProductCategories c ON c.CategoryID = s.CategoryID\nWHERE {{3}}",
  "templateEn": "SELECT ProductID, ProductNumber, ProductName, ModelName, SubCategoryName, CategoryName\nFROM ContosoLake.Products p\n{{1}} ContosoLake.ProductSubCategories s ON p.SubCategoryID = s.SubCategoryID\n{{2}} ContosoLake.ProductCategories c ON c.CategoryID = s.CategoryID\nWHERE {{3}}",
  "templateZh": "SELECT ProductID, ProductNumber, ProductName, ModelName, SubCategoryName, CategoryName\nFROM ContosoLake.Products p\n{{1}} ContosoLake.ProductSubCategories s ON p.SubCategoryID = s.SubCategoryID\n{{2}} ContosoLake.ProductCategories c ON c.CategoryID = s.CategoryID\nWHERE {{3}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "您需要仓\n您应该如何完成 Apache Spark SQL代码？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemZh": "您需要仓\n您应该如何完成 Apache Spark SQL代码？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemEn": "You need to create the product dimension.\nHow should you complete the Apache Spark SQL code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 185 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Apache Spark SQL进行数据查询和过滤，特别是如何构建维度表（Product Dimension）并应用正确的过滤条件和连接方式。\n涉及的知识点包括SQL JOIN操作、WHERE条件过滤以及数据清理和维度建模的基本原则。\n2. 选项分析\nINNER JOIN：正确。INNER JOIN用于连接两个表，并仅返回两个表中匹配的记录。根据题目要求，产品表需要与子类别表和类别表进行连接，且只保留匹配的记录，因此使用INNER JOIN是正确的选择。\nCategorylD =1：错误。题目没有要求仅筛选CategorylD为1的记录，因此这个条件不符合要求。\nCategoryName is not null:错误。题目要求过滤掉没有分配产品的类别和子类别，但没有明确要求CategoryName必须非空，因此这个条件不符合要求。\nIsActive=1：正确。题目明确要求仅包含活跃产品（IsActive值为1），因此这个条件是正确的选择。\nIsActive is not null:错误。题目没有要求检查lsActive是否为非空，而是明确要求IsActive值为1，因此这个条件不符合要求。\nProductNumber is not null:错误。题目没有提到需要检查ProductNumber是否为非空，因此这个条件不符合要求。\nSubCategorylD =1：错误。题目没有要求仅筛选SubCategoryID为1的记录，因此这个条件不符合要求。\nSubCategoryName is not null: 错误。题目没有明确要求SubCategoryName必须非空，因此这个条件不符合要求。\n3. 我选的答案\nINNER JOIN\nINNER JOIN\nIsActive = 1\n4. 官方答案\nINNER JOIN\nINNER JOIN\nIsActive = 1\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有任何不同，因此无需重新思考或调整答案。",
  "explanationZh": "【答案来源】PDF 第 185 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Apache Spark SQL进行数据查询和过滤，特别是如何构建维度表（Product Dimension）并应用正确的过滤条件和连接方式。\n涉及的知识点包括SQL JOIN操作、WHERE条件过滤以及数据清理和维度建模的基本原则。\n2. 选项分析\nINNER JOIN：正确。INNER JOIN用于连接两个表，并仅返回两个表中匹配的记录。根据题目要求，产品表需要与子类别表和类别表进行连接，且只保留匹配的记录，因此使用INNER JOIN是正确的选择。\nCategorylD =1：错误。题目没有要求仅筛选CategorylD为1的记录，因此这个条件不符合要求。\nCategoryName is not null:错误。题目要求过滤掉没有分配产品的类别和子类别，但没有明确要求CategoryName必须非空，因此这个条件不符合要求。\nIsActive=1：正确。题目明确要求仅包含活跃产品（IsActive值为1），因此这个条件是正确的选择。\nIsActive is not null:错误。题目没有要求检查lsActive是否为非空，而是明确要求IsActive值为1，因此这个条件不符合要求。\nProductNumber is not null:错误。题目没有提到需要检查ProductNumber是否为非空，因此这个条件不符合要求。\nSubCategorylD =1：错误。题目没有要求仅筛选SubCategoryID为1的记录，因此这个条件不符合要求。\nSubCategoryName is not null: 错误。题目没有明确要求SubCategoryName必须非空，因此这个条件不符合要求。\n3. 我选的答案\nINNER JOIN\nINNER JOIN\nIsActive = 1\n4. 官方答案\nINNER JOIN\nINNER JOIN\nIsActive = 1\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有任何不同，因此无需重新思考或调整答案。",
  "explanationEn": "[Answer source] PDF p.185 answer image",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 5,
  "pdfPage": 181,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 5",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 5",
  "pdfQuestionNum": 5,
  "topic": 2,
  "caseStudyId": "dp700-case-5",
  "caseStudyText": "热点 -\n案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回到问题。\n概述。\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS) 痉统，该痉统使用 Azure 虚拟机上的 SQL Server 孩例，与 Fabric 位于同一个 Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销寒用程序。MAR1 有七个孩体。这些孩体包含与电子邮件打寡率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。\nContoso 计划创建以下两个湖仓：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。\n新的湖仓必须遵循分层架构，使用以下三个层级：青铜层、白银层和黄金层。为了填充白银层中的 MAR1 数据，将需要广泛的数据清理，包括去重、处理缺失值以及标准化大小写。\n每个层级必须完全填充后才能进入下一个层级。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落地到 Lakehouse1 的青铜层。\n在数据落地到青铜层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须重新尝试连接。\n湖仓、数据管道和笔记本必须存储在 WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。\n在POS1产品数据中，ProductID值是唯一的。黄金层中的产品维度必须仅包含产品列表中的活跃产品。活跃产品由IsActive 值为1标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从黄金层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n数据分析师只能对黄金层中的 Delta 表具有读取访问权限。\n数据分析师不得访问青铜层和白银层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "热点 -\n案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回到问题。\n概述。\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS) 痉统，该痉统使用 Azure 虚拟机上的 SQL Server 孩例，与 Fabric 位于同一个 Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销寒用程序。MAR1 有七个孩体。这些孩体包含与电子邮件打寡率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。\nContoso 计划创建以下两个湖仓：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。\n新的湖仓必须遵循分层架构，使用以下三个层级：青铜层、白银层和黄金层。为了填充白银层中的 MAR1 数据，将需要广泛的数据清理，包括去重、处理缺失值以及标准化大小写。\n每个层级必须完全填充后才能进入下一个层级。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落地到 Lakehouse1 的青铜层。\n在数据落地到青铜层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须重新尝试连接。\n湖仓、数据管道和笔记本必须存储在 WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。\n在POS1产品数据中，ProductID值是唯一的。黄金层中的产品维度必须仅包含产品列表中的活跃产品。活跃产品由IsActive 值为1标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从黄金层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n数据分析师只能对黄金层中的 Delta 表具有读取访问权限。\n数据分析师不得访问青铜层和白银层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q066",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "ForEach",
    "textEn": "ForEach",
    "textZh": "ForEach"
   },
   {
    "id": "B",
    "text": "Copy data",
    "textEn": "Copy data",
    "textZh": "Copy data"
   },
   {
    "id": "C",
    "text": "WebHook",
    "textEn": "WebHook",
    "textZh": "WebHook"
   },
   {
    "id": "D",
    "text": "Stored procedure",
    "textEn": "Stored procedure",
    "textZh": "Stored procedure"
   }
  ],
  "answer": [
   "A",
   "B"
  ],
  "pdfAnswer": [
   "A",
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：每个正确选择都值一分。",
  "stemZh": "注意：每个正确选择都值一分。",
  "stemEn": "You need to populate the MAR1 data in the bronze layer.\nWhich two types of activities should you include in the pipeline? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何设计和实现数据管道以完成数据的导入和处理。\n重点关注数据管道的活动类型选择，尤其是如何处理REST AP数据源和并行数据导入。\n2. 选项分析\nA. ForEach:\n正确。ForEach活动允许对多个数据源或多个API端点进行并行处理，这符合题目要求\"数据导入必须尽可能同时运行\"。\nB. Copy data:\n正确。Copy data活动是用于从源系统导入数据到目标存储的标准活动，支持多种数据源，包括REST API和Delta格式。这符合题目要求\"开发工作量最小并使用内置连接导入源数据\"。\nC. WebHook:\n错误。WebHook活动通常用于触发外部服务或接收外部事件通知，而不是用于数据导入或并行处理，无法满足题目要求。\nD. Stored procedure:\n错误。Stored procedure活动用于执行数据库中的存储过程，但题目中数据源是REST API和文件存储，存储过程无法直接处理这些数据源。\n3. 我的答案\nA. ForEach\nB. Copy data\n4. 官方答案\nA. ForEach\nB. Copy data\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何设计和实现数据管道以完成数据的导入和处理。\n重点关注数据管道的活动类型选择，尤其是如何处理REST AP数据源和并行数据导入。\n2. 选项分析\nA. ForEach:\n正确。ForEach活动允许对多个数据源或多个API端点进行并行处理，这符合题目要求\"数据导入必须尽可能同时运行\"。\nB. Copy data:\n正确。Copy data活动是用于从源系统导入数据到目标存储的标准活动，支持多种数据源，包括REST API和Delta格式。这符合题目要求\"开发工作量最小并使用内置连接导入源数据\"。\nC. WebHook:\n错误。WebHook活动通常用于触发外部服务或接收外部事件通知，而不是用于数据导入或并行处理，无法满足题目要求。\nD. Stored procedure:\n错误。Stored procedure活动用于执行数据库中的存储过程，但题目中数据源是REST API和文件存储，存储过程无法直接处理这些数据源。\n3. 我的答案\nA. ForEach\nB. Copy data\n4. 官方答案\nA. ForEach\nB. Copy data\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何设计和实现数据管道以完成数据的导入和处理。\n重点关注数据管道的活动类型选择，尤其是如何处理REST AP数据源和并行数据导入。\n2. 选项分析\nA. ForEach:\n正确。ForEach活动允许对多个数据源或多个API端点进行并行处理，这符合题目要求\"数据导入必须尽可能同时运行\"。\nB. Copy data:\n正确。Copy data活动是用于从源系统导入数据到目标存储的标准活动，支持多种数据源，包括REST API和Delta格式。这符合题目要求\"开发工作量最小并使用内置连接导入源数据\"。\nC. WebHook:\n错误。WebHook活动通常用于触发外部服务或接收外部事件通知，而不是用于数据导入或并行处理，无法满足题目要求。\nD. Stored procedure:\n错误。Stored procedure活动用于执行数据库中的存储过程，但题目中数据源是REST API和文件存储，存储过程无法直接处理这些数据源。\n3. 我的答案\nA. ForEach\nB. Copy data\n4. 官方答案\nA. ForEach\nB. Copy data\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 6,
  "pdfPage": 187,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 6",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 6",
  "pdfQuestionNum": 6,
  "topic": 2,
  "caseStudyId": "dp700-case-5",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是界同的。当您准备好回疫问题时，单击“问题”按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。有12个文件，大小从300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上无关紧要，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。\n您需要将 MAR1数据填充到 bronze 层。\n在管道中应包括哪两种类型的活动？每个正确答案均构成解决方案的一部分。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是界同的。当您准备好回疫问题时，单击“问题”按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。有12个文件，大小从300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。这些数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上无关紧要，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。\n您需要将 MAR1数据填充到 bronze 层。\n在管道中应包括哪两种类型的活动？每个正确答案均构成解决方案的一部分。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q067",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "CAST",
   "LEFT OUTER JOIN",
   "HAVING"
  ],
  "pdfAnswer": [
   "CAST",
   "LEFT OUTER JOIN",
   "HAVING"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "CAST",
      "en": "CAST",
      "zh": "CAST"
     },
     {
      "key": "CONVERT",
      "en": "CONVERT",
      "zh": "CONVERT"
     },
     {
      "key": "REPLACE",
      "en": "REPLACE",
      "zh": "REPLACE"
     },
     {
      "key": "SUBSTRING",
      "en": "SUBSTRING",
      "zh": "SUBSTRING"
     }
    ],
    "answer": "CAST"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "CROSS JOIN",
      "en": "CROSS JOIN",
      "zh": "CROSS JOIN"
     },
     {
      "key": "INNER JOIN",
      "en": "INNER JOIN",
      "zh": "INNER JOIN"
     },
     {
      "key": "LEFT OUTER JOIN",
      "en": "LEFT OUTER JOIN",
      "zh": "LEFT OUTER JOIN"
     },
     {
      "key": "RIGHT OUTER JOIN",
      "en": "RIGHT OUTER JOIN",
      "zh": "RIGHT OUTER JOIN"
     }
    ],
    "answer": "LEFT OUTER JOIN"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "CONTAINS",
      "en": "CONTAINS",
      "zh": "CONTAINS"
     },
     {
      "key": "HAVING",
      "en": "HAVING",
      "zh": "HAVING"
     },
     {
      "key": "LIMIT",
      "en": "LIMIT",
      "zh": "LIMIT"
     },
     {
      "key": "WHERE",
      "en": "WHERE",
      "zh": "WHERE"
     }
    ],
    "answer": "HAVING"
   }
  ],
  "template": "WITH result AS(\nSELECT e.EmployeeID\n  , e.EmployeeName\n  , e.EmployeePosition\n  , c.ContractType\n  , {{1}} (date, c.StartDate) as StartDate\nFROM Employee AS e\n{{2}} Contract AS c on c.EmployeeID = e.EmployeeID\n)\nSELECT COUNT(DISTINCT EmployeeID) AS TotalEmployees\n  , ContractType\nFROM result\nGROUP BY ContractType\n{{3}} COUNT(DISTINCT EmployeeID) > 2",
  "templateEn": "WITH result AS(\nSELECT e.EmployeeID\n  , e.EmployeeName\n  , e.EmployeePosition\n  , c.ContractType\n  , {{1}} (date, c.StartDate) as StartDate\nFROM Employee AS e\n{{2}} Contract AS c on c.EmployeeID = e.EmployeeID\n)\nSELECT COUNT(DISTINCT EmployeeID) AS TotalEmployees\n  , ContractType\nFROM result\nGROUP BY ContractType\n{{3}} COUNT(DISTINCT EmployeeID) > 2",
  "templateZh": "WITH result AS(\nSELECT e.EmployeeID\n  , e.EmployeeName\n  , e.EmployeePosition\n  , c.ContractType\n  , {{1}} (date, c.StartDate) as StartDate\nFROM Employee AS e\n{{2}} Contract AS c on c.EmployeeID = e.EmployeeID\n)\nSELECT COUNT(DISTINCT EmployeeID) AS TotalEmployees\n  , ContractType\nFROM result\nGROUP BY ContractType\n{{3}} COUNT(DISTINCT EmployeeID) > 2",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。Warehouse1 包含以下表和列。\n```\nTable name | Column name | Data type\nEmployee | EmployeeID | Int\nEmployee | EmployeeName | Varchar(128)\nEmployee | EmployeePosition | Varchar(64)\nContract | EmployeeID | Int\nContract | ContractType | Varchar(64)\nContract | StartDate | Datetime2\nContract | EndDate | Datetime2\n```\n您需要对表进行非规范化处理，并在 Employee 表中包含 ContractType 和 StartDate 列。解决方案必须满足以下要求：\n确保 StartDate 列的数据类型为日期。\n确保保留 Employee 表中的所有行，并包含来自 Contract 表的任何匹配行。\n确保结果集显示每种合同类型的员工总数，仅包括拥有超过两名员工的所有合同类型。\n您应该如何完成语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。Warehouse1 包含以下表和列。\n```\nTable name | Column name | Data type\nEmployee | EmployeeID | Int\nEmployee | EmployeeName | Varchar(128)\nEmployee | EmployeePosition | Varchar(64)\nContract | EmployeeID | Int\nContract | ContractType | Varchar(64)\nContract | StartDate | Datetime2\nContract | EndDate | Datetime2\n```\n您需要对表进行非规范化处理，并在 Employee 表中包含 ContractType 和 StartDate 列。解决方案必须满足以下要求：\n确保 StartDate 列的数据类型为日期。\n确保保留 Employee 表中的所有行，并包含来自 Contract 表的任何匹配行。\n确保结果集显示每种合同类型的员工总数，仅包括拥有超过两名员工的所有合同类型。\n您应该如何完成语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1. Warehouse1 contains the following tables and columns.\n```\nTable name | Column name | Data type\nEmployee | EmployeeID | Int\nEmployee | EmployeeName | Varchar(128)\nEmployee | EmployeePosition | Varchar(64)\nContract | EmployeeID | Int\nContract | ContractType | Varchar(64)\nContract | StartDate | Datetime2\nContract | EndDate | Datetime2\n```\nYou need to denormalize the tables and include the ContractType and StartDate columns in the Employee table. The solution must meet the following requirements:\nEnsure that the StartDate column is of the date data type.\nEnsure that all the rows from the Employee table are preserved and include any matching rows from the Contract table.\nEnsure that the result set displays the total number of employees per contract type for all the contract types that have more than two employees.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 194 页答案图\n\n题目分析与解答\n1. 考察的知识点\nSQL查询语句的使用，包括JOIN操作和数据类型转换。\n数据聚合与分组操作（GROUP BY和HAVING）。\n数据类型转换（CAST）。\n2. 选项分析\nCAST: 正确。题目要求将StartDate列转换为date数据类型，使用CAST函数可以实现这一点。\nCONVERT: 错误。虽然CONVERT也可以用于数据类型转换，但题目明确要求使用CAST。\nINNER JOIN: 错误。INNER JOIN只会保留两个表中匹配的行，而题目要求保留Employee表中的所有行，因此需要使用LEFT OUTER JOIN。\nLEFT OUTER JOIN: 正确。LEFT OUTER JOIN可以保留Employee表中的所有行，同时包括Contract表中匹配的行，符合题目要求。\nWHERE: 错误。WHERE用于过滤行，但题目要求对分组后的数据进行过滤，因此需要使用HAVING。\nHAVING: 正确。HAVING用于对分组后的数据进行过滤，符合题目要求。\n3. 我选的答案\nCAST\nLEFT OUTER JOIN\nHAVING\n4. 官方答案\nCAST\nLEFT OUTER JOIN\nHAVING\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "【答案来源】PDF 第 194 页答案图\n\n题目分析与解答\n1. 考察的知识点\nSQL查询语句的使用，包括JOIN操作和数据类型转换。\n数据聚合与分组操作（GROUP BY和HAVING）。\n数据类型转换（CAST）。\n2. 选项分析\nCAST: 正确。题目要求将StartDate列转换为date数据类型，使用CAST函数可以实现这一点。\nCONVERT: 错误。虽然CONVERT也可以用于数据类型转换，但题目明确要求使用CAST。\nINNER JOIN: 错误。INNER JOIN只会保留两个表中匹配的行，而题目要求保留Employee表中的所有行，因此需要使用LEFT OUTER JOIN。\nLEFT OUTER JOIN: 正确。LEFT OUTER JOIN可以保留Employee表中的所有行，同时包括Contract表中匹配的行，符合题目要求。\nWHERE: 错误。WHERE用于过滤行，但题目要求对分组后的数据进行过滤，因此需要使用HAVING。\nHAVING: 正确。HAVING用于对分组后的数据进行过滤，符合题目要求。\n3. 我选的答案\nCAST\nLEFT OUTER JOIN\nHAVING\n4. 官方答案\nCAST\nLEFT OUTER JOIN\nHAVING\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "[Answer source] PDF p.194 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 7,
  "pdfPage": 192,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 7",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 7",
  "pdfQuestionNum": 7,
  "topic": 2
 },
 {
  "id": "dp700-q068",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "A Dataflow Gen2 dataflow",
   "A filter in a Dataflow Gen2 dataflow"
  ],
  "pdfAnswer": [
   "A Dataflow Gen2 dataflow",
   "A filter in a Dataflow Gen2 dataflow"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "数据处理器",
    "labelEn": "Data processor",
    "labelZh": "数据处理器",
    "choices": [
     {
      "key": "A data pipeline",
      "en": "A data pipeline",
      "zh": "数据管道"
     },
     {
      "key": "A Dataflow Gen2 dataflow",
      "en": "A Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 数据流"
     },
     {
      "key": "An eventstream with a custom endpoint",
      "en": "An eventstream with a custom endpoint",
      "zh": "带自定义终结点的 eventstream"
     },
     {
      "key": "An eventstream with an external data source",
      "en": "An eventstream with an external data source",
      "zh": "带外部数据源的 eventstream"
     }
    ],
    "answer": "A Dataflow Gen2 dataflow"
   },
   {
    "id": "2",
    "label": "筛选",
    "labelEn": "Filtering",
    "labelZh": "筛选",
    "choices": [
     {
      "key": "A Filter activity in a data pipeline",
      "en": "A Filter activity in a data pipeline",
      "zh": "数据管道中的 Filter 活动"
     },
     {
      "key": "A filter in a Dataflow Gen2 dataflow",
      "en": "A filter in a Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 数据流中的筛选器"
     },
     {
      "key": "A KQL statement",
      "en": "A KQL statement",
      "zh": "KQL 语句"
     },
     {
      "key": "An eventstream processor",
      "en": "An eventstream processor",
      "zh": "eventstream 处理器"
     }
    ],
    "answer": "A filter in a Dataflow Gen2 dataflow"
   }
  ],
  "answerSource": "image",
  "stem": "您有一个 Azure Event Hubs 数据源，其中包含天气数据。\n您使用名为 Eventstream1 的事件流从数据源摄取数据。Eventstream1 使用 lakehouse 作为目标。\n您需要仅批量摄取数据源中 City 属性值为 Kansas 的行。过滤器必须在目标之前添加。解决方案必须尽量减少开发工作量。\n您应该为数据处理器和过滤使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个 Azure Event Hubs 数据源，其中包含天气数据。\n您使用名为 Eventstream1 的事件流从数据源摄取数据。Eventstream1 使用 lakehouse 作为目标。\n您需要仅批量摄取数据源中 City 属性值为 Kansas 的行。过滤器必须在目标之前添加。解决方案必须尽量减少开发工作量。\n您应该为数据处理器和过滤使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You have an Azure Event Hubs data source that contains weather data.\nYou ingest the data from the data source by using an eventstream named Eventstream1. Eventstream1 uses a lakehouse as the destination.\nYou need to batch ingest only rows from the data source where the City attribute has a value of Kansas. The filter must be added before the destination. The solution must minimize development effort.\nWhat should you use for the data processor and filtering? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 197 页答案图\n\n题目分析与解答\n1. 考察的知识点\nAzure Event Hubs数据处理与过滤。\n使用Dataflow Gen2进行数据流处理和过滤。\n如何选择合适的工具以最小化开发工作量。\n2. 选项分析\nData processor:\nA data pipeline: 错误。数据管道通常用于复杂的ETL（提取、转换、加载）操作，而不是直接处理Eventstream数据源。\nA Dataflow Gen2 dataflow: 正确。Dataflow Gen2专为流数据处理设计，支持高效的实时数据过滤和处理，适合本题场景。\nAn eventstream with a custom endpoint: 错误。自定义端点需要额外开发工作，不符合“最小化开发努力”的要求。\nAn eventstream with an external data source: 错误。外部数据源的使用与题目要求无关，且无法直接实现过滤功能。\nFiltering:\nA Filter activity in a data pipeline: 错误。虽然可以实现过滤，但需要额外的开发工作，不符合“最小化开发努力”的要求。\nA filter in a Dataflow Gen2 dataflow: 正确。Dataflow Gen2支持内置过滤功能，能够直接在流数据处理中实现过滤，符合题目要求。\nA KQL statement: 错误。KQL主要用于查询数据，而不是实时过滤流数据。\nAn eventstream processor: 错误。Eventstream processor需要额外开发工作，不符合“最小化开发努力”的要求。\n3. 我的答案\nData processor: A Dataflow Gen2 dataflow\nFiltering: A filter in a Dataflow Gen2 dataflow\n4. 官方答案\nData processor: A Dataflow Gen2 dataflow\nFiltering: A filter in a Dataflow Gen2 dataflow\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 197 页答案图\n\n题目分析与解答\n1. 考察的知识点\nAzure Event Hubs数据处理与过滤。\n使用Dataflow Gen2进行数据流处理和过滤。\n如何选择合适的工具以最小化开发工作量。\n2. 选项分析\nData processor:\nA data pipeline: 错误。数据管道通常用于复杂的ETL（提取、转换、加载）操作，而不是直接处理Eventstream数据源。\nA Dataflow Gen2 dataflow: 正确。Dataflow Gen2专为流数据处理设计，支持高效的实时数据过滤和处理，适合本题场景。\nAn eventstream with a custom endpoint: 错误。自定义端点需要额外开发工作，不符合“最小化开发努力”的要求。\nAn eventstream with an external data source: 错误。外部数据源的使用与题目要求无关，且无法直接实现过滤功能。\nFiltering:\nA Filter activity in a data pipeline: 错误。虽然可以实现过滤，但需要额外的开发工作，不符合“最小化开发努力”的要求。\nA filter in a Dataflow Gen2 dataflow: 正确。Dataflow Gen2支持内置过滤功能，能够直接在流数据处理中实现过滤，符合题目要求。\nA KQL statement: 错误。KQL主要用于查询数据，而不是实时过滤流数据。\nAn eventstream processor: 错误。Eventstream processor需要额外开发工作，不符合“最小化开发努力”的要求。\n3. 我的答案\nData processor: A Dataflow Gen2 dataflow\nFiltering: A filter in a Dataflow Gen2 dataflow\n4. 官方答案\nData processor: A Dataflow Gen2 dataflow\nFiltering: A filter in a Dataflow Gen2 dataflow\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.197 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 8,
  "pdfPage": 196,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 8",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 8",
  "pdfQuestionNum": 8,
  "topic": 2
 },
 {
  "id": "dp700-q069",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Expand",
    "textEn": "Expand",
    "textZh": "Expand"
   },
   {
    "id": "B",
    "text": "Group by",
    "textEn": "Group by",
    "textZh": "Group by"
   },
   {
    "id": "C",
    "text": "Union",
    "textEn": "Union",
    "textZh": "Union"
   },
   {
    "id": "D",
    "text": "Aggregate",
    "textEn": "Aggregate",
    "textZh": "Aggregate"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric workspace，其中包含一个名为 Eventstream1 的 eventstream。Eventstream1 使用事件流处理处理来自热传感器的数据，然后将数据存储在 lakehouse 中。\n你需要修改 Eventstream1 以包含温度的标准差。\n在 Eventstream1 的逻辑中，你应该包含哪个转换操作符？",
  "stemZh": "你有一个 Fabric workspace，其中包含一个名为 Eventstream1 的 eventstream。Eventstream1 使用事件流处理处理来自热传感器的数据，然后将数据存储在 lakehouse 中。\n你需要修改 Eventstream1 以包含温度的标准差。\n在 Eventstream1 的逻辑中，你应该包含哪个转换操作符？",
  "stemEn": "You have a Fabric workspace that contains an eventstream named Eventstream1. Eventstream1 processes data from a thermal sensor by using event stream processing, and then stores the data in a lakehouse.\nYou need to modify Eventstream1 to include the standard deviation of the temperature.\nWhich transform operator should you include in the Eventstream1 logic?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中使用事件流处理（Eventstream）时，如何选择合适的变换操作符（Transform Operator）来处理和分析数据。\n具体来说，考察的是如何通过变换操作符计算统计值（如标准差）。\n2. 选项分析\nA. Expand:\nExpand操作符用于将嵌套数据结构展开为单独的字段或记录。\n它不适用于计算统计值（如标准差）。\n错误原因：与计算标准差无关。\nB. Group by:\nGroup by操作符用于将数据分组，以便对每组数据进行聚合计算。\n计算标准差通常需要先对数据进行分组，然后对每组数据应用聚合函数。\n正确原因：可以通过分组后计算标准差，符合题目要求。\nC. Union:\nUnion操作符用于合并多个数据流或表的数据。\n它不涉及统计计算或数据分组。\n错误原因：与计算标准差无关。\nD. Aggregate:\nAggregate操作符用于对数据进行聚合计算（如求和、平均值等）。\n虽然Aggregate可以计算标准差，但它通常需要结合Group by操作符来分组数据后再进行聚合。\n错误原因：单独使用Aggregate无法满足题目要求的逻辑。\n3. 我的答案\n答案：B. Group by\n4. 官方答案\n答案：B. Group by\n5. 与官方答案比较\n我的答案与官方答案一致。\n理由：Group by操作符是计算标准差的正确选择，因为它允许对数据进行分组并应用聚合函数。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中使用事件流处理（Eventstream）时，如何选择合适的变换操作符（Transform Operator）来处理和分析数据。\n具体来说，考察的是如何通过变换操作符计算统计值（如标准差）。\n2. 选项分析\nA. Expand:\nExpand操作符用于将嵌套数据结构展开为单独的字段或记录。\n它不适用于计算统计值（如标准差）。\n错误原因：与计算标准差无关。\nB. Group by:\nGroup by操作符用于将数据分组，以便对每组数据进行聚合计算。\n计算标准差通常需要先对数据进行分组，然后对每组数据应用聚合函数。\n正确原因：可以通过分组后计算标准差，符合题目要求。\nC. Union:\nUnion操作符用于合并多个数据流或表的数据。\n它不涉及统计计算或数据分组。\n错误原因：与计算标准差无关。\nD. Aggregate:\nAggregate操作符用于对数据进行聚合计算（如求和、平均值等）。\n虽然Aggregate可以计算标准差，但它通常需要结合Group by操作符来分组数据后再进行聚合。\n错误原因：单独使用Aggregate无法满足题目要求的逻辑。\n3. 我的答案\n答案：B. Group by\n4. 官方答案\n答案：B. Group by\n5. 与官方答案比较\n我的答案与官方答案一致。\n理由：Group by操作符是计算标准差的正确选择，因为它允许对数据进行分组并应用聚合函数。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中使用事件流处理（Eventstream）时，如何选择合适的变换操作符（Transform Operator）来处理和分析数据。\n具体来说，考察的是如何通过变换操作符计算统计值（如标准差）。\n2. 选项分析\nA. Expand:\nExpand操作符用于将嵌套数据结构展开为单独的字段或记录。\n它不适用于计算统计值（如标准差）。\n错误原因：与计算标准差无关。\nB. Group by:\nGroup by操作符用于将数据分组，以便对每组数据进行聚合计算。\n计算标准差通常需要先对数据进行分组，然后对每组数据应用聚合函数。\n正确原因：可以通过分组后计算标准差，符合题目要求。\nC. Union:\nUnion操作符用于合并多个数据流或表的数据。\n它不涉及统计计算或数据分组。\n错误原因：与计算标准差无关。\nD. Aggregate:\nAggregate操作符用于对数据进行聚合计算（如求和、平均值等）。\n虽然Aggregate可以计算标准差，但它通常需要结合Group by操作符来分组数据后再进行聚合。\n错误原因：单独使用Aggregate无法满足题目要求的逻辑。\n3. 我的答案\n答案：B. Group by\n4. 官方答案\n答案：B. Group by\n5. 与官方答案比较\n我的答案与官方答案一致。\n理由：Group by操作符是计算标准差的正确选择，因为它允许对数据进行分组并应用聚合函数。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 9,
  "pdfPage": 198,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 9",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 9",
  "pdfQuestionNum": 9,
  "topic": 2
 },
 {
  "id": "dp700-q070",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a KQL queryset",
    "textEn": "a KQL queryset",
    "textZh": "a KQL queryset"
   },
   {
    "id": "B",
    "text": "an eventstream",
    "textEn": "an eventstream",
    "textZh": "an eventstream"
   },
   {
    "id": "C",
    "text": "a streaming dataset",
    "textEn": "a streaming dataset",
    "textZh": "a streaming dataset"
   },
   {
    "id": "D",
    "text": "Apache Spark Structured Streaming",
    "textEn": "Apache Spark Structured Streaming",
    "textZh": "Apache Spark Structured Streaming"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个 Azure event hub。每个事件包含以下字段：\nBikepointID -\nStreet -\nNeighbourhood -\nLatitude -\nLongitude -\nNo_Bikes -\nNo_Empty_Docks -\n你需要摄取这些事件。解决方案必须仅保留 Neighbourhood 值为 Chelsea 的事件，然后将保留的事件存储在 Fabric lakehouse 中。\n你应该使用什么？",
  "stemZh": "你有一个 Azure event hub。每个事件包含以下字段：\nBikepointID -\nStreet -\nNeighbourhood -\nLatitude -\nLongitude -\nNo_Bikes -\nNo_Empty_Docks -\n你需要摄取这些事件。解决方案必须仅保留 Neighbourhood 值为 Chelsea 的事件，然后将保留的事件存储在 Fabric lakehouse 中。\n你应该使用什么？",
  "stemEn": "You have an Azure event hub. Each event contains the following fields:\nBikepointID -\nStreet -\nNeighbourhood -\nLatitude -\nLongitude -\nNo_Bikes -\nNo_Empty_Docks -\nYou need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Event Hub数据处理与过滤。\n如何使用合适的工具或技术来处理实时数据流。\nFabric lakehouse数据存储的集成。\n2. 选项分析\nA. a KQL queryset\n错误。KQL（Kusto Query Language）主要用于查询静态数据（如Azure Data Explorer中的数据），而不是实时数据流的处理。题目要求实时过滤和存储，因此不适合。\nB. an eventstream\n正确。Eventstream是专门用于处理Azure Event Hub中的实时数据流的工具，可以对事件进行过滤（如按Neighbourhood值过滤），并将结果存储到Fabric lakehouse中。\nC. a streaming dataset\n错误。Streaming dataset通常用于Power BI实时数据可视化，而不是用于复杂的实时数据处理和存储到Fabric lakehouse。\nD. Apache Spark Structured Streaming\n错误。虽然Apache Spark Structured Streaming可以处理实时数据流，但它需要额外的配置和资源，而题目没有提到使用Spark环境。Eventstream是更直接的解决方案。\n3. 我的答案\nB. an eventstream\n4. 官方答案\nB. an eventstream\n5. 答案比较与思考\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Event Hub数据处理与过滤。\n如何使用合适的工具或技术来处理实时数据流。\nFabric lakehouse数据存储的集成。\n2. 选项分析\nA. a KQL queryset\n错误。KQL（Kusto Query Language）主要用于查询静态数据（如Azure Data Explorer中的数据），而不是实时数据流的处理。题目要求实时过滤和存储，因此不适合。\nB. an eventstream\n正确。Eventstream是专门用于处理Azure Event Hub中的实时数据流的工具，可以对事件进行过滤（如按Neighbourhood值过滤），并将结果存储到Fabric lakehouse中。\nC. a streaming dataset\n错误。Streaming dataset通常用于Power BI实时数据可视化，而不是用于复杂的实时数据处理和存储到Fabric lakehouse。\nD. Apache Spark Structured Streaming\n错误。虽然Apache Spark Structured Streaming可以处理实时数据流，但它需要额外的配置和资源，而题目没有提到使用Spark环境。Eventstream是更直接的解决方案。\n3. 我的答案\nB. an eventstream\n4. 官方答案\nB. an eventstream\n5. 答案比较与思考\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nAzure Event Hub数据处理与过滤。\n如何使用合适的工具或技术来处理实时数据流。\nFabric lakehouse数据存储的集成。\n2. 选项分析\nA. a KQL queryset\n错误。KQL（Kusto Query Language）主要用于查询静态数据（如Azure Data Explorer中的数据），而不是实时数据流的处理。题目要求实时过滤和存储，因此不适合。\nB. an eventstream\n正确。Eventstream是专门用于处理Azure Event Hub中的实时数据流的工具，可以对事件进行过滤（如按Neighbourhood值过滤），并将结果存储到Fabric lakehouse中。\nC. a streaming dataset\n错误。Streaming dataset通常用于Power BI实时数据可视化，而不是用于复杂的实时数据处理和存储到Fabric lakehouse。\nD. Apache Spark Structured Streaming\n错误。虽然Apache Spark Structured Streaming可以处理实时数据流，但它需要额外的配置和资源，而题目没有提到使用Spark环境。Eventstream是更直接的解决方案。\n3. 我的答案\nB. an eventstream\n4. 官方答案\nB. an eventstream\n5. 答案比较与思考\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 10,
  "pdfPage": 200,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 10",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 10",
  "pdfQuestionNum": 10,
  "topic": 2
 },
 {
  "id": "dp700-q071",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "No",
   "No",
   "Yes"
  ],
  "pdfAnswer": [
   "No",
   "No",
   "Yes"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "目标表将始终被覆盖。",
    "labelEn": "The target table will always be overwritten.",
    "labelZh": "目标表将始终被覆盖。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "2",
    "label": "merge 操作将始终运行。",
    "labelEn": "The merge operation will always run.",
    "labelZh": "merge 操作将始终运行。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "3",
    "label": "该加载模式同时支持完全加载和增量加载要求。",
    "labelEn": "The loading pattern supports both full and incremental loading requirements.",
    "labelZh": "该加载模式同时支持完全加载和增量加载要求。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   }
  ],
  "answerSource": "image",
  "stem": "您正在为 Fabric notebook 工作负载构建数据加载模式。\n您有以下代码段：\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n        print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\n对于以下每个陈述，如果该陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemZh": "您正在为 Fabric notebook 工作负载构建数据加载模式。\n您有以下代码段：\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n        print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\n对于以下每个陈述，如果该陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemEn": "You are building a data loading pattern for Fabric notebook workloads.\nYou have the following code segment:\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n        print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 204 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDelta Lake的操作模式，包括表的创建、更新和合并（Merge）。\n数据加载模式的设计，支持全量加载和增量加载的能力。\n异常处理机制在数据加载中的应用。\n2. 选项分析\nThe target table will always be overwritten.\n错误。代码中只有在目标表不存在时才会执行 `df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")`，因此目标表并不会总是被覆盖。\nThe merge operation will always run.\n错误。代码中只有在目标表存在时才会执行 `merge_operation`，如果目标表不存在，则不会运行合并操作。\nThe loading pattern supports both full and incremental loading requirements.\n正确。代码中通过 `overwrite` 模式支持全量加载，通过 `merge` 操作支持增量加载，因此该加载模式支持两种需求。\n3. 我的答案\nThe target table will always be overwritten: No\nThe merge operation will always run: No\nThe loading pattern supports both full and incremental loading requirements: Yes 4. 官方答案The loading pattern supports both full and incremental loading requirements: Yes 5. 与官方答案比较我的答案与官方答案一致。",
  "explanationZh": "【答案来源】PDF 第 204 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDelta Lake的操作模式，包括表的创建、更新和合并（Merge）。\n数据加载模式的设计，支持全量加载和增量加载的能力。\n异常处理机制在数据加载中的应用。\n2. 选项分析\nThe target table will always be overwritten.\n错误。代码中只有在目标表不存在时才会执行 `df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")`，因此目标表并不会总是被覆盖。\nThe merge operation will always run.\n错误。代码中只有在目标表存在时才会执行 `merge_operation`，如果目标表不存在，则不会运行合并操作。\nThe loading pattern supports both full and incremental loading requirements.\n正确。代码中通过 `overwrite` 模式支持全量加载，通过 `merge` 操作支持增量加载，因此该加载模式支持两种需求。\n3. 我的答案\nThe target table will always be overwritten: No\nThe merge operation will always run: No\nThe loading pattern supports both full and incremental loading requirements: Yes 4. 官方答案The loading pattern supports both full and incremental loading requirements: Yes 5. 与官方答案比较我的答案与官方答案一致。",
  "explanationEn": "[Answer source] PDF p.204 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 11,
  "pdfPage": 203,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 11",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 11",
  "pdfQuestionNum": 11,
  "topic": 2
 },
 {
  "id": "dp700-q072",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "o.OrderDate >= c.valid_from_datetime",
   "o.OrderDate < c.valid_to_datetime"
  ],
  "pdfAnswer": [
   "o.OrderDate >= c.valid_from_datetime",
   "o.OrderDate < c.valid_to_datetime"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "c.is_current = 1",
      "en": "c.is_current = 1",
      "zh": "c.is_current = 1"
     },
     {
      "key": "o.OrderDate > c.valid_to_datetime",
      "en": "o.OrderDate > c.valid_to_datetime",
      "zh": "o.OrderDate > c.valid_to_datetime"
     },
     {
      "key": "o.OrderDate >= c.valid_from_datetime",
      "en": "o.OrderDate >= c.valid_from_datetime",
      "zh": "o.OrderDate >= c.valid_from_datetime"
     }
    ],
    "answer": "o.OrderDate >= c.valid_from_datetime"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "c.is_current = 1",
      "en": "c.is_current = 1",
      "zh": "c.is_current = 1"
     },
     {
      "key": "o.OrderDate < c.valid_to_datetime",
      "en": "o.OrderDate < c.valid_to_datetime",
      "zh": "o.OrderDate < c.valid_to_datetime"
     },
     {
      "key": "o.OrderDate <= c.valid_from_datetime",
      "en": "o.OrderDate <= c.valid_from_datetime",
      "zh": "o.OrderDate <= c.valid_from_datetime"
     }
    ],
    "answer": "o.OrderDate < c.valid_to_datetime"
   }
  ],
  "template": "SELECT\n  OrderLineID order_line_id\n  ,OrderDate order_date\n  ,c.customer_key\n  ,c.customer_id\n  ,Quantity order_quantity\n  ,UnitPrice unit_price\n  ,TaxRate tax_rate\nFROM\n  Lakehouse1.orderlines o\nINNER JOIN\n  Lakehouse2.dim_customer c\n    ON o.customerid = c.customer_id\n    AND {{1}}\n    AND {{2}}",
  "templateEn": "SELECT\n  OrderLineID order_line_id\n  ,OrderDate order_date\n  ,c.customer_key\n  ,c.customer_id\n  ,Quantity order_quantity\n  ,UnitPrice unit_price\n  ,TaxRate tax_rate\nFROM\n  Lakehouse1.orderlines o\nINNER JOIN\n  Lakehouse2.dim_customer c\n    ON o.customerid = c.customer_id\n    AND {{1}}\n    AND {{2}}",
  "templateZh": "SELECT\n  OrderLineID order_line_id\n  ,OrderDate order_date\n  ,c.customer_key\n  ,c.customer_id\n  ,Quantity order_quantity\n  ,UnitPrice unit_price\n  ,TaxRate tax_rate\nFROM\n  Lakehouse1.orderlines o\nINNER JOIN\n  Lakehouse2.dim_customer c\n    ON o.customerid = c.customer_id\n    AND {{1}}\n    AND {{2}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "您有一个 Fabric 工作区，其中包含两个湖库，分别名为 Lakehouse1 和 Lakehouse2。Lakehouse1 包含一个名为 Orderlines 的Delta 表中的暂存数据。Lakehouse2 包含一个类型 2 缓慢变化维度 (SCD) 维度表，名为 Dim_Customer。\n您需要构建一个查询，将 Orderlines 和 Dim_Customer 的数据结合起来，以创建一个新的事实表，名为 Fact_Orders。新表必须满足以下要求：\n支持基于历史属性的客户订单分析。\n支持基于当前属性的客户订单分析。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个 Fabric 工作区，其中包含两个湖库，分别名为 Lakehouse1 和 Lakehouse2。Lakehouse1 包含一个名为 Orderlines 的Delta 表中的暂存数据。Lakehouse2 包含一个类型 2 缓慢变化维度 (SCD) 维度表，名为 Dim_Customer。\n您需要构建一个查询，将 Orderlines 和 Dim_Customer 的数据结合起来，以创建一个新的事实表，名为 Fact_Orders。新表必须满足以下要求：\n支持基于历史属性的客户订单分析。\n支持基于当前属性的客户订单分析。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains two lakehouses named Lakehouse1 and Lakehouse2. Lakehouse1 contains staging data in a Delta table named Orderlines. Lakehouse2 contains a Type 2 slowly changing dimension (SCD) dimension table named Dim_Customer.\nYou need to build a query that will combine data from Orderlines and Dim_Customer to create a new fact table named Fact_Orders. The new table must meet the following requirements:\nEnable the analysis of customer orders based on historical attributes.\nEnable the analysis of customer orders based on the current attributes.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 207 页答案图\n【说明】Option 3 of Box 1 shows a stray \"t\" after the text in the PDF image; omitted.\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是在数据湖中使用Delta表进行查询的能力，特别是如何处理Type 2慢速变化维度（SCD）表以支持历史和当前属性分析。\n重点知识点包括：SQL查询语法、INNER JOIN操作、时间范围过滤条件以及Type 2 SCD的有效时间范围处理。\n2. 选项分析\n选项1：o.OrderDate >= c.valid_from_datetime\n正确。此条件确保订单日期在维度表记录的有效开始时间之后，从而匹配正确的历史记录。\n选项2：o.OrderDate <= c.valid_to_datetime\n错误。此条件不完全正确，因为Type 2 SCD的有效结束时间通常是非包含性（即小于而不是小于等于）。\n选项3：o.OrderDate < c.valid_to_datetime\n正确。此条件确保订单日期在维度表记录的有效结束时间之前，符合Type 2 SCD的时间范围逻辑。\n3. 我的答案\no.OrderDate >= c.valid_from_datetime\no.OrderDate < c.valid_to_datetime\n4. 官方答案\no.OrderDate >= c.valid_from_datetime\no.OrderDate < c.valid_to_datetime\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Type 2 SCD的时间范围逻辑通常是“开始时间包含，结束时间不包含”，因此使用“>=”和“<”是正确的选择。",
  "explanationZh": "【答案来源】PDF 第 207 页答案图\n【说明】Option 3 of Box 1 shows a stray \"t\" after the text in the PDF image; omitted.\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是在数据湖中使用Delta表进行查询的能力，特别是如何处理Type 2慢速变化维度（SCD）表以支持历史和当前属性分析。\n重点知识点包括：SQL查询语法、INNER JOIN操作、时间范围过滤条件以及Type 2 SCD的有效时间范围处理。\n2. 选项分析\n选项1：o.OrderDate >= c.valid_from_datetime\n正确。此条件确保订单日期在维度表记录的有效开始时间之后，从而匹配正确的历史记录。\n选项2：o.OrderDate <= c.valid_to_datetime\n错误。此条件不完全正确，因为Type 2 SCD的有效结束时间通常是非包含性（即小于而不是小于等于）。\n选项3：o.OrderDate < c.valid_to_datetime\n正确。此条件确保订单日期在维度表记录的有效结束时间之前，符合Type 2 SCD的时间范围逻辑。\n3. 我的答案\no.OrderDate >= c.valid_from_datetime\no.OrderDate < c.valid_to_datetime\n4. 官方答案\no.OrderDate >= c.valid_from_datetime\no.OrderDate < c.valid_to_datetime\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：Type 2 SCD的时间范围逻辑通常是“开始时间包含，结束时间不包含”，因此使用“>=”和“<”是正确的选择。",
  "explanationEn": "[Answer source] PDF p.207 answer image\n[Note] Option 3 of Box 1 shows a stray \"t\" after the text in the PDF image; omitted.",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 12,
  "pdfPage": 206,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 12",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 12",
  "pdfQuestionNum": 12,
  "topic": 2
 },
 {
  "id": "dp700-q073",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Eventstream",
    "textEn": "Eventstream",
    "textZh": "Eventstream"
   },
   {
    "id": "B",
    "text": "Dataflow Gen2",
    "textEn": "Dataflow Gen2",
    "textZh": "Dataflow Gen2"
   },
   {
    "id": "C",
    "text": "Streaming dataset",
    "textEn": "Streaming dataset",
    "textZh": "Streaming dataset"
   },
   {
    "id": "D",
    "text": "Data pipeline",
    "textEn": "Data pipeline",
    "textZh": "Data pipeline"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Lakehouse1 的 lakehouse 的 Fabric 工作区。\n在一个外部数据源中，你有每个大小为 500 GB的数据文件。每天都会添加一个新文件。\n你需要将数据导入Lakehouse1，而不应用任何转换。解决方案必须满足以下要求：\n当添加新文件时触发该过程。\n提供最高的吞吐量。\n你应该使用哪种类型的项目来导入数据？",
  "stemZh": "你有一个包含名为 Lakehouse1 的 lakehouse 的 Fabric 工作区。\n在一个外部数据源中，你有每个大小为 500 GB的数据文件。每天都会添加一个新文件。\n你需要将数据导入Lakehouse1，而不应用任何转换。解决方案必须满足以下要求：\n当添加新文件时触发该过程。\n提供最高的吞吐量。\n你应该使用哪种类型的项目来导入数据？",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements Trigger the process when a new file is added.\nProvide the highest throughput.\nWhich type of item should you use to ingest the data?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发条土量白涉及的知识点包括数据管道（Data Pipeline）、事件流（Eventstream）、数据流（Dataflow Gen2）和流式数据集（Streaming dataset）的功能和适用场景。\n2. 选项分析\nA. Eventstream\n错误。Eventstream 主要用于实时处理事件数据流，适合处理小型、实时的事件数据，而不是大规模文件的批量导入。它不适合处理500GB的文件，也无法满足高吞吐量的要求。\nB. Dataflow Gen2\n错误。Dataflow Gen2主要用于数据准备和转换，适合处理结构化数据并应用转换逻辑。本题明确要求不进行任何转换，因此Dataflow\nC. Streaming dataset\n错误。Streaming dataset主要用于实时数据流的可视化和分析，适合处理小型实时数据流，而不是大规模文件的批量导入。\nD. Data pipeline\n正确。Data pipeline 是专门设计用于处理大规模数据的批量导入和传输的工具，能够满足高吞吐量的要求，并支持基于触发条件（如新文件添加）启动数据导入过程。\n3. 我的答案\n我的答案是：D. Data pipeline\n4. 官方答案\n官方答案是：D. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Data pipeline 是唯一能够满足题目要求（触发条件、高吞吐量、不进行转换）的选项。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发条土量白涉及的知识点包括数据管道（Data Pipeline）、事件流（Eventstream）、数据流（Dataflow Gen2）和流式数据集（Streaming dataset）的功能和适用场景。\n2. 选项分析\nA. Eventstream\n错误。Eventstream 主要用于实时处理事件数据流，适合处理小型、实时的事件数据，而不是大规模文件的批量导入。它不适合处理500GB的文件，也无法满足高吞吐量的要求。\nB. Dataflow Gen2\n错误。Dataflow Gen2主要用于数据准备和转换，适合处理结构化数据并应用转换逻辑。本题明确要求不进行任何转换，因此Dataflow\nC. Streaming dataset\n错误。Streaming dataset主要用于实时数据流的可视化和分析，适合处理小型实时数据流，而不是大规模文件的批量导入。\nD. Data pipeline\n正确。Data pipeline 是专门设计用于处理大规模数据的批量导入和传输的工具，能够满足高吞吐量的要求，并支持基于触发条件（如新文件添加）启动数据导入过程。\n3. 我的答案\n我的答案是：D. Data pipeline\n4. 官方答案\n官方答案是：D. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Data pipeline 是唯一能够满足题目要求（触发条件、高吞吐量、不进行转换）的选项。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发条土量白涉及的知识点包括数据管道（Data Pipeline）、事件流（Eventstream）、数据流（Dataflow Gen2）和流式数据集（Streaming dataset）的功能和适用场景。\n2. 选项分析\nA. Eventstream\n错误。Eventstream 主要用于实时处理事件数据流，适合处理小型、实时的事件数据，而不是大规模文件的批量导入。它不适合处理500GB的文件，也无法满足高吞吐量的要求。\nB. Dataflow Gen2\n错误。Dataflow Gen2主要用于数据准备和转换，适合处理结构化数据并应用转换逻辑。本题明确要求不进行任何转换，因此Dataflow\nC. Streaming dataset\n错误。Streaming dataset主要用于实时数据流的可视化和分析，适合处理小型实时数据流，而不是大规模文件的批量导入。\nD. Data pipeline\n正确。Data pipeline 是专门设计用于处理大规模数据的批量导入和传输的工具，能够满足高吞吐量的要求，并支持基于触发条件（如新文件添加）启动数据导入过程。\n3. 我的答案\n我的答案是：D. Data pipeline\n4. 官方答案\n官方答案是：D. Data pipeline\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Data pipeline 是唯一能够满足题目要求（触发条件、高吞吐量、不进行转换）的选项。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 13,
  "pdfPage": 208,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 13",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 13",
  "pdfQuestionNum": 13,
  "topic": 2
 },
 {
  "id": "dp700-q074",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Data pipeline",
    "textEn": "Data pipeline",
    "textZh": "Data pipeline"
   },
   {
    "id": "B",
    "text": "Environment",
    "textEn": "Environment",
    "textZh": "Environment"
   },
   {
    "id": "C",
    "text": "KQL queryset",
    "textEn": "KQL queryset",
    "textZh": "KQL queryset"
   },
   {
    "id": "D",
    "text": "Dataflow Gen2",
    "textEn": "Dataflow Gen2",
    "textZh": "Dataflow Gen2"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Lakehouse1 的 lakehouse 的 Fabric 工作区。\n在一个外部数据源中，你有每个大小为 500 GB的数据文件。每天都会添加一个新文件。\n你需要将数据导入Lakehouse1，而不应用任何转换。解决方案必须满足以下要求：\n当添加新文件时触发该过程。\n提供最高的吞吐量。\n你应该使用哪种类型的项目来导入数据？",
  "stemZh": "你有一个包含名为 Lakehouse1 的 lakehouse 的 Fabric 工作区。\n在一个外部数据源中，你有每个大小为 500 GB的数据文件。每天都会添加一个新文件。\n你需要将数据导入Lakehouse1，而不应用任何转换。解决方案必须满足以下要求：\n当添加新文件时触发该过程。\n提供最高的吞吐量。\n你应该使用哪种类型的项目来导入数据？",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements Trigger the process when a new file is added.\nProvide the highest throughput.\nWhich type of item should you use to ingest the data?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发机制和高吞吐量的要求。\n2. 选项分析\nA. Data pipeline\n正确。Data pipeline 是 Microsoft Fabric 中用于处理和移动数据的工具，支持高吞吐量的数据传输，并且可以设置触发机制（如检测新文件的添加）。它非常适合大规模数据的无转换导入场景。\nB. Environment\n错误。Environment 是用于组织和管理工作区的逻辑分组工具，与数据导入或触发机制无关。\nC. KQL queryset\n错误。KQL queryset 是用于查询数据的工具，主要用于分析和检索数据，而不是用于数据导入或触发机制。\nD. Dataflow Gen2\n错误。Dataflow Gen2是用于数据转换和准备的工具，虽然可以处理数据，但其主要用途是数据转换，而不是高吞吐量的无转换导入。\n3. 我的答案\nA. Data pipeline\n4. 官方答案\nA. Data pipeline\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发机制和高吞吐量的要求。\n2. 选项分析\nA. Data pipeline\n正确。Data pipeline 是 Microsoft Fabric 中用于处理和移动数据的工具，支持高吞吐量的数据传输，并且可以设置触发机制（如检测新文件的添加）。它非常适合大规模数据的无转换导入场景。\nB. Environment\n错误。Environment 是用于组织和管理工作区的逻辑分组工具，与数据导入或触发机制无关。\nC. KQL queryset\n错误。KQL queryset 是用于查询数据的工具，主要用于分析和检索数据，而不是用于数据导入或触发机制。\nD. Dataflow Gen2\n错误。Dataflow Gen2是用于数据转换和准备的工具，虽然可以处理数据，但其主要用途是数据转换，而不是高吞吐量的无转换导入。\n3. 我的答案\nA. Data pipeline\n4. 官方答案\nA. Data pipeline\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在Microsoft Fabric中如何高效地将外部数据源中的大规模数据文件（500GB/天）导入Lakehouse，同时满足触发机制和轸吞吐迣的要求。\n2. 选项分析\nA. Data pipeline\n正确。Data pipeline 是 Microsoft Fabric 中用于处理和移动数据的工具，支持高吞吐量的数据传输，并且可以设置触发机制（如检测新文件的添加）。它非常适合大规模数据的无转换导入场景。\nB. Environment\n错误。Environment 是用于组织和管理工作区的逻辑分组工具，与数据导入或触发机制无关。\nC. KQL queryset\n错误。KQL queryset 是用于查询数据的工具，主要用于分析和检索数据，而不是用于数据导入或触发机制。\nD. Dataflow Gen2\n错误。Dataflow Gen2是用于数据转换和准备的工具，虽然可以处理数据，但其主要用途是数据转换，而不是高吞吐量的无转换导入。\n3. 我的答案\nA. Data pipeline\n4. 官方答案\nA. Data pipeline\n5. 与官方答案的比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 14,
  "pdfPage": 210,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 14",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 14",
  "pdfQuestionNum": 14,
  "topic": 2
 },
 {
  "id": "dp700-q075",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "Timestamp: 2024-05-18 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 40, \"eventid\": \"729afca2-be30-4559-bb5e-59feade642f3\", \"temperature\": 32}]",
    "textEn": "Timestamp: 2024-05-18 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 40, \"eventid\": \"729afca2-be30-4559-bb5e-59feade642f3\", \"temperature\": 32}]",
    "textZh": "Timestamp: 2024-05-18 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 40, \"eventid\": \"729afca2-be30-4559-bb5e-59feade642f3\", \"temperature\": 32}]"
   },
   {
    "id": "B",
    "text": "Timestamp: 2024-05-21 | DeviceId: 81416f30 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-5werade642f6\", \"temperature\": 27}]",
    "textEn": "Timestamp: 2024-05-21 | DeviceId: 81416f30 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-5werade642f6\", \"temperature\": 27}]",
    "textZh": "Timestamp: 2024-05-21 | DeviceId: 81416f30 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-5werade642f6\", \"temperature\": 27}]"
   },
   {
    "id": "C",
    "text": "Timestamp: 2024-05-23 | DeviceId: 81416f3060a24e759b192a84ea05973532dhdyte3 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]",
    "textEn": "Timestamp: 2024-05-23 | DeviceId: 81416f3060a24e759b192a84ea05973532dhdyte3 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]",
    "textZh": "Timestamp: 2024-05-23 | DeviceId: 81416f3060a24e759b192a84ea05973532dhdyte3 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]"
   },
   {
    "id": "D",
    "text": "Timestamp: 2024-05-24 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]",
    "textEn": "Timestamp: 2024-05-24 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]",
    "textZh": "Timestamp: 2024-05-24 | DeviceId: 81416f30-60a2-4e75-9b19-2a84ea059735 | StreamData: [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]"
   }
  ],
  "answer": [
   "A",
   "D"
  ],
  "pdfAnswer": [
   "A",
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个 eventhouse 和一个名为 Database1 的 KQL 数据库。Database1 包含以下内容：\n```\nTimestamp (datetime) | DeviceId (guid) | StreamData (dynamic)\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\"}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\"}]\n```\n一个名为 Table1 的表 -\n一个名为 Table2 的表 -\n一个名为 Policy1 的更新策略 -\nPolicy1 将数据从 Table1 发送到 Table2。\n以下是 Table2 中数据的示例。\n最近，对 Table1 执行了以下操作：\n在 StreamData 列中添加了一个名为 temperature 的额外元素。\n将 Timestamp 列的数据类型更改为 date。\n将 DeviceId 列的数据类型更改为 string。\n你计划向 Table2 加载额外记录。\n从 Table1到 Table2 将加载哪两个记录？每个正确答案都构成一个完整的解决方案。\n注意：每个正确选择都值一分。",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个 eventhouse 和一个名为 Database1 的 KQL 数据库。Database1 包含以下内容：\n```\nTimestamp (datetime) | DeviceId (guid) | StreamData (dynamic)\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\"}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\"}]\n```\n一个名为 Table1 的表 -\n一个名为 Table2 的表 -\n一个名为 Policy1 的更新策略 -\nPolicy1 将数据从 Table1 发送到 Table2。\n以下是 Table2 中数据的示例。\n最近，对 Table1 执行了以下操作：\n在 StreamData 列中添加了一个名为 temperature 的额外元素。\n将 Timestamp 列的数据类型更改为 date。\n将 DeviceId 列的数据类型更改为 string。\n你计划向 Table2 加载额外记录。\n从 Table1到 Table2 将加载哪两个记录？每个正确答案都构成一个完整的解决方案。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains an eventhouse and a KQL database named Database1. Database1 has the following:\n```\nTimestamp (datetime) | DeviceId (guid) | StreamData (dynamic)\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\"}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\"}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\"}]\n```\nA table named Table1 -\nA table named Table2 -\nAn update policy named Policy1 -\nPolicy1 sends data from Table1 to Table2.\nThe following is a sample of the data in Table2.\nRecently, the following actions were performed on Table1:\nAn additional element named temperature was added to the StreamData column.\nThe data type of the Timestamp column was changed to date.\nThe data type of the DeviceId column was changed to string.\nYou plan to load additional records to Table2.\nWhich two records will load from Table1 to Table2? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Data Explorer（KQL数据库）中的更新策略（Update Policy）的工作原理。\n重点关注数据类型的变化对更新策略的影响，以及如何处理数据流转。\n2. 选项分析\nA. Most Voted\n正确。更新策略（Policy1）会将Table1的数据流转到Table2，但前提是数据类型必须匹配。\n根据题目描述，Table1的Timestamp列数据类型已从datetime更改为date，而Table2的Timestamp列仍为datetime。由于date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\nB.\n错误。Table1的Deviceld列数据类型已从guid更改为string，而Table2的Deviceld列仍为guid。由于string类型无法隐式转换为guid，因此此记录无法加载到Table2。\nC.\n错误。StreamData列中新增了一个元素temperature，但Table2的StreamData列结构未更新以支持此新元素。由于数据结构不匹配，此记录无法加载到Table2。\nD. Most Voted\n正确。与选项A类似，Timestamp列的date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\n3. 我选的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。\n分析表明，数据类型的隐式转换和数据结构的匹配是关键因素。",
  "explanationZh": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Data Explorer（KQL数据库）中的更新策略（Update Policy）的工作原理。\n重点关注数据类型的变化对更新策略的影响，以及如何处理数据流转。\n2. 选项分析\nA. Most Voted\n正确。更新策略（Policy1）会将Table1的数据流转到Table2，但前提是数据类型必须匹配。\n根据题目描述，Table1的Timestamp列数据类型已从datetime更改为date，而Table2的Timestamp列仍为datetime。由于date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\nB.\n错误。Table1的Deviceld列数据类型已从guid更改为string，而Table2的Deviceld列仍为guid。由于string类型无法隐式转换为guid，因此此记录无法加载到Table2。\nC.\n错误。StreamData列中新增了一个元素temperature，但Table2的StreamData列结构未更新以支持此新元素。由于数据结构不匹配，此记录无法加载到Table2。\nD. Most Voted\n正确。与选项A类似，Timestamp列的date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\n3. 我选的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。\n分析表明，数据类型的隐式转换和数据结构的匹配是关键因素。",
  "explanationEn": "DP-700考试辅导：题目分析与解答\n1. 考察的知识点\n本题考察的是Azure Data Explorer（KQL数据库）中的更新策略（Update Policy）的工作原理。\n重点关注数据类型的变化对更新策略的影响，以及如何处理数据流转。\n2. 选项分析\nA. Most Voted\n正确。更新策略（Policy1）会将Table1的数据流转到Table2，但前提是数据类型必须匹配。\n根据题目描述，Table1的Timestamp列数据类型已从datetime更改为date，而Table2的Timestamp列仍为datetime。由于date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\nB.\n错误。Table1的Deviceld列数据类型已从guid更改为string，而Table2的Deviceld列仍为guid。由于string类型无法隐式转换为guid，因此此记录无法加载到Table2。\nC.\n错误。StreamData列中新增了一个元素temperature，但Table2的StreamData列结构未更新以支持此新元素。由于数据结构不匹配，此记录无法加载到Table2。\nD. Most Voted\n正确。与选项A类似，Timestamp列的date类型可以隐式转换为datetime，因此此记录可以成功加载到Table2。\n3. 我选的答案\nA\nD\n4. 官方答案\nA\nD\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。\n分析表明，数据类型的隐式转换和数据结构的匹配是关键因素。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 15,
  "pdfPage": 212,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 15",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 15",
  "pdfQuestionNum": 15,
  "topic": 2
 },
 {
  "id": "dp700-q076",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   ",try_cast(item_name as varchar(20))",
   ",convert(varchar, purchase_date, 7)"
  ],
  "pdfAnswer": [
   ",try_cast(item_name as varchar(20))",
   ",convert(varchar, purchase_date, 7)"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": ",convert(varchar(20), item_name)",
      "en": ",convert(varchar(20), item_name)",
      "zh": ",convert(varchar(20), item_name)"
     },
     {
      "key": ",convert(varchar(max), item_name)",
      "en": ",convert(varchar(max), item_name)",
      "zh": ",convert(varchar(max), item_name)"
     },
     {
      "key": ",try_cast(item_name as varchar(20))",
      "en": ",try_cast(item_name as varchar(20))",
      "zh": ",try_cast(item_name as varchar(20))"
     }
    ],
    "answer": ",try_cast(item_name as varchar(20))"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": ",convert(varchar, purchase_date, 7)",
      "en": ",convert(varchar, purchase_date, 7)",
      "zh": ",convert(varchar, purchase_date, 7)"
     },
     {
      "key": ",convert(varchar, purchase_date, 109)",
      "en": ",convert(varchar, purchase_date, 109)",
      "zh": ",convert(varchar, purchase_date, 109)"
     },
     {
      "key": ",convert(varchar, purchase_date, 112)",
      "en": ",convert(varchar, purchase_date, 112)",
      "zh": ",convert(varchar, purchase_date, 112)"
     }
    ],
    "answer": ",convert(varchar, purchase_date, 7)"
   }
  ],
  "template": "SELECT\n  item_id as ItemId\n  {{1}} as ItemName\n  ,item_description as ItemDescription\n  {{2}} as PurchaseDate\nFROM\n  Table1\nWHERE\n  item_type = @itemtype_parameter",
  "templateEn": "SELECT\n  item_id as ItemId\n  {{1}} as ItemName\n  ,item_description as ItemDescription\n  {{2}} as PurchaseDate\nFROM\n  Table1\nWHERE\n  item_type = @itemtype_parameter",
  "templateZh": "SELECT\n  item_id as ItemId\n  {{1}} as ItemName\n  ,item_description as ItemDescription\n  {{2}} as PurchaseDate\nFROM\n  Table1\nWHERE\n  item_type = @itemtype_parameter",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "您有一个 Fabric 工作区。\n您正在调试一个语句，并发现以下问题：\n有时，该语句未能返回所有预期的行。\nPurchaseDate 输出列的格式不是预期的 mmm dd, yy。\n您需要解决这些问题。解决方案必须确保结果的数据类型得以保留。结果可以包含空白单元格。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemZh": "您有一个 Fabric 工作区。\n您正在调试一个语句，并发现以下问题：\n有时，该语句未能返回所有预期的行。\nPurchaseDate 输出列的格式不是预期的 mmm dd, yy。\n您需要解决这些问题。解决方案必须确保结果的数据类型得以保留。结果可以包含空白单元格。\n您应该如何完成该语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确的选择都值一分。",
  "stemEn": "You have a Fabric workspace.\nYou are debugging a statement and discover the following issues:\nSometimes, the statement fails to return all the expected rows.\nThe PurchaseDate output column is NOT in the expected format of mmm dd, yy.\nYou need to resolve the issues. The solution must ensure that the data types of the results are retained. The results can contain blank cells.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 217 页答案图\n\n题目分析与解答\n1. 考察的知识点\n数据类型转换：如何正确使用SQL中的数据类型转换函数（如CONVERT和TRY_CAST）。\n日期格式化：如何使用CONVERT函数将日期格式化为指定的输出格式。\n调试SQL语句：解决数据类型问题和格式化问题，同时确保结果集的完整性。\n2. 选项分析\nItemName部分选项分析：\nconvert(varchar(20),item_name)：此选项将item_name转换为varchar(20)，但如果item_name的值无法转换为varchar类型，可能会导致错误。此选项不适合解决问题。\nconvert(varchar(max),item_name):此选项将item_name转换为varchar(max)，虽然可以处理更大的字符串，但并未解决问题中提到的\"有时无法返回所有预期行\"的问题。\ntry_cast(item_name as varchar(20):此选项尝试将item_name转换为varchar(20)，如果转换失败，则返回NULL而不会抛出错误。\n这是解决问题的正确选择，因为它可以确保结果集的完整性（即使某些值无法转换，也不会导致查询失败）。\nPurchaseDate部分选项分析：\nconvert(varchar, purchase_date,7):此选项将purchase_date转换为格式\"mmm dd,y\"，符合题目要求的日期格式。这是正确的选择。\nconvert(varchar, purchase_date,109):此选项将purchase_date转换为格式\"mon dd y h:miss:mmmAM\"，不符合题目要求的日期格式。\nconvert(varchar,purchase_date，112)：此选项将purchase_date转换为格式\"yyymmdd\"，不符合题目要求的日期格式。\n3. 我选的答案\ntry_cast(item_name as varchar(20)\nconvert(varchar, purchase_date, 7)\n4. 官方答案\ntry_cast(item_name as varchar(20)\nconvert(varchar, purchase_date, 7)\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：官方答案选择了TRY_CAST来确保数据类型转换的安全性，并选择了CONVERT函数的格式代码7来满足日期格式要求。这与我的分析完全一致。",
  "explanationZh": "【答案来源】PDF 第 217 页答案图\n\n题目分析与解答\n1. 考察的知识点\n数据类型转换：如何正确使用SQL中的数据类型转换函数（如CONVERT和TRY_CAST）。\n日期格式化：如何使用CONVERT函数将日期格式化为指定的输出格式。\n调试SQL语句：解决数据类型问题和格式化问题，同时确保结果集的完整性。\n2. 选项分析\nItemName部分选项分析：\nconvert(varchar(20),item_name)：此选项将item_name转换为varchar(20)，但如果item_name的值无法转换为varchar类型，可能会导致错误。此选项不适合解决问题。\nconvert(varchar(max),item_name):此选项将item_name转换为varchar(max)，虽然可以处理更大的字符串，但并未解决问题中提到的\"有时无法返回所有预期行\"的问题。\ntry_cast(item_name as varchar(20):此选项尝试将item_name转换为varchar(20)，如果转换失败，则返回NULL而不会抛出错误。\n这是解决问题的正确选择，因为它可以确保结果集的完整性（即使某些值无法转换，也不会导致查询失败）。\nPurchaseDate部分选项分析：\nconvert(varchar, purchase_date,7):此选项将purchase_date转换为格式\"mmm dd,y\"，符合题目要求的日期格式。这是正确的选择。\nconvert(varchar, purchase_date,109):此选项将purchase_date转换为格式\"mon dd y h:miss:mmmAM\"，不符合题目要求的日期格式。\nconvert(varchar,purchase_date，112)：此选项将purchase_date转换为格式\"yyymmdd\"，不符合题目要求的日期格式。\n3. 我选的答案\ntry_cast(item_name as varchar(20)\nconvert(varchar, purchase_date, 7)\n4. 官方答案\ntry_cast(item_name as varchar(20)\nconvert(varchar, purchase_date, 7)\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：官方答案选择了TRY_CAST来确保数据类型转换的安全性，并选择了CONVERT函数的格式代码7来满足日期格式要求。这与我的分析完全一致。",
  "explanationEn": "[Answer source] PDF p.217 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 16,
  "pdfPage": 216,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 16",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 16",
  "pdfQuestionNum": 16,
  "topic": 2
 },
 {
  "id": "dp700-q077",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Degree of copy parallelism",
    "textEn": "Degree of copy parallelism",
    "textZh": "Degree of copy parallelism"
   },
   {
    "id": "B",
    "text": "Fault tolerance",
    "textEn": "Fault tolerance",
    "textZh": "Fault tolerance"
   },
   {
    "id": "C",
    "text": "Enable staging",
    "textEn": "Enable staging",
    "textZh": "Enable staging"
   },
   {
    "id": "D",
    "text": "Enable logging",
    "textEn": "Enable logging",
    "textZh": "Enable logging"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "您正在开发一个名为 Pipeline1 的数据管过。\n您需要添加一个 Copy data 活动，将数据从 Snowflake 数据源复制到 Fabric warehouse。\n您应该配置什么",
  "stemZh": "您正在开发一个名为 Pipeline1 的数据管过。\n您需要添加一个 Copy data 活动，将数据从 Snowflake 数据源复制到 Fabric warehouse。\n您应该配置什么",
  "stemEn": "You are developing a data pipeline named Pipeline1.\nYou need to add a Copy data activity that will copy data from a Snowflake data source to a Fabric warehouse.\nWhat should you configure?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据管道中配置\"Copy data activity\"时，如何正确设置选项以实现从Snowflake数据源到Fabric仓库的数据复制。\n重点关注数据复制过程中的性能优化和正确性保障。\n2. 选项分析\nA.Degree of copy parallelism:错误。虽然设置并行度可以提高数据复制的性能，但它并不是实现从Snowflake到Fabric仓库数据复制的关键配置。\nB.Fault tolerance:错误。容错机制是为了处理数据复制过程中可能出现的错误，但它不是实现数据复制的必要配置。\nC.Enable staging：正确。启用分段（staging）是从Snowflake到Fabric仓库复制数据的关键配置，因为它可以优化数据传输过程，尤其是处理大规模数据时。\nD.Enable logging：错误。启用日志记录可以帮助监控和调试数据复制过程，但它不是实现数据复制的核心配置。\n3. 我的答案\nC. Enable staging\n4. 官方答案\nC. Enable staging\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据管道中配置\"Copy data activity\"时，如何正确设置选项以实现从Snowflake数据源到Fabric仓库的数据复制。\n重点关注数据复制过程中的性能优化和正确性保障。\n2. 选项分析\nA.Degree of copy parallelism:错误。虽然设置并行度可以提高数据复制的性能，但它并不是实现从Snowflake到Fabric仓库数据复制的关键配置。\nB.Fault tolerance:错误。容错机制是为了处理数据复制过程中可能出现的错误，但它不是实现数据复制的必要配置。\nC.Enable staging：正确。启用分段（staging）是从Snowflake到Fabric仓库复制数据的关键配置，因为它可以优化数据传输过程，尤其是处理大规模数据时。\nD.Enable logging：错误。启用日志记录可以帮助监控和调试数据复制过程，但它不是实现数据复制的核心配置。\n3. 我的答案\nC. Enable staging\n4. 官方答案\nC. Enable staging\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是在数据管道中配置\"Copy data activity\"时，如何正确设置选项以实现从Snowflake数据源到Fabric仓库的数据复制。\n重点关注数据复制过程中的性能优化和正确性保障。\n2. 选项分析\nA.Degree of copy parallelism:错误。虽然设置并行度可以提高数据复制的性能，但它并不是实现从Snowflake到Fabric仓库数据复制的关键配置。\nB.Fault tolerance:错误。容错机制是为了处理数据复制过程中可能出现的错误，但它不是实现数据复制的必要配置。\nC.Enable staging：正确。启用分段（staging）是从Snowflake到Fabric仓库复制数据的关键配置，因为它可以优化数据传输过程，尤其是处理大规模数据时。\nD.Enable logging：错误。启用日志记录可以帮助监控和调试数据复制过程，但它不是实现数据复制的核心配置。\n3. 我的答案\nC. Enable staging\n4. 官方答案\nC. Enable staging\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 17,
  "pdfPage": 219,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 17",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 17",
  "pdfQuestionNum": 17,
  "topic": 2
 },
 {
  "id": "dp700-q078",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个包含两个表的 KQL 数据库，分别名为 Stream 和 Reference。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将 join 类型更改为 kind=outer。\n这是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个包含两个表的 KQL 数据库，分别名为 Stream 和 Reference。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将 join 类型更改为 kind=outer。\n这是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You change the join type to kind=outer.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）查询优化，特别是关于 join 类型对查询性能的影响。\n还涉及到数据处理和可视化（如 scatterchart 的渣染）。\n2. 选项分析\nA. Yes 是\n将 join 类型更改为 kind=outer 会导致查询返回所有 Stream 表中的记录，即使它们在 Reference 表中没有匹配项。\n这种更改会增加查询结果的大小，导致处理时间更长，而不是减少运行时间。\n因此，选项 A 是错误的。\nB. No 否\n保持原来的 join 类型为 kind=inner 是正确的，因为它只返回两个表中匹配的记录，从而减少了数据量和处理时间。\n更改为 kind=outer 不会优化查询性能，反而可能导致性能下降。\n因此，选项 B 是正确的。\n3. 我选的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析清晰：更改 join 类型为 kind=outer 不会减少运行时间，反而可能增加处理时间。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）查询优化，特别是关于 join 类型对查询性能的影响。\n还涉及到数据处理和可视化（如 scatterchart 的渣染）。\n2. 选项分析\nA. Yes 是\n将 join 类型更改为 kind=outer 会导致查询返回所有 Stream 表中的记录，即使它们在 Reference 表中没有匹配项。\n这种更改会增加查询结果的大小，导致处理时间更长，而不是减少运行时间。\n因此，选项 A 是错误的。\nB. No 否\n保持原来的 join 类型为 kind=inner 是正确的，因为它只返回两个表中匹配的记录，从而减少了数据量和处理时间。\n更改为 kind=outer 不会优化查询性能，反而可能导致性能下降。\n因此，选项 B 是正确的。\n3. 我选的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析清晰：更改 join 类型为 kind=outer 不会减少运行时间，反而可能增加处理时间。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）查询优化，特别是关于 join 类型对查询性能的影响。\n还涉及到数据处理和可视化（如 scatterchart 的渣染）。\n2. 选项分析\nA. Yes 是\n将 join 类型更改为 kind=outer 会导致查询返回所有 Stream 表中的记录，即使它们在 Reference 表中没有匹配项。\n这种更改会增加查询结果的大小，导致处理时间更长，而不是减少运行时间。\n因此，选项 A 是错误的。\nB. No 否\n保持原来的 join 类型为 kind=inner 是正确的，因为它只返回两个表中匹配的记录，从而减少了数据量和处理时间。\n更改为 kind=outer 不会优化查询性能，反而可能导致性能下降。\n因此，选项 B 是正确的。\n3. 我选的答案\nB. No 否\n4. 官方答案\nB. No 否\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析清晰：更改 join 类型为 kind=outer 不会减少运行时间，反而可能增加处理时间。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 18,
  "pdfPage": 221,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 18",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 18",
  "pdfQuestionNum": 18,
  "topic": 2
 },
 {
  "id": "dp700-q079",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个包含两个表的 KQL 数据库，分别名为 Stream 和 Reference。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将 project 更改为 extend。\n这是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题都包含一个可能满足既定目标的独特解决方案。一些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个包含两个表的 KQL 数据库，分别名为 Stream 和 Reference。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将 project 更改为 extend。\n这是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You change project to extend.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL中的操作符（如extend、project）对查询性能的影响。\n2. 选项分析\nA. Yes 是\n将project改为extend并不会减少查询时间。extend用于添加新的列，而project用于选择和重命名列。两者的功能不同，改用extend不会优化性能。\n因此，选项A是错误的。\nB. No 否\n正确的优化方法应该是减少数据处理的复杂性，例如调整查询顺序或减少数据量，而不是简单地将project改为extend。\n选项B正确，因为更改project为extend并不能达到优化性能的目标。\n3. 我的答案\n我的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：extend和project的功能不同，改用extend不会优化查询性能，因此选择B是正确的。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL中的操作符（如extend、project）对查询性能的影响。\n2. 选项分析\nA. Yes 是\n将project改为extend并不会减少查询时间。extend用于添加新的列，而project用于选择和重命名列。两者的功能不同，改用extend不会优化性能。\n因此，选项A是错误的。\nB. No 否\n正确的优化方法应该是减少数据处理的复杂性，例如调整查询顺序或减少数据量，而不是简单地将project改为extend。\n选项B正确，因为更改project为extend并不能达到优化性能的目标。\n3. 我的答案\n我的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：extend和project的功能不同，改用extend不会优化查询性能，因此选择B是正确的。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL中的操作符（如extend、project）对查询性能的影响。\n2. 选项分析\nA. Yes 是\n将project改为extend并不会减少查询时间。extend用于添加新的列，而project用于选择和重命名列。两者的功能不同，改用extend不会优化性能。\n因此，选项A是错误的。\nB. No 否\n正确的优化方法应该是减少数据处理的复杂性，例如调整查询顺序或减少数据量，而不是简单地将project改为extend。\n选项B正确，因为更改project为extend并不能达到优化性能的目标。\n3. 我的答案\n我的答案是：B. No\n4. 官方答案\n官方答案是：B. No\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：extend和project的功能不同，改用extend不会优化查询性能，因此选择B是正确的。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 19,
  "pdfPage": 224,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 19",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 19",
  "pdfQuestionNum": 19,
  "topic": 2
 },
 {
  "id": "dp700-q080",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 KQL 数据库，其中包含两个名为 Stream 和 Reference 的表。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将过滤器移至第 02 行。\n这是否满足目标？",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 KQL 数据库，其中包含两个名为 Stream 和 Reference 的表。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n两个表都包含数百万行。\n您有以下 KQL 查询集。\n您需要减少运行 KQL 查询集所需的时间。\n解决方案：您将过滤器移至第 02 行。\n这是否满足目标？",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You move the filter to line 02.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL查询的执行顺序，以及如何通过调整查询逻辑来减少数据处理量，从而提高查询效率。\n2. 选项分析\nA. Yes: 正确。将过滤条件（filter Temperature >= 10）提前到第02行，可以减少后续处理的数据量。这样可以在执行 join 和project 操作之前，先过滤掉不符合条件的数据，从而显著提高查询效率。\nB. No: 错误。如果不将过滤条件提前，查询会处理所有数据，包括不符合条件的数据，导致性能下降。因此，选项B不符合优化目标。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：将过滤条件提前可以减少数据量，从而优化查询性能。这是KQL查询优化的常见方法。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL查询的执行顺序，以及如何通过调整查询逻辑来减少数据处理量，从而提高查询效率。\n2. 选项分析\nA. Yes: 正确。将过滤条件（filter Temperature >= 10）提前到第02行，可以减少后续处理的数据量。这样可以在执行 join 和project 操作之前，先过滤掉不符合条件的数据，从而显著提高查询效率。\nB. No: 错误。如果不将过滤条件提前，查询会处理所有数据，包括不符合条件的数据，导致性能下降。因此，选项B不符合优化目标。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：将过滤条件提前可以减少数据量，从而优化查询性能。这是KQL查询优化的常见方法。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL（Kusto Query Language）查询性能。\n重点在于理解KQL查询的执行顺序，以及如何通过调整查询逻辑来减少数据处理量，从而提高查询效率。\n2. 选项分析\nA. Yes: 正确。将过滤条件（filter Temperature >= 10）提前到第02行，可以减少后续处理的数据量。这样可以在执行 join 和project 操作之前，先过滤掉不符合条件的数据，从而显著提高查询效率。\nB. No: 错误。如果不将过滤条件提前，查询会处理所有数据，包括不符合条件的数据，导致性能下降。因此，选项B不符合优化目标。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：将过滤条件提前可以减少数据量，从而优化查询性能。这是KQL查询优化的常见方法。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 20,
  "pdfPage": 227,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 20",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 20",
  "pdfQuestionNum": 20,
  "topic": 2
 },
 {
  "id": "dp700-q081",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "是",
    "textEn": "Yes",
    "textZh": "是"
   },
   {
    "id": "B",
    "text": "否",
    "textEn": "No",
    "textZh": "否"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 KQL数据库，其中包含两个名为 Stream 和 Reference 的表。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n个表都包合\n您有以\n您需要减少运行KQL查询集所需的时间。\n解决方案：您将 make_list() 函数添加到输出列。\n这是否",
  "stemZh": "注意：此问题是一个系列问题的一部分，呈现相同的场景。系列中的每个问题包含一个可能满足既定目标的独特解决方案。某些问题集可能有多个正确解决方案，而其他问题集可能没有正确解决方案。\n在回答本节中的问题后，您将无法返回该问题。因此，这些问题不会出现在审查屏幕中。\n您有一个 KQL数据库，其中包含两个名为 Stream 和 Reference 的表。Stream 包含以下格式的流数据。\nReference 包含以下格式的参考数据。\n个表都包合\n您有以\n您需要减少运行KQL查询集所需的时间。\n解决方案：您将 make_list() 函数添加到输出列。\n这是否",
  "stemEn": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a KQL database that contains two tables named Stream and Reference. Stream contains streaming data in the following format.\nReference contains reference data in the following format.\nBoth tables contain millions of rows.\nYou have the following KQL queryset.\nYou need to reduce how long it takes to run the KQL queryset.\nSolution: You add the make_list() function to the output columns.\nDoes this meet the goal?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL查询性能，特别是在处理大规模数据时的性能改进方法。\n涉及的知识点包括：KQL查询语法、数据流操作（如join、project、filter）、以及函数（如make_listO）的使用。\n2. 选项分析\nA. Yes 是\nmake_listO函数用于将多个值聚合到一个列表中，通常用于减少数据量或生成聚合结果。\n然而，在本题中，make_listO并未直接优化查询性能，因为它并未减少join操作的复杂度或数据流的处理时间。\n此外，make_listO的使用会改变输出数据的结构，而题目并未要求改变输出结构。\n因此,\nB. No 否\n本题的目标是优化查询性能，而make_listO函数并不能有效减少查询时间。\n正确的优化方法可能包括减少join操作的复杂度、使用索引、或者优化数据流的处理顺序。\n因此,\n3. 我的答案\n我的答案是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B。\n原因分析：make_listO函数并未有效优化查询性能，且改变了输出数据结构，不符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL查询性能，特别是在处理大规模数据时的性能改进方法。\n涉及的知识点包括：KQL查询语法、数据流操作（如join、project、filter）、以及函数（如make_listO）的使用。\n2. 选项分析\nA. Yes 是\nmake_listO函数用于将多个值聚合到一个列表中，通常用于减少数据量或生成聚合结果。\n然而，在本题中，make_listO并未直接优化查询性能，因为它并未减少join操作的复杂度或数据流的处理时间。\n此外，make_listO的使用会改变输出数据的结构，而题目并未要求改变输出结构。\n因此,\nB. No 否\n本题的目标是优化查询性能，而make_listO函数并不能有效减少查询时间。\n正确的优化方法可能包括减少join操作的复杂度、使用索引、或者优化数据流的处理顺序。\n因此,\n3. 我的答案\n我的答案是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B。\n原因分析：make_listO函数并未有效优化查询性能，且改变了输出数据结构，不符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化KQL查询性能，特别是在处理大规模数据时的性能改进方法。\n涉及的知识点包括：KQL查询语法、数据流操作（如join、project、filter）、以及函数（如make_listO）的使用。\n2. 选项分析\nA. Yes 是\nmake_listO函数用于将多个值聚合到一个列表中，通常用于减少数据量或生成聚合结果。\n然而，在本题中，make_listO并未直接优化查询性能，因为它并未减少join操作的复杂度或数据流的处理时间。\n此外，make_listO的使用会改变输出数据的结构，而题目并未要求改变输出结构。\n因此,\nB. No 否\n本题的目标是优化查询性能，而make_listO函数并不能有效减少查询时间。\n正确的优化方法可能包括减少join操作的复杂度、使用索引、或者优化数据流的处理顺序。\n因此,\n3. 我的答案\n我的答案是：B\n4. 官方答案\n官方答案是：B\n5. 与官方答案的比较\n我的答案与官方答案一致，均为B。\n原因分析：make_listO函数并未有效优化查询性能，且改变了输出数据结构，不符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 21,
  "pdfPage": 230,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 21",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 21",
  "pdfQuestionNum": 21,
  "topic": 2
 },
 {
  "id": "dp700-q082",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "基于时间的计划",
    "textEn": "a time-based schedule",
    "textZh": "基于时间的计划"
   },
   {
    "id": "B",
    "text": "流式数据流",
    "textEn": "a streaming dataflow",
    "textZh": "流式数据流"
   },
   {
    "id": "C",
    "text": "Blob Storage 操作",
    "textEn": "a blob storage action",
    "textZh": "Blob Storage 操作"
   },
   {
    "id": "D",
    "text": "数据管道",
    "textEn": "a data pipeline",
    "textZh": "数据管道"
   },
   {
    "id": "E",
    "text": "使用 Apache Spark Structured Streaming 的 Notebook",
    "textEn": "a notebook that uses Apache Spark Structured Streaming",
    "textZh": "使用 Apache Spark Structured Streaming 的 Notebook"
   },
   {
    "id": "F",
    "text": "反射项",
    "textEn": "a reflex item",
    "textZh": "反射项"
   }
  ],
  "answer": [
   "D",
   "F"
  ],
  "pdfAnswer": [
   "D",
   "F"
  ],
  "answerSource": "text",
  "stem": "注意：每个正确选择都值一分。",
  "stemZh": "注意：每个正确选择都值一分。",
  "stemEn": "You need to create a workflow for the new book cover images.\nWhich two components should you include in the workflow? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何设计和实现数据处理工作流，特别是针对新到达的文件（如书籍封面图像）的实时处理。\n涉及的技术包括数据管道、流式数据处理、以及Fabric中的工作流组件。\n2. 选项分析\nA. a time-based schedule 基于时间的计划\n错误。基于时间的计划适用于定时任务，而题目要求的是实时处理新到达的书籍封面图像，因此不符合要求。\nB. a streaming dataflow 流式数据流\n错误。流式数据流适用于处理实时流数据（如SEO数据），但题目中提到的是文件处理，而不是流数据处理，因此不适合。\nC. a blob storage action Blob Storage 操作\n错误。虽然图像存储在Azure Blob Storage中，但Blob Storage操作本身并不能构成完整的工作流，需结合其他组件来实现实时处理。\nD. a data pipeline 数据管道\n正确。数据管道是Fabric中用于构建和管理数据工作流的核心组件，可以实现实时处理新到达的文件。\nE. a notebook that uses Apache Spark Structured Streaming 使用 Apache Spark Structured Streaming 的 Notebook错误。虽然Apache Spark Structured Streaming可以处理流数据，但题目要求的是文件处理，而不是流数据处理。\nF. a reflex item 反射项\n正确。反射项是Fabric中用于触发工作流的组件，可以检测到新文件的到达并启动后续处理。\n3. 我选的答案\nD. a data pipeline 数据管道\nreflex\n4. 官方答案\nD. a data pipeline 数据管道\nreflex\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：数据管道负责构建工作流，反射项负责触发工作流以实现实时处理新到达的文件。这两个组件共同满足题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何设计和实现数据处理工作流，特别是针对新到达的文件（如书籍封面图像）的实时处理。\n涉及的技术包括数据管道、流式数据处理、以及Fabric中的工作流组件。\n2. 选项分析\nA. a time-based schedule 基于时间的计划\n错误。基于时间的计划适用于定时任务，而题目要求的是实时处理新到达的书籍封面图像，因此不符合要求。\nB. a streaming dataflow 流式数据流\n错误。流式数据流适用于处理实时流数据（如SEO数据），但题目中提到的是文件处理，而不是流数据处理，因此不适合。\nC. a blob storage action Blob Storage 操作\n错误。虽然图像存储在Azure Blob Storage中，但Blob Storage操作本身并不能构成完整的工作流，需结合其他组件来实现实时处理。\nD. a data pipeline 数据管道\n正确。数据管道是Fabric中用于构建和管理数据工作流的核心组件，可以实现实时处理新到达的文件。\nE. a notebook that uses Apache Spark Structured Streaming 使用 Apache Spark Structured Streaming 的 Notebook错误。虽然Apache Spark Structured Streaming可以处理流数据，但题目要求的是文件处理，而不是流数据处理。\nF. a reflex item 反射项\n正确。反射项是Fabric中用于触发工作流的组件，可以检测到新文件的到达并启动后续处理。\n3. 我选的答案\nD. a data pipeline 数据管道\nreflex\n4. 官方答案\nD. a data pipeline 数据管道\nreflex\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：数据管道负责构建工作流，反射项负责触发工作流以实现实时处理新到达的文件。这两个组件共同满足题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何设计和实现数据处理工作流，特别是针对新到达的文件（如书籍封面图像）的实时处理。\n涉及的技术包括数据管道、流式数据处理、以及Fabric中的工作流组件。\n2. 选项分析\nA. a time-based schedule 基于时间的计划\n错误。基于时间的计划适用于定时任务，而题目要求的是实时处理新到达的书籍封面图像，因此不符合要求。\nB. a streaming dataflow 流式数据流\n错误。流式数据流适用于处理实时流数据（如SEO数据），但题目中提到的是文件处理，而不是流数据处理，因此不适合。\nC. a blob storage action Blob Storage 操作\n错误。虽然图像存储在Azure Blob Storage中，但Blob Storage操作本身并不能构成完整的工作流，需结合其他组件来实现实时处理。\nD. a data pipeline 数据管道\n正确。数据管道是Fabric中用于构建和管理数据工作流的核心组件，可以实现实时处理新到达的文件。\nE. a notebook that uses Apache Spark Structured Streaming 使用 Apache Spark Structured Streaming 的 Notebook错误。虽然Apache Spark Structured Streaming可以处理流数据，但题目要求的是文件处理，而不是流数据处理。\nF. a reflex item 反射项\n正确。反射项是Fabric中用于触发工作流的组件，可以检测到新文件的到达并启动后续处理。\n3. 我选的答案\nD. a data pipeline 数据管道\nreflex\n4. 官方答案\nD. a data pipeline 数据管道\nreflex\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：数据管道负责构建工作流，反射项负责触发工作流以实现实时处理新到达的文件。这两个组件共同满足题目要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 22,
  "pdfPage": 233,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 22",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 22",
  "pdfQuestionNum": 22,
  "topic": 2,
  "caseStudyId": "dp700-case-2",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是界同的。当您准备好回疫问题时，单击“问题”按钮辣回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V- Order Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未能加载时显示：“SQL查询运行失败。\"数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上到达工作时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3) buckets 暴露数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要为新的书籍封面图像创建一个工作流。\n以下两个组件应包含在工作流中。每个正确答案均为解决方案的一部分。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是界同的。当您准备好回疫问题时，单击“问题”按钮辣回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V- Order Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未能加载时显示：“SQL查询运行失败。\"数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上到达工作时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3) buckets 暴露数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要为新的书籍封面图像创建一个工作流。\n以下两个组件应包含在工作流中。每个正确答案均为解决方案的一部分。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q083",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a streaming dataflow",
    "textEn": "a streaming dataflow",
    "textZh": "a streaming dataflow"
   },
   {
    "id": "B",
    "text": "a streaming dataset",
    "textEn": "a streaming dataset",
    "textZh": "a streaming dataset"
   },
   {
    "id": "C",
    "text": "a notebook that uses Apache Spark Structured Streaming",
    "textEn": "a notebook that uses Apache Spark Structured Streaming",
    "textZh": "a notebook that uses Apache Spark Structured Streaming"
   },
   {
    "id": "D",
    "text": "an eventstream",
    "textEn": "an eventstream",
    "textZh": "an eventstream"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，并存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V-Order的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware确定以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您建议数据工程团队使用什么来摄取SEO数据？",
  "stemZh": "要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，并存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于禁用 V-Order的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址登录到一个来宾 Fabric 租户。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware确定以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您建议数据工程团队使用什么来摄取SEO数据？",
  "stemEn": "What should you recommend that the data engineering team use to ingest the SEO data?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据工程团队如何选择合适的工具来实现近实时（NRT）数据处理，特别是针对SEO数据的流式数据处理。\n涉及Fabric服务中的流式数据处理选项，包括Streaming Dataflow、Streaming Dataset、Apache Spark Structured Streaming和Eventstream。\n2. 选项分析\nA. a streaming dataflow\nStreaming Dataflow是Fabric中的一种流式数据处理工具，适合处理简单的流数据转换和加载。\n虽然它可以处理流数据，但它的功能较为基础，可能不适合复杂的近实时数据处理场景。\n因此，此选项不适合处理SEO数据的近实时需求。\nB. a streaming dataset\nStreaming Dataset主要用于Power BI实时仪表板的流数据可视化，而不是用于复杂的流数据处理。\n此选项不适合数据工程团队的需求，因为它无法满足近实时数据处理的要求。\nC. a notebook that uses Apache Spark Structured Streaming Apache Spark Structured Streaming是一种强大的流数据处理框架，适合复杂的流数据处理场景。\n虽然它可以满足近实时数据处理需求，但使用Notebook进行流数据处理可能不符合Fabric的最佳实践，且可能增加开发复杂性。\n此选项不是\nD. an eventstream\nEventstream是Fabric中专门设计用于流数据处理的服务，支持高吞吐量和低延迟的近实时数据处理。\n它是处理SEO数据流的最佳选择，能够满足近实时数据处理的需求。\n此选项正确。\n3. 我选的答案\nD. an eventstream\n4. 官方答案\nD. an eventstream\n5. 与官方答案比较\n我的答案与官方答案一致。\n选择Eventstream的原因是它能够满足近实时数据处理的需求，并且是Fabric中专门设计用于流数据处理的服务。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据工程团队如何选择合适的工具来实现近实时（NRT）数据处理，特别是针对SEO数据的流式数据处理。\n涉及Fabric服务中的流式数据处理选项，包括Streaming Dataflow、Streaming Dataset、Apache Spark Structured Streaming和Eventstream。\n2. 选项分析\nA. a streaming dataflow\nStreaming Dataflow是Fabric中的一种流式数据处理工具，适合处理简单的流数据转换和加载。\n虽然它可以处理流数据，但它的功能较为基础，可能不适合复杂的近实时数据处理场景。\n因此，此选项不适合处理SEO数据的近实时需求。\nB. a streaming dataset\nStreaming Dataset主要用于Power BI实时仪表板的流数据可视化，而不是用于复杂的流数据处理。\n此选项不适合数据工程团队的需求，因为它无法满足近实时数据处理的要求。\nC. a notebook that uses Apache Spark Structured Streaming Apache Spark Structured Streaming是一种强大的流数据处理框架，适合复杂的流数据处理场景。\n虽然它可以满足近实时数据处理需求，但使用Notebook进行流数据处理可能不符合Fabric的最佳实践，且可能增加开发复杂性。\n此选项不是\nD. an eventstream\nEventstream是Fabric中专门设计用于流数据处理的服务，支持高吞吐量和低延迟的近实时数据处理。\n它是处理SEO数据流的最佳选择，能够满足近实时数据处理的需求。\n此选项正确。\n3. 我选的答案\nD. an eventstream\n4. 官方答案\nD. an eventstream\n5. 与官方答案比较\n我的答案与官方答案一致。\n选择Eventstream的原因是它能够满足近实时数据处理的需求，并且是Fabric中专门设计用于流数据处理的服务。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据工程团队如何选择合适的工具来实现近实时（NRT）数据处理，特别是针对SEO数据的流式数据处理。\n涉及Fabric服务中的流式数据处理选项，包括Streaming Dataflow、Streaming Dataset、Apache Spark Structured Streaming和Eventstream。\n2. 选项分析\nA. a streaming dataflow\nStreaming Dataflow是Fabric中的一种流式数据处理工具，适合处理简单的流数据转换和加载。\n虽然它可以处理流数据，但它的功能较为基础，可能不适合复杂的近实时数据处理场景。\n因此，此选项不适合处理SEO数据的近实时需求。\nB. a streaming dataset\nStreaming Dataset主要用于Power BI实时仪表板的流数据可视化，而不是用于复杂的流数据处理。\n此选项不适合数据工程团队的需求，因为它无法满足近实时数据处理的要求。\nC. a notebook that uses Apache Spark Structured Streaming Apache Spark Structured Streaming是一种强大的流数据处理框架，适合复杂的流数据处理场景。\n虽然它可以满足近实时数据处理需求，但使用Notebook进行流数据处理可能不符合Fabric的最佳实践，且可能增加开发复杂性。\n此选项不是\nD. an eventstream\nEventstream是Fabric中专门设计用于流数据处理的服务，支持高吞吐量和低延迟的近实时数据处理。\n它是处理SEO数据流的最佳选择，能够满足近实时数据处理的需求。\n此选项正确。\n3. 我选的答案\nD. an eventstream\n4. 官方答案\nD. an eventstream\n5. 与官方答案比较\n我的答案与官方答案一致。\n选择Eventstream的原因是它能够满足近实时数据处理的需求，并且是Fabric中专门设计用于流数据处理的服务。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 23,
  "pdfPage": 239,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 23",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 23",
  "pdfQuestionNum": 23,
  "topic": 2,
  "caseStudyId": "dp700-case-2",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q084",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "Denormalized into a single product dimension table",
   "The product name and the date"
  ],
  "pdfAnswer": [
   "Denormalized into a single product dimension table",
   "The product name and the date"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "ProductCategory、ProductSubcategory 和 Product 必须",
    "labelEn": "ProductCategory, ProductSubcategory and Product must be",
    "labelZh": "ProductCategory、ProductSubcategory 和 Product 必须",
    "choices": [
     {
      "key": "Added to the model as individual tables",
      "en": "Added to the model as individual tables",
      "zh": "作为单独的表添加到模型中"
     },
     {
      "key": "Denormalized by being added to the SalesOrder table",
      "en": "Denormalized by being added to the SalesOrder table",
      "zh": "通过添加到 SalesOrder 表进行非规范化"
     },
     {
      "key": "Denormalized into a single product dimension table",
      "en": "Denormalized into a single product dimension table",
      "zh": "非规范化为单个产品维度表"
     }
    ],
    "answer": "Denormalized into a single product dimension table"
   },
   {
    "id": "2",
    "label": "联接键必须是",
    "labelEn": "The joining key must be",
    "labelZh": "联接键必须是",
    "choices": [
     {
      "key": "The product name and the date",
      "en": "The product name and the date",
      "zh": "产品名称和日期"
     },
     {
      "key": "The unique system generated identifier",
      "en": "The unique system generated identifier",
      "zh": "系统生成的唯一标识符"
     },
     {
      "key": "The product category name",
      "en": "The product category name",
      "zh": "产品类别名称"
     }
    ],
    "answer": "The product name and the date"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您有一个名为 DW1 的 Fabric 数据仓库，其中包含四个暂存表：ProductCategory、ProductSubcategory、Product 和 SalesOrder。\nProductCategory、ProductSubcategory 和 Product 经常用于分析查询。\n您需要为 DW1 实现一个星型架构。解决方案必须尽量减少开发工作量。\n您应该使用哪种设计方法？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您有一个名为 DW1 的 Fabric 数据仓库，其中包含四个暂存表：ProductCategory、ProductSubcategory、Product 和 SalesOrder。\nProductCategory、ProductSubcategory 和 Product 经常用于分析查询。\n您需要为 DW1 实现一个星型架构。解决方案必须尽量减少开发工作量。\n您应该使用哪种设计方法？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou have a Fabric warehouse named DW1 that contains four staging tables named ProductCategory, ProductSubcategory, Product, and SalesOrder. ProductCategory, ProductSubcategory, and Product are used often in analytical queries.\nYou need to implement a star schema for DW1. The solution must minimize development effort.\nWhich design approach should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 246 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题主要考察数据仓库设计中的星型模型（Star Schema）的概念和实现方法。\n重点在于如何设计维度表和事实表，以及如何选择合适的连接键。\n2. 选项分析\n关于“ProductCategory, ProductSubcategory and Product must be”选项：\nAdded to the model as individual tables：错误。星型模型的设计原则是将相关的维度数据整合到一个维度表中，以简化查询和提高性能。如果将这些表单独保留为独立表，会增加查询复杂性，不符合星型模型的设计目标。\nDenormalized by being added to the SalesOrder table：错误。将维度数据直接去规范化到事实表（SalesOrder）中会导致数据余，并且不符合星型模型的设计原则。维度表和事实表应该分开设计。\nDenormalized into a single product dimension table：正确。星型模型的设计要求将相关的维度数据去规范化到一个单一的维度表中，这样可以简化查询并提高性能。\n关于“The joining key must be”选项：\nThe product name and the date：正确。在星型模型中，连接键通常是业务相关的字段，例如产品名称和日期，这样可以方便地进行查询和分析。\nThe unique system generated identifier：错误。虽然系统生成的唯一标识符可以用于连接，但它通常不适合分析查询，因为它缺乏业务意义，无法直接用于分析。\nThe product category name：错误。产品类别名称虽然有业务意义，但它通常不是唯一的，无法作为连接键使用。\n3. 我选的答案\nDenormalized into a single product dimension table\nThe product name and the date\n4. 官方答案\nDenormalized into a single product dimension table\nThe product name and the date\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationZh": "【答案来源】PDF 第 246 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题主要考察数据仓库设计中的星型模型（Star Schema）的概念和实现方法。\n重点在于如何设计维度表和事实表，以及如何选择合适的连接键。\n2. 选项分析\n关于“ProductCategory, ProductSubcategory and Product must be”选项：\nAdded to the model as individual tables：错误。星型模型的设计原则是将相关的维度数据整合到一个维度表中，以简化查询和提高性能。如果将这些表单独保留为独立表，会增加查询复杂性，不符合星型模型的设计目标。\nDenormalized by being added to the SalesOrder table：错误。将维度数据直接去规范化到事实表（SalesOrder）中会导致数据余，并且不符合星型模型的设计原则。维度表和事实表应该分开设计。\nDenormalized into a single product dimension table：正确。星型模型的设计要求将相关的维度数据去规范化到一个单一的维度表中，这样可以简化查询并提高性能。\n关于“The joining key must be”选项：\nThe product name and the date：正确。在星型模型中，连接键通常是业务相关的字段，例如产品名称和日期，这样可以方便地进行查询和分析。\nThe unique system generated identifier：错误。虽然系统生成的唯一标识符可以用于连接，但它通常不适合分析查询，因为它缺乏业务意义，无法直接用于分析。\nThe product category name：错误。产品类别名称虽然有业务意义，但它通常不是唯一的，无法作为连接键使用。\n3. 我选的答案\nDenormalized into a single product dimension table\nThe product name and the date\n4. 官方答案\nDenormalized into a single product dimension table\nThe product name and the date\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有需要重新思考的地方。",
  "explanationEn": "[Answer source] PDF p.246 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 24,
  "pdfPage": 245,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 24",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 24",
  "pdfQuestionNum": 24,
  "topic": 2
 },
 {
  "id": "dp700-q085",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "Dataflow Gen2 dataflow",
   "Notebooks",
   "Data pipelines"
  ],
  "pdfAnswer": [
   "Dataflow Gen2 dataflow",
   "Notebooks",
   "Data pipelines"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Team1",
    "labelEn": "Team1",
    "labelZh": "Team1",
    "choices": [
     {
      "key": "Data pipelines",
      "en": "Data pipelines",
      "zh": "Data pipelines"
     },
     {
      "key": "Notebooks",
      "en": "Notebooks",
      "zh": "Notebooks"
     },
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     }
    ],
    "answer": "Dataflow Gen2 dataflow"
   },
   {
    "id": "2",
    "label": "Team2",
    "labelEn": "Team2",
    "labelZh": "Team2",
    "choices": [
     {
      "key": "Data pipelines",
      "en": "Data pipelines",
      "zh": "Data pipelines"
     },
     {
      "key": "Notebooks",
      "en": "Notebooks",
      "zh": "Notebooks"
     },
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     }
    ],
    "answer": "Notebooks"
   },
   {
    "id": "3",
    "label": "Team3",
    "labelEn": "Team3",
    "labelZh": "Team3",
    "choices": [
     {
      "key": "Data pipelines",
      "en": "Data pipelines",
      "zh": "Data pipelines"
     },
     {
      "key": "Notebooks",
      "en": "Notebooks",
      "zh": "Notebooks"
     },
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     }
    ],
    "answer": "Data pipelines"
   }
  ],
  "answerSource": "image",
  "stem": "热点\n-\n贵公司有三个新成立的数据工程团队，分别是 Team1、Team2 和 Team3，计划使用 Fabric。这些团队具有以下角色：\n• Team1 的成员目前使用 Microsoft Power BI。该团队希望通过低代码方式转换数据。\n• Team2 的成员具有 Python 编程背景。该团队希望使用 PySpark 代码转换数据。\n·Team3 的成员目前使用 Azure Data Factory。该团队希望以最少的努力在源环境和目标环境之间移动数据。\n您需要根据团队的当前角色推荐工具。\n您应该为每个团队推荐什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "热点\n-\n贵公司有三个新成立的数据工程团队，分别是 Team1、Team2 和 Team3，计划使用 Fabric。这些团队具有以下角色：\n• Team1 的成员目前使用 Microsoft Power BI。该团队希望通过低代码方式转换数据。\n• Team2 的成员具有 Python 编程背景。该团队希望使用 PySpark 代码转换数据。\n·Team3 的成员目前使用 Azure Data Factory。该团队希望以最少的努力在源环境和目标环境之间移动数据。\n您需要根据团队的当前角色推荐工具。\n您应该为每个团队推荐什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYour company has three newly created data engineering teams named Team1, Team2, and Team3 that plan to use Fabric. The teams have the following personas:\n• Team1 consists of members who currently use Microsoft Power BI. The team wants to transform data by using by a low-code approach.\n• Team2 consists of members that have a background in Python programming. The team wants to use PySpark code to transform data.\n• Team3 consists of members who currently use Azure Data Factory. The team wants to move data between source and sink environments by using the least amount of effort.\nYou need to recommend tools for the teams based on their current personas.\nWhat should you recommend for each team? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 248 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是Microsoft Fabric中不同工具的适用场景，以及如何根据团队的技能和需求选择合适的工具。\n涉及的工具包括：Dataflow Gen2、Notebooks、Data Pipelines。\n2. 选项分析\nTeam1: Dataflow Gen2 dataflow\n正确：Team1成员主要使用Power BI，并希望通过低代码方式进行数据转换。Dataflow Gen2是专为低代码数据转换设计的工具，与Power BI集成良好，非常适合此团队。\n错误：Data pipelines和Notebooks更适合编程或复杂数据处理场景，不符合Team1的低代码需求。\nTeam2: Notebooks\n正确：Team2成员有Python编程背景，并希望使用PySpark代码进行数据转换。Notebooks支持Python和PySpark，是数据科学和工程师的首选工具。\n错误：Data pipelines和Dataflow Gen2不支持直接编写PySpark代码，无法满足Team2的需求。\nTeam3: Data pipelines\n正确：Team3成员熟悉Azure Data Factory，并希望以最少的努力在源和目标环境之间移动数据。Data pipelines是Microsoft Fabric中类似于Azure Data Factory的工具，专为数据移动和集成设计。\n错误：Notebooks和Dataflow Gen2主要用于数据转换或分析，不适合Team3的需求。\n3. 我的答案\nTeam1: Dataflow Gen2 dataflow\nTeam2: Notebooks\nTeam3: Data pipelines\n4. 官方答案\nTeam1: Dataflow Gen2 dataflow\nTeam2: Notebooks\nTeam3: Data pipelines\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有需要重新思考或调整的地方。",
  "explanationZh": "【答案来源】PDF 第 248 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是Microsoft Fabric中不同工具的适用场景，以及如何根据团队的技能和需求选择合适的工具。\n涉及的工具包括：Dataflow Gen2、Notebooks、Data Pipelines。\n2. 选项分析\nTeam1: Dataflow Gen2 dataflow\n正确：Team1成员主要使用Power BI，并希望通过低代码方式进行数据转换。Dataflow Gen2是专为低代码数据转换设计的工具，与Power BI集成良好，非常适合此团队。\n错误：Data pipelines和Notebooks更适合编程或复杂数据处理场景，不符合Team1的低代码需求。\nTeam2: Notebooks\n正确：Team2成员有Python编程背景，并希望使用PySpark代码进行数据转换。Notebooks支持Python和PySpark，是数据科学和工程师的首选工具。\n错误：Data pipelines和Dataflow Gen2不支持直接编写PySpark代码，无法满足Team2的需求。\nTeam3: Data pipelines\n正确：Team3成员熟悉Azure Data Factory，并希望以最少的努力在源和目标环境之间移动数据。Data pipelines是Microsoft Fabric中类似于Azure Data Factory的工具，专为数据移动和集成设计。\n错误：Notebooks和Dataflow Gen2主要用于数据转换或分析，不适合Team3的需求。\n3. 我的答案\nTeam1: Dataflow Gen2 dataflow\nTeam2: Notebooks\nTeam3: Data pipelines\n4. 官方答案\nTeam1: Dataflow Gen2 dataflow\nTeam2: Notebooks\nTeam3: Data pipelines\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有需要重新思考或调整的地方。",
  "explanationEn": "[Answer source] PDF p.248 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 25,
  "pdfPage": 247,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 25",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 25",
  "pdfQuestionNum": 25,
  "topic": 2
 },
 {
  "id": "dp700-q086",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "A T-SQL statement",
   "A notebook",
   "Dataflow Gen2 dataflow"
  ],
  "pdfAnswer": [
   "A T-SQL statement",
   "A notebook",
   "Dataflow Gen2 dataflow"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Dataset1",
    "labelEn": "Dataset1",
    "labelZh": "Dataset1",
    "choices": [
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     },
     {
      "key": "A notebook",
      "en": "A notebook",
      "zh": "A notebook"
     },
     {
      "key": "A T-SQL statement",
      "en": "A T-SQL statement",
      "zh": "A T-SQL statement"
     }
    ],
    "answer": "A T-SQL statement"
   },
   {
    "id": "2",
    "label": "Dataset2",
    "labelEn": "Dataset2",
    "labelZh": "Dataset2",
    "choices": [
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     },
     {
      "key": "A notebook",
      "en": "A notebook",
      "zh": "A notebook"
     },
     {
      "key": "A T-SQL statement",
      "en": "A T-SQL statement",
      "zh": "A T-SQL statement"
     }
    ],
    "answer": "A notebook"
   },
   {
    "id": "3",
    "label": "Dataset3",
    "labelEn": "Dataset3",
    "labelZh": "Dataset3",
    "choices": [
     {
      "key": "Dataflow Gen2 dataflow",
      "en": "Dataflow Gen2 dataflow",
      "zh": "Dataflow Gen2 dataflow"
     },
     {
      "key": "A KQL queryset",
      "en": "A KQL queryset",
      "zh": "A KQL queryset"
     },
     {
      "key": "A T-SQL statement",
      "en": "A T-SQL statement",
      "zh": "A T-SQL statement"
     }
    ],
    "answer": "Dataflow Gen2 dataflow"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您计划使用 Fabric 处理以下三个数据集：\n数据集1：此数据集将添加到Fabric中，并且在源和目标之间将具有唯一的主键。唯一的主键将是一个整数，从1开始并以1的增量递增。\n数据集2：此数据集包含使用批量数据传输的半结构化数据。数据集必须在源和目标之间通过一个过程进行处理。数据转换过程将包括使用自定义可视化来理解和处理数据集，并处于开发模式。\n数据集3：此数据集位于lakehouse 中。数据将以批量加载。数据转换过程将在加载过程中包括基于行的窗口函数。\n您需要确定为这些数据集使用哪种类型的项目。解决方案必须尽量减少开发工作量，并尽可能使用内置功能。\n您应该为每个数据集选择什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您计划使用 Fabric 处理以下三个数据集：\n数据集1：此数据集将添加到Fabric中，并且在源和目标之间将具有唯一的主键。唯一的主键将是一个整数，从1开始并以1的增量递增。\n数据集2：此数据集包含使用批量数据传输的半结构化数据。数据集必须在源和目标之间通过一个过程进行处理。数据转换过程将包括使用自定义可视化来理解和处理数据集，并处于开发模式。\n数据集3：此数据集位于lakehouse 中。数据将以批量加载。数据转换过程将在加载过程中包括基于行的窗口函数。\n您需要确定为这些数据集使用哪种类型的项目。解决方案必须尽量减少开发工作量，并尽可能使用内置功能。\n您应该为每个数据集选择什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou plan to process the following three datasets by using Fabric:\nDataset1: This dataset will be added to Fabric and will have a unique primary key between the source and the destination. The unique primary key will be an integer and will start from 1 and have an increment of 1.\nDataset2: This dataset contains semi-structured data that uses bulk data transfer. The dataset must be handled in one process between the source and the destination. The data transformation process will include the use of custom visuals to understand and work with the dataset in development mode.\nDataset3: This dataset is in a lakehouse. The data will be bulk loaded. The data transformation process will include row-based windowing functions during the loading process.\nYou need to identify which type of item to use for the datasets. The solution must minimize development effort and use built-in functionality, when possible.\nWhat should you identify for each dataset? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 251 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDataset1：考察如何处理具有唯一主键的数据集，使用适合的工具进行数据加载和处理。\nDataset2：考察如何处理半结构化数据集，使用开发模式下的可视化工具进行数据转换。\nDataset3：考察如何处理湖仓数据，使用窗口函数进行行级数据转换。\n2. 选项分析\nDataset1\nDataflow Gen2 dataflow：错误。Dataflow Gen2适用于复杂的ETL流程，但题目要求处理具有唯一主键的数据集，且主键是整数递增，这种场景更适合使用T-SQL进行直接处理。\nA notebook：错误。Notebook通常用于交互式数据分析或复杂的开发任务，而此场景仅需要简单的主键处理，Notebook显得过于复杂。\nA T-SQL statement：正确。T-SQL可以直接处理具有唯一主键的数据集，支持高效的插入和更新操作，符合题目要求。\nDataset2\nDataflow Gen2 dataflow：错误。虽然Dataflow Gen2支持数据转换，但题目要求使用开发模式下的可视化工具，这更适合Notebook的交互式开发环境。\nA notebook：正确。Notebook支持处理半结构化数据，并允许使用自定义可视化工具进行开发和数据转换，完全符合题目要求。\nA T-SQL statement：错误。T-SQL主要用于结构化数据的处理，不适合处理半结构化数据和开发模式下的可视化需求。\nDataset3\nDataflow Gen2 dataflow：正确。Dataflow Gen2支持湖仓数据的处理，并且内置了窗口函数功能，可以高效地进行行级数据转符合题目A KQL queryset：错误。KQL主要用于查询日志和监控数据，不适合湖仓数据的处理和窗口函数的应用场景。\nA T-SQL statement：错误。虽然T-SQL支持窗口函数，但题目明确提到数据在湖仓中，Dataflow Gen2更适合湖仓数据的处理。\n3. 我的答案\nDataset1: A T-SQL statement\nDataset2: A notebook\nDataset3: Dataflow Gen2 dataflow\n4. 官方答案\nDataset1: A T-SQL statement\nDataset2: A notebook\nDataset3: Dataflow Gen2 dataflow\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有需要重新思考的地方。",
  "explanationZh": "【答案来源】PDF 第 251 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDataset1：考察如何处理具有唯一主键的数据集，使用适合的工具进行数据加载和处理。\nDataset2：考察如何处理半结构化数据集，使用开发模式下的可视化工具进行数据转换。\nDataset3：考察如何处理湖仓数据，使用窗口函数进行行级数据转换。\n2. 选项分析\nDataset1\nDataflow Gen2 dataflow：错误。Dataflow Gen2适用于复杂的ETL流程，但题目要求处理具有唯一主键的数据集，且主键是整数递增，这种场景更适合使用T-SQL进行直接处理。\nA notebook：错误。Notebook通常用于交互式数据分析或复杂的开发任务，而此场景仅需要简单的主键处理，Notebook显得过于复杂。\nA T-SQL statement：正确。T-SQL可以直接处理具有唯一主键的数据集，支持高效的插入和更新操作，符合题目要求。\nDataset2\nDataflow Gen2 dataflow：错误。虽然Dataflow Gen2支持数据转换，但题目要求使用开发模式下的可视化工具，这更适合Notebook的交互式开发环境。\nA notebook：正确。Notebook支持处理半结构化数据，并允许使用自定义可视化工具进行开发和数据转换，完全符合题目要求。\nA T-SQL statement：错误。T-SQL主要用于结构化数据的处理，不适合处理半结构化数据和开发模式下的可视化需求。\nDataset3\nDataflow Gen2 dataflow：正确。Dataflow Gen2支持湖仓数据的处理，并且内置了窗口函数功能，可以高效地进行行级数据转符合题目A KQL queryset：错误。KQL主要用于查询日志和监控数据，不适合湖仓数据的处理和窗口函数的应用场景。\nA T-SQL statement：错误。虽然T-SQL支持窗口函数，但题目明确提到数据在湖仓中，Dataflow Gen2更适合湖仓数据的处理。\n3. 我的答案\nDataset1: A T-SQL statement\nDataset2: A notebook\nDataset3: Dataflow Gen2 dataflow\n4. 官方答案\nDataset1: A T-SQL statement\nDataset2: A notebook\nDataset3: Dataflow Gen2 dataflow\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n没有需要重新思考的地方。",
  "explanationEn": "[Answer source] PDF p.251 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 26,
  "pdfPage": 250,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 26",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 26",
  "pdfQuestionNum": 26,
  "topic": 2
 },
 {
  "id": "dp700-q087",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   ".whenMatchedUpdate(",
   ".whenNotMatchedInsert(",
   ".whenNotMatchedBySourceUpdate("
  ],
  "pdfAnswer": [
   ".whenMatchedUpdate(",
   ".whenNotMatchedInsert(",
   ".whenNotMatchedBySourceUpdate("
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": ".whenMatchedInsert(",
      "en": ".whenMatchedInsert(",
      "zh": ".whenMatchedInsert("
     },
     {
      "key": ".whenMatchedUpdate(",
      "en": ".whenMatchedUpdate(",
      "zh": ".whenMatchedUpdate("
     },
     {
      "key": ".whenNotMatchedBySourceInsert(",
      "en": ".whenNotMatchedBySourceInsert(",
      "zh": ".whenNotMatchedBySourceInsert("
     },
     {
      "key": ".whenNotMatchedBySourceUpdate(",
      "en": ".whenNotMatchedBySourceUpdate(",
      "zh": ".whenNotMatchedBySourceUpdate("
     },
     {
      "key": ".whenNotMatchedInsert(",
      "en": ".whenNotMatchedInsert(",
      "zh": ".whenNotMatchedInsert("
     },
     {
      "key": ".whenNotMatchedUpdate(",
      "en": ".whenNotMatchedUpdate(",
      "zh": ".whenNotMatchedUpdate("
     }
    ],
    "answer": ".whenMatchedUpdate("
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": ".whenMatchedInsert(",
      "en": ".whenMatchedInsert(",
      "zh": ".whenMatchedInsert("
     },
     {
      "key": ".whenMatchedUpdate(",
      "en": ".whenMatchedUpdate(",
      "zh": ".whenMatchedUpdate("
     },
     {
      "key": ".whenNotMatchedBySourceInsert(",
      "en": ".whenNotMatchedBySourceInsert(",
      "zh": ".whenNotMatchedBySourceInsert("
     },
     {
      "key": ".whenNotMatchedBySourceUpdate(",
      "en": ".whenNotMatchedBySourceUpdate(",
      "zh": ".whenNotMatchedBySourceUpdate("
     },
     {
      "key": ".whenNotMatchedInsert(",
      "en": ".whenNotMatchedInsert(",
      "zh": ".whenNotMatchedInsert("
     },
     {
      "key": ".whenNotMatchedUpdate(",
      "en": ".whenNotMatchedUpdate(",
      "zh": ".whenNotMatchedUpdate("
     }
    ],
    "answer": ".whenNotMatchedInsert("
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": ".whenMatchedInsert(",
      "en": ".whenMatchedInsert(",
      "zh": ".whenMatchedInsert("
     },
     {
      "key": ".whenMatchedUpdate(",
      "en": ".whenMatchedUpdate(",
      "zh": ".whenMatchedUpdate("
     },
     {
      "key": ".whenNotMatchedBySourceInsert(",
      "en": ".whenNotMatchedBySourceInsert(",
      "zh": ".whenNotMatchedBySourceInsert("
     },
     {
      "key": ".whenNotMatchedBySourceUpdate(",
      "en": ".whenNotMatchedBySourceUpdate(",
      "zh": ".whenNotMatchedBySourceUpdate("
     },
     {
      "key": ".whenNotMatchedInsert(",
      "en": ".whenNotMatchedInsert(",
      "zh": ".whenNotMatchedInsert("
     },
     {
      "key": ".whenNotMatchedUpdate(",
      "en": ".whenNotMatchedUpdate(",
      "zh": ".whenNotMatchedUpdate("
     }
    ],
    "answer": ".whenNotMatchedBySourceUpdate("
   }
  ],
  "template": "...\n(targetDF\n  .merge(sourceDF, \"sourceDF.Key\" = \"targetDF.Key\")\n  {{1}}\n    set = {\"targetDF.LastModified\": \"sourceDF.LastModified\"}\n  )\n  {{2}}\n    values = {\n      \"targetDF.Key\": \"sourceDF.Key\",\n      \"targetDF.LastModified\": \"sourceDF.LastModified\",\n      \"targetDF.Status\": \"sourceDF.Status\"\n    }\n  )\n  {{3}}\n    condition=\"targetDF.LastModified > (current_date() - INTERVAL '7' DAY)\",\n    set = {\"targetDF.Status\": \"'inactive'\"}\n  )\n  .execute()\n)\n...",
  "templateEn": "...\n(targetDF\n  .merge(sourceDF, \"sourceDF.Key\" = \"targetDF.Key\")\n  {{1}}\n    set = {\"targetDF.LastModified\": \"sourceDF.LastModified\"}\n  )\n  {{2}}\n    values = {\n      \"targetDF.Key\": \"sourceDF.Key\",\n      \"targetDF.LastModified\": \"sourceDF.LastModified\",\n      \"targetDF.Status\": \"sourceDF.Status\"\n    }\n  )\n  {{3}}\n    condition=\"targetDF.LastModified > (current_date() - INTERVAL '7' DAY)\",\n    set = {\"targetDF.Status\": \"'inactive'\"}\n  )\n  .execute()\n)\n...",
  "templateZh": "...\n(targetDF\n  .merge(sourceDF, \"sourceDF.Key\" = \"targetDF.Key\")\n  {{1}}\n    set = {\"targetDF.LastModified\": \"sourceDF.LastModified\"}\n  )\n  {{2}}\n    values = {\n      \"targetDF.Key\": \"sourceDF.Key\",\n      \"targetDF.LastModified\": \"sourceDF.LastModified\",\n      \"targetDF.Status\": \"sourceDF.Status\"\n    }\n  )\n  {{3}}\n    condition=\"targetDF.LastModified > (current_date() - INTERVAL '7' DAY)\",\n    set = {\"targetDF.Status\": \"'inactive'\"}\n  )\n  .execute()\n)\n...",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "热点\n-\n您有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。Lakehouse1 包含一个名为 Status_Target 的表，该表具有以下列：\n• Key\n• Status\n• LastModified\n数据源包含一个名为 Status_Source 的表，该表与 Status_Target 具有相同的列。 Status_Source 用于填充 Status_Target。\n在一个名为 Notebook1 的笔记本中，您将 Status_Source 加载到名为 sourceDF 的 DataFrame 中，并将 Status_Target 加载到名为targetDF 的 DataFrame 中。\n您需要使用 Notebook1实现增量加载模式。解决方案必须满足以下要求：\n• 对于所有具有相同 key 值的匹配记录，将 Status_Target 中 LastModified 的值更新为 Status_Source 中 LastModified 的值。\n• 插入所有存在于 Status_Source 中但不存在于 Status_Target 中的记录。\n·将 Status_Target 中 Status 的值设置为 inactive，针对所有最后修改时间超过七天且不存在于 Status_Source 中的记录。\n您应该如何完成语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemZh": "热点\n-\n您有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。Lakehouse1 包含一个名为 Status_Target 的表，该表具有以下列：\n• Key\n• Status\n• LastModified\n数据源包含一个名为 Status_Source 的表，该表与 Status_Target 具有相同的列。 Status_Source 用于填充 Status_Target。\n在一个名为 Notebook1 的笔记本中，您将 Status_Source 加载到名为 sourceDF 的 DataFrame 中，并将 Status_Target 加载到名为targetDF 的 DataFrame 中。\n您需要使用 Notebook1实现增量加载模式。解决方案必须满足以下要求：\n• 对于所有具有相同 key 值的匹配记录，将 Status_Target 中 LastModified 的值更新为 Status_Source 中 LastModified 的值。\n• 插入所有存在于 Status_Source 中但不存在于 Status_Target 中的记录。\n·将 Status_Target 中 Status 的值设置为 inactive，针对所有最后修改时间超过七天且不存在于 Status_Source 中的记录。\n您应该如何完成语句？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemEn": "-\nYou have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a table named Status_Target that has the following columns:\n• Key\n• Status\n• LastModified\nThe data source contains a table named Status_Source that has the same columns as Status_Target. Status_Source is used to populate Status_Target.\nIn a notebook name Notebook1, you load Status_Source to a DataFrame named sourceDF and Status_Target to a DataFrame named targetDF.\nYou need to implement an incremental loading pattern by using Notebook1. The solution must meet the following requirements:\n• For all the matching records that have the same value of key, update the value of LastModified in Status_Target to the value of LastModified in Status_Source.\n• Insert all the records that exist in Status_Source that do NOT exist in Status_Target.\n• Set the value of Status in Status_Target to inactive for all the records that were last modified more than seven days ago and that do NOT exist in Status_Source.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 256 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在数据湖中使用增量加载模式（Incremental Loading Pattern）的能力。\n重点包括数据合并（merge）、匹配记录更新（whenMatchedUpdate）、插入新记录（whenNotMatchedinsert）、以及处理不匹配记录的更新（whenNotMatchedBySourceUpdate）。\n2. 选项分析\nwhenMatchedUpdate：正确。此选项用于更新匹配记录的字段值。根据题目要求，对于所有匹配记录（key相同），需要将Status_Target表中的LastModified更新为Status_Source表中的LastModified。\nwhenNotMatchedinsert：正确。此选项用于插入Status_Source中存在但Status_Target中不存在的记录。根据题目要求，需要插入所有不存在于Status_Target中的记录。\nwhenNotMatchedBySourceUpdate:正确。此选项用于更新Status_Target中存在但Status_Source中不存在的记录。根据题目要求，需要将Status_Target中LastModified超过7天且不存在于Status_Source中的记录的Status字段设置为\"inactive。\n其他选项：错误。其他选项未能满足题目中明确的增量加载模式需求，或者语义不符合题目要求。\n3. 我选的答案\n1. whenMatchedUpdate\n2. whenNotMatchedInsert\n3. whenNotMatchedBySourceUpdate\n4. 官方答案\n1. whenMatchedUpdate\n2. whenNotMatchedInsert\n3. whenNotMatchedBySourceUpdate\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：官方答案正确地实现了题目要求的增量加载模式，包括匹配记录更新、插入新记录以及处理不匹配记录的更新。",
  "explanationZh": "【答案来源】PDF 第 256 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在数据湖中使用增量加载模式（Incremental Loading Pattern）的能力。\n重点包括数据合并（merge）、匹配记录更新（whenMatchedUpdate）、插入新记录（whenNotMatchedinsert）、以及处理不匹配记录的更新（whenNotMatchedBySourceUpdate）。\n2. 选项分析\nwhenMatchedUpdate：正确。此选项用于更新匹配记录的字段值。根据题目要求，对于所有匹配记录（key相同），需要将Status_Target表中的LastModified更新为Status_Source表中的LastModified。\nwhenNotMatchedinsert：正确。此选项用于插入Status_Source中存在但Status_Target中不存在的记录。根据题目要求，需要插入所有不存在于Status_Target中的记录。\nwhenNotMatchedBySourceUpdate:正确。此选项用于更新Status_Target中存在但Status_Source中不存在的记录。根据题目要求，需要将Status_Target中LastModified超过7天且不存在于Status_Source中的记录的Status字段设置为\"inactive。\n其他选项：错误。其他选项未能满足题目中明确的增量加载模式需求，或者语义不符合题目要求。\n3. 我选的答案\n1. whenMatchedUpdate\n2. whenNotMatchedInsert\n3. whenNotMatchedBySourceUpdate\n4. 官方答案\n1. whenMatchedUpdate\n2. whenNotMatchedInsert\n3. whenNotMatchedBySourceUpdate\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：官方答案正确地实现了题目要求的增量加载模式，包括匹配记录更新、插入新记录以及处理不匹配记录的更新。",
  "explanationEn": "[Answer source] PDF p.256 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 27,
  "pdfPage": 253,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 27",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 27",
  "pdfQuestionNum": 27,
  "topic": 2
 },
 {
  "id": "dp700-q088",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "drag",
  "options": [],
  "answer": [
   "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
   "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
   "Add a Copy data activity as an inner activity to the iterator activity."
  ],
  "pdfAnswer": [
   "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
   "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
   "Add a Copy data activity as an inner activity to the iterator activity."
  ],
  "boxes": [
   {
    "id": "1",
    "label": "第 1 步",
    "labelEn": "Step 1",
    "labelZh": "第 1 步",
    "choices": [
     {
      "key": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "en": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "zh": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy."
     },
     {
      "key": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "en": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "zh": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy."
     },
     {
      "key": "Add a Copy data activity as an inner activity to the iterator activity.",
      "en": "Add a Copy data activity as an inner activity to the iterator activity.",
      "zh": "Add a Copy data activity as an inner activity to the iterator activity."
     }
    ],
    "answer": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy."
   },
   {
    "id": "2",
    "label": "第 2 步",
    "labelEn": "Step 2",
    "labelZh": "第 2 步",
    "choices": [
     {
      "key": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "en": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "zh": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy."
     },
     {
      "key": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "en": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "zh": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy."
     },
     {
      "key": "Add a Copy data activity as an inner activity to the iterator activity.",
      "en": "Add a Copy data activity as an inner activity to the iterator activity.",
      "zh": "Add a Copy data activity as an inner activity to the iterator activity."
     }
    ],
    "answer": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
   },
   {
    "id": "3",
    "label": "第 3 步",
    "labelEn": "Step 3",
    "labelZh": "第 3 步",
    "choices": [
     {
      "key": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "en": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy.",
      "zh": "Add a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy."
     },
     {
      "key": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "en": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.",
      "zh": "Add an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables."
     },
     {
      "key": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "en": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.",
      "zh": "Add a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy."
     },
     {
      "key": "Add a Copy data activity as an inner activity to the iterator activity.",
      "en": "Add a Copy data activity as an inner activity to the iterator activity.",
      "zh": "Add a Copy data activity as an inner activity to the iterator activity."
     }
    ],
    "answer": "Add a Copy data activity as an inner activity to the iterator activity."
   }
  ],
  "answerSource": "image",
  "stem": "-\n您正在使用 Fabric data pipeline 构建数据加载模式。源是包含 25 个表的 Azure SQL database。目标是一个 lakehouse。\n在一个仓库中，您创建了一个名为 Control.Object 的控制表，如展览所示。（单击\"展览\"选项卡。）您需要构建一个数据管道，通过单次执行支持动态摄取控制表中列出的表。\n```\n# | schema_name | table_name\n1 | Warehouse | ColdRoomTemperatures\n2 | Warehouse | Colors\n3 | Warehouse | PackageTypes\n4 | Warehouse | StockGroups\n5 | Warehouse | StockItems\n6 | dbo | BuildVersion\n7 | dbo | ErrorLog\n8 | Application | SystemParameters\n9 | Purchasing | PurchaseOrderLines\n10 | Purchasing | PurchaseOrders\n```\n以下哪三个操作应按顺序执行？要回答，请将适当的操作从操作列表移动到答案区域，并按正确顺序排列。",
  "stemZh": "-\n您正在使用 Fabric data pipeline 构建数据加载模式。源是包含 25 个表的 Azure SQL database。目标是一个 lakehouse。\n在一个仓库中，您创建了一个名为 Control.Object 的控制表，如展览所示。（单击\"展览\"选项卡。）您需要构建一个数据管道，通过单次执行支持动态摄取控制表中列出的表。\n```\n# | schema_name | table_name\n1 | Warehouse | ColdRoomTemperatures\n2 | Warehouse | Colors\n3 | Warehouse | PackageTypes\n4 | Warehouse | StockGroups\n5 | Warehouse | StockItems\n6 | dbo | BuildVersion\n7 | dbo | ErrorLog\n8 | Application | SystemParameters\n9 | Purchasing | PurchaseOrderLines\n10 | Purchasing | PurchaseOrders\n```\n以下哪三个操作应按顺序执行？要回答，请将适当的操作从操作列表移动到答案区域，并按正确顺序排列。",
  "stemEn": "-\nYou are building a data loading pattern by using a Fabric data pipeline. The source is an Azure SQL database that contains 25 tables. The destination is a lakehouse.\nIn a warehouse, you create a control table named Control.Object as shown in the exhibit. (Click the Exhibit tab.)\n```\n# | schema_name | table_name\n1 | Warehouse | ColdRoomTemperatures\n2 | Warehouse | Colors\n3 | Warehouse | PackageTypes\n4 | Warehouse | StockGroups\n5 | Warehouse | StockItems\n6 | dbo | BuildVersion\n7 | dbo | ErrorLog\n8 | Application | SystemParameters\n9 | Purchasing | PurchaseOrderLines\n10 | Purchasing | PurchaseOrders\n```\nYou need to build a data pipeline that will support the dynamic ingestion of the tables listed in the control table by using a single execution.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
  "explanation": "【答案来源】PDF 第 259 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Azure Data Factory或Fabric数据管道动态加载数据，特别是通过控制表和活动（如Lookup、ForEach等）实现动态数据处理。\n2. 选项分析\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables. 正确。\nForEach活动是用于迭代列表的最佳选择，可以动态处理控制表中列出的多个表，并将数据复制到目标湖仓。\nAdd a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy. 错误。 Get metadata活动用于获取单个文件或表的元数据，而不是生成整个控制表的列表。\nAdd an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables. 错误。 Until活动用于循环直到满足某个条件，不适合用于迭代固定列表。\nAdd a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy. 正确。 Lookup活动可以查询控制表并生成一个包含表名和架构的列表，供后续活动使用。\nAdd a Copy data activity as an inner activity to the iterator activity. 正确。 Copy data活动是用于将数据从源复制到目标的核心活动，应该作为ForEach活动的内部活动。\n3. 我选的答案\nAdd a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.\nAdd a Copy data activity as an inner activity to the iterator activity.\n4. 官方答案\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.\n5. 比较与分析\n我的答案与官方答案不同。官方答案只列出了ForEach活动，但这并不完整，因为ForEach活动需要一个列表作为输入，而生成列表的活动（如Lookup）和执行数据复制的活动（如Copy data）也是必要的。\n重新思考后，我认为官方答案可能是简化了步骤，但完整的解决方案应该包括Lookup、ForEach和Copy data活动。",
  "explanationZh": "【答案来源】PDF 第 259 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用Azure Data Factory或Fabric数据管道动态加载数据，特别是通过控制表和活动（如Lookup、ForEach等）实现动态数据处理。\n2. 选项分析\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables. 正确。\nForEach活动是用于迭代列表的最佳选择，可以动态处理控制表中列出的多个表，并将数据复制到目标湖仓。\nAdd a Get metadata activity to query Control.Object and generate a list of schemas and tables to copy. 错误。 Get metadata活动用于获取单个文件或表的元数据，而不是生成整个控制表的列表。\nAdd an Until activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables. 错误。 Until活动用于循环直到满足某个条件，不适合用于迭代固定列表。\nAdd a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy. 正确。 Lookup活动可以查询控制表并生成一个包含表名和架构的列表，供后续活动使用。\nAdd a Copy data activity as an inner activity to the iterator activity. 正确。 Copy data活动是用于将数据从源复制到目标的核心活动，应该作为ForEach活动的内部活动。\n3. 我选的答案\nAdd a Lookup activity to query Control.Object and generate a list of the schemas and tables to copy.\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.\nAdd a Copy data activity as an inner activity to the iterator activity.\n4. 官方答案\nAdd a ForEach activity to iterate over the list of tables and copy the source data to the lakehouse Delta tables.\n5. 比较与分析\n我的答案与官方答案不同。官方答案只列出了ForEach活动，但这并不完整，因为ForEach活动需要一个列表作为输入，而生成列表的活动（如Lookup）和执行数据复制的活动（如Copy data）也是必要的。\n重新思考后，我认为官方答案可能是简化了步骤，但完整的解决方案应该包括Lookup、ForEach和Copy data活动。",
  "explanationEn": "[Answer source] PDF p.259 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 28,
  "pdfPage": 258,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 28",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 28",
  "pdfQuestionNum": 28,
  "topic": 2
 },
 {
  "id": "dp700-q089",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Type 2",
    "textEn": "Type 2",
    "textZh": "Type 2"
   },
   {
    "id": "B",
    "text": "Type 0",
    "textEn": "Type 0",
    "textZh": "Type 0"
   },
   {
    "id": "C",
    "text": "Type 1",
    "textEn": "Type 1",
    "textZh": "Type 1"
   },
   {
    "id": "D",
    "text": "Type 3",
    "textEn": "Type 3",
    "textZh": "Type 3"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "您正在一个 Fabric lakehouse 中实施奖章架构。\n您计划创建一个维度表，该表将包含以下列：\n• ID\n• CustomerCode\n• CustomerName\n• CustomerAddress\n• CustomerLocation\n• ValidFrom\n• ValidTo\n您需要确保该表支持按每次销售时的客户位置分析历史销售数据。\n您应该使用哪种类型的缓慢变化维度（SCD）？",
  "stemZh": "您正在一个 Fabric lakehouse 中实施奖章架构。\n您计划创建一个维度表，该表将包含以下列：\n• ID\n• CustomerCode\n• CustomerName\n• CustomerAddress\n• CustomerLocation\n• ValidFrom\n• ValidTo\n您需要确保该表支持按每次销售时的客户位置分析历史销售数据。\n您应该使用哪种类型的缓慢变化维度（SCD）？",
  "stemEn": "You are implementing a medallion architecture in a Fabric lakehouse.\nYou plan to create a dimension table that will contain the following columns:\n• ID\n• CustomerCode\n• CustomerName\n• CustomerAddress\n• CustomerLocation\n• ValidFrom\n• ValidTo\nYou need to ensure that the table supports the analysis of historical sales data by customer location at the time of each sale.\nWhich type of slowly changing dimension (SCD) should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的慢速变化维度（Slowly Changing Dimensions, SCD）类型，以及如何选择合适的SCD类型来支持历史数据分析。\n2. 选项分析\nA. Type 2\nType 2 SCD会保留历史记录，通过添加新的行来记录数据的变化。每一行都包含有效时间范围（ValidFrom和ValidTo），这使得可以分析某一时间点的历史数据。此选项正确，因为题目要求支持按销售时间分析客户位置的历史数据。\nB. Type 0\nType 0 SCD不允许数据发生变化，数据一旦写入就保持不变。这种类型无法支持历史数据分析，因此此选项错误。\nC. Type 1\nType 1 SCD会覆盖旧数据，不保留历史记录。这种类型无法支持按时间点分析历史数据，因此此选项错误。\nD. Type 3\nType 3 SCD通过在表中添加额外的列来存储有限的历史数据（例如，存储\"当前值\"和\"以前值\"）。然而，它无法支持完整的历史数据分析，因此此选项错误。\n3. 我的答案\nA. Type 2\n4. 官方答案\nA. Type 2\n5. 与官方答案比较\n我的答案与官方答案一致，选择了Type 2。\n原因：Type 2 SCD通过保留历史记录支持按时间点分析历史数据，完全符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的慢速变化维度（Slowly Changing Dimensions, SCD）类型，以及如何选择合适的SCD类型来支持历史数据分析。\n2. 选项分析\nA. Type 2\nType 2 SCD会保留历史记录，通过添加新的行来记录数据的变化。每一行都包含有效时间范围（ValidFrom和ValidTo），这使得可以分析某一时间点的历史数据。此选项正确，因为题目要求支持按销售时间分析客户位置的历史数据。\nB. Type 0\nType 0 SCD不允许数据发生变化，数据一旦写入就保持不变。这种类型无法支持历史数据分析，因此此选项错误。\nC. Type 1\nType 1 SCD会覆盖旧数据，不保留历史记录。这种类型无法支持按时间点分析历史数据，因此此选项错误。\nD. Type 3\nType 3 SCD通过在表中添加额外的列来存储有限的历史数据（例如，存储\"当前值\"和\"以前值\"）。然而，它无法支持完整的历史数据分析，因此此选项错误。\n3. 我的答案\nA. Type 2\n4. 官方答案\nA. Type 2\n5. 与官方答案比较\n我的答案与官方答案一致，选择了Type 2。\n原因：Type 2 SCD通过保留历史记录支持按时间点分析历史数据，完全符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的慢速变化维度（Slowly Changing Dimensions, SCD）类型，以及如何选择合适的SCD类型来支持历史数据分析。\n2. 选项分析\nA. Type 2\nType 2 SCD会保留历史记录，通过添加新的行来记录数据的变化。每一行都包含有效时间范围（ValidFrom和ValidTo），这使得可以分析某一时间点的历史数据。此选项正确，因为题目要求支持按销售时间分析客户位置的历史数据。\nB. Type 0\nType 0 SCD不允许数据发生变化，数据一旦写入就保持不变。这种类型无法支持历史数据分析，因此此选项错误。\nC. Type 1\nType 1 SCD会覆盖旧数据，不保留历史记录。这种类型无法支持按时间点分析历史数据，因此此选项错误。\nD. Type 3\nType 3 SCD通过在表中添加额外的列来存储有限的历史数据（例如，存储\"当前值\"和\"以前值\"）。然而，它无法支持完整的历史数据分析，因此此选项错误。\n3. 我的答案\nA. Type 2\n4. 官方答案\nA. Type 2\n5. 与官方答案比较\n我的答案与官方答案一致，选择了Type 2。\n原因：Type 2 SCD通过保留历史记录支持按时间点分析历史数据，完全符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 29,
  "pdfPage": 261,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 29",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 29",
  "pdfQuestionNum": 29,
  "topic": 2
 },
 {
  "id": "dp700-q090",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "sliding",
    "textEn": "sliding",
    "textZh": "sliding"
   },
   {
    "id": "B",
    "text": "hopping",
    "textEn": "hopping",
    "textZh": "hopping"
   },
   {
    "id": "C",
    "text": "tumbling",
    "textEn": "tumbling",
    "textZh": "tumbling"
   },
   {
    "id": "D",
    "text": "session",
    "textEn": "session",
    "textZh": "session"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 EventStream1 的 eventstream。EventStream1 将事件输出到 lakehouse 中的一个名为Table1的表。流数据来源于高速公路传感器，表示汽车的速度。\n你需要向 EventStream1添加一个转换，以计算汽车速度的平均值。速度必须按每分钟的非重叠且连续的时间间隔进行分组。每个事件必须完全属于一个窗口。\n你应该使用哪种窗口函数？",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 EventStream1 的 eventstream。EventStream1 将事件输出到 lakehouse 中的一个名为Table1的表。流数据来源于高速公路传感器，表示汽车的速度。\n你需要向 EventStream1添加一个转换，以计算汽车速度的平均值。速度必须按每分钟的非重叠且连续的时间间隔进行分组。每个事件必须完全属于一个窗口。\n你应该使用哪种窗口函数？",
  "stemEn": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table named Table1 in a lakehouse. The streaming data is sourced from motorway sensors and represents the speed of cars.\nYou need to add a transformation to EventStream1 to average the car speeds. The speeds must be grouped by non-overlapping and contiguous time intervals of one minute. Each event must belong to exactly one window.\nWhich windowing function should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流处理中的窗口函数类型，包括滑动窗口（Sliding）、跳跃窗口（Hopping）、滚动窗口（Tumbling）和会话窗口（Session）。\n重点在于理解每种窗口的行为以及如何选择适合的窗口函数来满足特定的时间间隔和数据分组需求。\n2. 选项分析\nA.Sliding：滑动窗口允许窗口在时间轴上以固定的间隔滑动，窗口可以重叠。由于题目要求\"非重叠且连续的时间间隔\"，滑动窗口不符合要求，因此此选项错误。\nB.Hopping：跳跃窗口允许窗口以固定的间隔跳跃，但窗口可以重叠。与滑动窗口类似，跳跃窗口也不符合题目要求的\"非重叠且连续的时间间隔\"，因此此选项错误。\nC.Tumbling:滚动窗口是非重叠且连续的时间间隔窗口，每个事件只能属于一个窗口。题目明确要求\"非重叠且连续的时间间隔\"，因此滚动窗口符合要求，此选项正确。\nD. Session: 会话窗口基于事件的活动时间动态调整窗口大小，窗口之间可能会有间隙。题目要求固定的时间间隔，因此会话窗口不符合3. 我的答案我的答案是：C. Tumbling 4. 官方答案官方答案是：C. Tumbling 5. 答案比较与分析我的答案与官方答案一致。\n原因分析：滚动窗口（Tumbling）符合题目要求的\"非重叠且连续的时间间隔\"，并且每个事件只能属于一个窗口。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流处理中的窗口函数类型，包括滑动窗口（Sliding）、跳跃窗口（Hopping）、滚动窗口（Tumbling）和会话窗口（Session）。\n重点在于理解每种窗口的行为以及如何选择适合的窗口函数来满足特定的时间间隔和数据分组需求。\n2. 选项分析\nA.Sliding：滑动窗口允许窗口在时间轴上以固定的间隔滑动，窗口可以重叠。由于题目要求\"非重叠且连续的时间间隔\"，滑动窗口不符合要求，因此此选项错误。\nB.Hopping：跳跃窗口允许窗口以固定的间隔跳跃，但窗口可以重叠。与滑动窗口类似，跳跃窗口也不符合题目要求的\"非重叠且连续的时间间隔\"，因此此选项错误。\nC.Tumbling:滚动窗口是非重叠且连续的时间间隔窗口，每个事件只能属于一个窗口。题目明确要求\"非重叠且连续的时间间隔\"，因此滚动窗口符合要求，此选项正确。\nD. Session: 会话窗口基于事件的活动时间动态调整窗口大小，窗口之间可能会有间隙。题目要求固定的时间间隔，因此会话窗口不符合3. 我的答案我的答案是：C. Tumbling 4. 官方答案官方答案是：C. Tumbling 5. 答案比较与分析我的答案与官方答案一致。\n原因分析：滚动窗口（Tumbling）符合题目要求的\"非重叠且连续的时间间隔\"，并且每个事件只能属于一个窗口。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据流处理中的窗口函数类型，包括滑动窗口（Sliding）、跳跃窗口（Hopping）、滚动窗口（Tumbling）和会话窗口（Session）。\n重点在于理解每种窗口的行为以及如何选择适合的窗口函数来满足特定的时间间隔和数据分组需求。\n2. 选项分析\nA.Sliding：滑动窗口允许窗口在时间轴上以固定的间隔滑动，窗口可以重叠。由于题目要求\"非重叠且连续的时间间隔\"，滑动窗口不符合要求，因此此选项错误。\nB.Hopping：跳跃窗口允许窗口以固定的间隔跳跃，但窗口可以重叠。与滑动窗口类似，跳跃窗口也不符合题目要求的\"非重叠且连续的时间间隔\"，因此此选项错误。\nC.Tumbling:滚动窗口是非重叠且连续的时间间隔窗口，每个事件只能属于一个窗口。题目明确要求\"非重叠且连续的时间间隔\"，因此滚动窗口符合要求，此选项正确。\nD. Session: 会话窗口基于事件的活动时輓动态调整窗口大小，窗口之輓可能会有輓輱。轞目要求固定的时輓輓輰，因此会话窗口不符合3. 我的答案我的答案是：C. Tumbling 4. 官方答案官方答案是：C. Tumbling 5. 答案比较与分析我的答案与官方答案一致。\n原因分析：滚动窗口（Tumbling）符合题目要求的\"非重叠且连续的时间间隔\"，并且每个事件只能属于一个窗口。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 30,
  "pdfPage": 263,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 30",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 30",
  "pdfQuestionNum": 30,
  "topic": 2
 },
 {
  "id": "dp700-q091",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "Yes",
   "No",
   "Yes"
  ],
  "pdfAnswer": [
   "Yes",
   "No",
   "Yes"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "第 01 行会将 CustomerName 列中的所有 null 和空值替换为 Unknown。",
    "labelEn": "Line 01 will replace all the null and empty values in the CustomerName column with the Unknown value.",
    "labelZh": "第 01 行会将 CustomerName 列中的所有 null 和空值替换为 Unknown。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   },
   {
    "id": "2",
    "label": "第 02 行会提取 @ 字符之前的值并生成名为 Username 的新列。",
    "labelEn": "Line 02 will extract the value before the @ character and generate a new column named Username.",
    "labelZh": "第 02 行会提取 @ 字符之前的值并生成名为 Username 的新列。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "3",
    "label": "第 03 行会从 OrderDate 列提取年份值，并且每个年份只保留第一次出现的记录。",
    "labelEn": "Line 03 will extract the year value from the OrderDate column and keep only the first occurrence for each year.",
    "labelZh": "第 03 行会从 OrderDate 列提取年份值，并且每个年份只保留第一次出现的记录。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您在一个 Fabric lakehouse 中有一个表，其中包含以下数据。\n```\nSalesOrderNumber | OrderDate | CustomerName | Email\nSO49172 | 2021-01-01 | Brian Howard | brian23@adventure-works.com\nSO49173 | 2021-01-01 | Linda Alvarez | linda19@adventure-works.com\nSO49174 | 2021-01-01 | Gina Hernandez | gina4@adventure-works.com\nSO49178 | 2021-01-01 | Beth Ruiz | beth4@adventure-works.com\nSO49179 | 2021-01-01 | Evan Ward | evan13@adventure-works.com\n\n01 df = df.withColumn(\"CustomerName\", when((col(\"CustomerName\").isNull() | (col(\"CustomerName\")==\"\")),lit(\"Unknown\")).otherwise(col(\"CustomerName\")))\n02 df = df.withColumn(\"Username\",split(col(\"Email\"), \"@\").getItem(1))\n03 df = df.dropDuplicates([\"OrderDate\"]).select(col(\"OrderDate\"), year(\"OrderDate\").alias(\"Year\"), (\"CustomerName\"), (\"Username\"))\n04 display(df.head(10))\n```\n您有一个笔记本，其中包含以下代码段。\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您在一个 Fabric lakehouse 中有一个表，其中包含以下数据。\n```\nSalesOrderNumber | OrderDate | CustomerName | Email\nSO49172 | 2021-01-01 | Brian Howard | brian23@adventure-works.com\nSO49173 | 2021-01-01 | Linda Alvarez | linda19@adventure-works.com\nSO49174 | 2021-01-01 | Gina Hernandez | gina4@adventure-works.com\nSO49178 | 2021-01-01 | Beth Ruiz | beth4@adventure-works.com\nSO49179 | 2021-01-01 | Evan Ward | evan13@adventure-works.com\n\n01 df = df.withColumn(\"CustomerName\", when((col(\"CustomerName\").isNull() | (col(\"CustomerName\")==\"\")),lit(\"Unknown\")).otherwise(col(\"CustomerName\")))\n02 df = df.withColumn(\"Username\",split(col(\"Email\"), \"@\").getItem(1))\n03 df = df.dropDuplicates([\"OrderDate\"]).select(col(\"OrderDate\"), year(\"OrderDate\").alias(\"Year\"), (\"CustomerName\"), (\"Username\"))\n04 display(df.head(10))\n```\n您有一个笔记本，其中包含以下代码段。\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou have a table in a Fabric lakehouse that contains the following data.\n```\nSalesOrderNumber | OrderDate | CustomerName | Email\nSO49172 | 2021-01-01 | Brian Howard | brian23@adventure-works.com\nSO49173 | 2021-01-01 | Linda Alvarez | linda19@adventure-works.com\nSO49174 | 2021-01-01 | Gina Hernandez | gina4@adventure-works.com\nSO49178 | 2021-01-01 | Beth Ruiz | beth4@adventure-works.com\nSO49179 | 2021-01-01 | Evan Ward | evan13@adventure-works.com\n\n01 df = df.withColumn(\"CustomerName\", when((col(\"CustomerName\").isNull() | (col(\"CustomerName\")==\"\")),lit(\"Unknown\")).otherwise(col(\"CustomerName\")))\n02 df = df.withColumn(\"Username\",split(col(\"Email\"), \"@\").getItem(1))\n03 df = df.dropDuplicates([\"OrderDate\"]).select(col(\"OrderDate\"), year(\"OrderDate\").alias(\"Year\"), (\"CustomerName\"), (\"Username\"))\n04 display(df.head(10))\n```\nYou have a notebook that contains the following code segment.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 266 页答案图\n【说明】PDF AI-analysis 官方答案 section is empty; answer from image (p266).\n\nDP-700考试辅导 - 做题教练\n题目分析\n知识点：本题考察的是在数据湖中使用PySpark进行数据处理的能力，包括列值替换、字符串操作、去重和列选择。\n逐个分析选项\nLine 01:\n代码逻辑：df.withColumn(\"CustomerName\", when((col(\"CustomerName\").isNull()) | (col(\"CustomerName\") == \"\"), lit(\"Unknown\")).otherwise(col(\"CustomerName\")))。\n分析：when函数用于条件判断，isNull()检查是否为空值，== \"\"检查是否为空字符串。如果满足条件，将值替换为\"Unknown\"，否则保留原值。\n结论：此代码确实会将CustomerName列中的所有空值和空字符串替换为\"Unknown\"。\n正确答案：Yes\nLine 02:\n代码逻辑：df.withColumn(\"Username\", split(col(\"Email\"), \"@\").getItem(1))。\n分析：split函数用于分割字符串，getItem(1)提取分割后的第二部分（即@后面的内容）。然而，题目描述中提到的是提取@前的内容，这与代码逻辑不符。\n结论：此代码会提取@后面的内容，而不是@前的内容，因此题目描述不正确。\n正确答案：No\nLine 03:\n代码逻辑：df.dropDuplicates([\"OrderDate\"]).select(col(\"OrderDate\"), year(\"OrderDate\").alias(\"Year\"), (\"CustomerName\"), (\"Username\"))。\n分析：dropDuplicates([\"OrderDate\"])会基于OrderDate列去重，保留每个日期的第一条记录。year(\"OrderDate\")提取年份，并将其命名为\"Year\"。\n结论：此代码确实会提取年份，并基于OrderDate列去重，保留每年第一条记录。\n正确答案：Yes\n我的答案\nLine 01: Yes\nLine 02: No\nLine 03: Yes\n官方答案\nLine 01: Yes\nLine 02: No\nLine 03: Yes\n比较与思考\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 266 页答案图\n【说明】PDF AI-analysis 官方答案 section is empty; answer from image (p266).\n\nDP-700考试辅导 - 做题教练\n题目分析\n知识点：本题考察的是在数据湖中使用PySpark进行数据处理的能力，包括列值替换、字符串操作、去重和列选择。\n逐个分析选项\nLine 01:\n代码逻辑：df.withColumn(\"CustomerName\", when((col(\"CustomerName\").isNull()) | (col(\"CustomerName\") == \"\"), lit(\"Unknown\")).otherwise(col(\"CustomerName\")))。\n分析：when函数用于条件判断，isNull()检查是否为空值，== \"\"检查是否为空字符串。如果满足条件，将值替换为\"Unknown\"，否则保留原值。\n结论：此代码确实会将CustomerName列中的所有空值和空字符串替换为\"Unknown\"。\n正确答案：Yes\nLine 02:\n代码逻辑：df.withColumn(\"Username\", split(col(\"Email\"), \"@\").getItem(1))。\n分析：split函数用于分割字符串，getItem(1)提取分割后的第二部分（即@后面的内容）。然而，题目描述中提到的是提取@前的内容，这与代码逻辑不符。\n结论：此代码会提取@后面的内容，而不是@前的内容，因此题目描述不正确。\n正确答案：No\nLine 03:\n代码逻辑：df.dropDuplicates([\"OrderDate\"]).select(col(\"OrderDate\"), year(\"OrderDate\").alias(\"Year\"), (\"CustomerName\"), (\"Username\"))。\n分析：dropDuplicates([\"OrderDate\"])会基于OrderDate列去重，保留每个日期的第一条记录。year(\"OrderDate\")提取年份，并将其命名为\"Year\"。\n结论：此代码确实会提取年份，并基于OrderDate列去重，保留每年第一条记录。\n正确答案：Yes\n我的答案\nLine 01: Yes\nLine 02: No\nLine 03: Yes\n官方答案\nLine 01: Yes\nLine 02: No\nLine 03: Yes\n比较与思考\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.266 answer image\n[Note] PDF AI-analysis 官方答案 section is empty; answer from image (p266).",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 31,
  "pdfPage": 265,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 31",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 31",
  "pdfQuestionNum": 31,
  "topic": 2
 },
 {
  "id": "dp700-q092",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "drag",
  "options": [],
  "answer": [
   ".create table EventStreamData (",
   "TimeStamp:datetime, DeviceId:string",
   "StreamData:dynamic )"
  ],
  "pdfAnswer": [
   ".create table EventStreamData (",
   "TimeStamp:datetime, DeviceId:string",
   "StreamData:dynamic )"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "第 1 步",
    "labelEn": "Step 1",
    "labelZh": "第 1 步",
    "choices": [
     {
      "key": "StreamData:long)",
      "en": "StreamData:long)",
      "zh": "StreamData:long)"
     },
     {
      "key": ".create table EventStreamData (",
      "en": ".create table EventStreamData (",
      "zh": ".create table EventStreamData ("
     },
     {
      "key": "StreamData:dynamic )",
      "en": "StreamData:dynamic )",
      "zh": "StreamData:dynamic )"
     },
     {
      "key": ".create function EventStreamData (",
      "en": ".create function EventStreamData (",
      "zh": ".create function EventStreamData ("
     },
     {
      "key": "TimeStamp:datetime, DeviceId:string",
      "en": "TimeStamp:datetime, DeviceId:string",
      "zh": "TimeStamp:datetime, DeviceId:string"
     }
    ],
    "answer": ".create table EventStreamData ("
   },
   {
    "id": "2",
    "label": "第 2 步",
    "labelEn": "Step 2",
    "labelZh": "第 2 步",
    "choices": [
     {
      "key": "StreamData:long)",
      "en": "StreamData:long)",
      "zh": "StreamData:long)"
     },
     {
      "key": ".create table EventStreamData (",
      "en": ".create table EventStreamData (",
      "zh": ".create table EventStreamData ("
     },
     {
      "key": "StreamData:dynamic )",
      "en": "StreamData:dynamic )",
      "zh": "StreamData:dynamic )"
     },
     {
      "key": ".create function EventStreamData (",
      "en": ".create function EventStreamData (",
      "zh": ".create function EventStreamData ("
     },
     {
      "key": "TimeStamp:datetime, DeviceId:string",
      "en": "TimeStamp:datetime, DeviceId:string",
      "zh": "TimeStamp:datetime, DeviceId:string"
     }
    ],
    "answer": "TimeStamp:datetime, DeviceId:string"
   },
   {
    "id": "3",
    "label": "第 3 步",
    "labelEn": "Step 3",
    "labelZh": "第 3 步",
    "choices": [
     {
      "key": "StreamData:long)",
      "en": "StreamData:long)",
      "zh": "StreamData:long)"
     },
     {
      "key": ".create table EventStreamData (",
      "en": ".create table EventStreamData (",
      "zh": ".create table EventStreamData ("
     },
     {
      "key": "StreamData:dynamic )",
      "en": "StreamData:dynamic )",
      "zh": "StreamData:dynamic )"
     },
     {
      "key": ".create function EventStreamData (",
      "en": ".create function EventStreamData (",
      "zh": ".create function EventStreamData ("
     },
     {
      "key": "TimeStamp:datetime, DeviceId:string",
      "en": "TimeStamp:datetime, DeviceId:string",
      "zh": "TimeStamp:datetime, DeviceId:string"
     }
    ],
    "answer": "StreamData:dynamic )"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您有一个 Fabric 工作区，其中包含一个名为 Eventhouse1 的 eventhouse。\n在 Eventhouse1 中，您计划在一个 KQL 数据库中创建一个名为 DeviceStreamData 的表。该表将包含基于以下示例的数据。\n```\nTimestamp | DeviceId | StreamData\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\", \"isActive\": false, \"latitude\": 5.390012, \"longitude\": -40.100235, \"tags\": [\"tempor\"]}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\", \"isActive\": true, \"latitude\": -56.153786, \"longitude\": 130.870907, \"tags\": [\"adipisicing\"]}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\", \"isActive\": true, \"latitude\": -21.39289, \"longitude\": 123.959442, \"tags\": [\"ad\"]}]\n2024-05-18 12:45:25.39523 | 1a390e71-4faf-4df5-a479-2238d84001f7 | [{\"index\": 0, \"eventid\": \"9572e141-8692-4d16-89e8-002f9b7e22b6\", \"isActive\": true, \"latitude\": -84.926214, \"longitude\": -11.499007, \"tags\": [\"ex\"]}]\n2024-05-18 12:45:27.43343 | 2f0ba7d0-6dff-4081-bf7f-d0d39d4c3260 | [{\"index\": 0, \"eventid\": \"08a42b87-ce84-4bb2-99f0-4fb5c75ff63f\", \"isActive\": true, \"latitude\": -49.909339, \"longitude\": -177.505775, \"tags\": [\"laboris\"]}]\n```\n您需要使用 KQL 查询为 Eventhouse1 开发解决方案。\n您应该按顺序运行哪三个代码段？要回答，请将适当的代码段从代码段列表移动到答案区域并按正确顺序排列。",
  "stemZh": "-\n您有一个 Fabric 工作区，其中包含一个名为 Eventhouse1 的 eventhouse。\n在 Eventhouse1 中，您计划在一个 KQL 数据库中创建一个名为 DeviceStreamData 的表。该表将包含基于以下示例的数据。\n```\nTimestamp | DeviceId | StreamData\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\", \"isActive\": false, \"latitude\": 5.390012, \"longitude\": -40.100235, \"tags\": [\"tempor\"]}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\", \"isActive\": true, \"latitude\": -56.153786, \"longitude\": 130.870907, \"tags\": [\"adipisicing\"]}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\", \"isActive\": true, \"latitude\": -21.39289, \"longitude\": 123.959442, \"tags\": [\"ad\"]}]\n2024-05-18 12:45:25.39523 | 1a390e71-4faf-4df5-a479-2238d84001f7 | [{\"index\": 0, \"eventid\": \"9572e141-8692-4d16-89e8-002f9b7e22b6\", \"isActive\": true, \"latitude\": -84.926214, \"longitude\": -11.499007, \"tags\": [\"ex\"]}]\n2024-05-18 12:45:27.43343 | 2f0ba7d0-6dff-4081-bf7f-d0d39d4c3260 | [{\"index\": 0, \"eventid\": \"08a42b87-ce84-4bb2-99f0-4fb5c75ff63f\", \"isActive\": true, \"latitude\": -49.909339, \"longitude\": -177.505775, \"tags\": [\"laboris\"]}]\n```\n您需要使用 KQL 查询为 Eventhouse1 开发解决方案。\n您应该按顺序运行哪三个代码段？要回答，请将适当的代码段从代码段列表移动到答案区域并按正确顺序排列。",
  "stemEn": "-\nYou have a Fabric workspace that contains an eventhouse named Eventhouse1.\nIn Eventhouse1, you plan to create a table named DeviceStreamData in a KQL database. The table will contain data based on the following sample.\n```\nTimestamp | DeviceId | StreamData\n2024-05-18 12:45:17.16524 | 81416f30-60a2-4e75-9b19-2a84ea059735 | [{\"index\": 0, \"eventid\": \"719afca0-be30-4559-bb5e-59feade642f6\", \"isActive\": false, \"latitude\": 5.390012, \"longitude\": -40.100235, \"tags\": [\"tempor\"]}]\n2024-05-18 12:45:21.76423 | bb664e1e-02aa-4e17-8c8a-116cd4458d52 | [{\"index\": 0, \"eventid\": \"782222b2-fbcb-43c0-82d6-ecd49a99dbf5\", \"isActive\": true, \"latitude\": -56.153786, \"longitude\": 130.870907, \"tags\": [\"adipisicing\"]}]\n2024-05-18 12:45:23.98642 | 717bfe7d-0e5d-498f-9f21-e60aaf258056 | [{\"index\": 0, \"eventid\": \"d5730286-0da4-41f8-8e59-f75e209310a9\", \"isActive\": true, \"latitude\": -21.39289, \"longitude\": 123.959442, \"tags\": [\"ad\"]}]\n2024-05-18 12:45:25.39523 | 1a390e71-4faf-4df5-a479-2238d84001f7 | [{\"index\": 0, \"eventid\": \"9572e141-8692-4d16-89e8-002f9b7e22b6\", \"isActive\": true, \"latitude\": -84.926214, \"longitude\": -11.499007, \"tags\": [\"ex\"]}]\n2024-05-18 12:45:27.43343 | 2f0ba7d0-6dff-4081-bf7f-d0d39d4c3260 | [{\"index\": 0, \"eventid\": \"08a42b87-ce84-4bb2-99f0-4fb5c75ff63f\", \"isActive\": true, \"latitude\": -49.909339, \"longitude\": -177.505775, \"tags\": [\"laboris\"]}]\n```\nYou need to use a KQL query to develop the solution for Eventhouse1.\nWhich three code segments should you run in sequence? To answer, move the appropriate code segments from the list of code segments to the answer area and arrange them in the correct order.",
  "explanation": "【答案来源】PDF 第 270 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中使用 KQL（Kusto Query Language）创建表和函数的能力。\n需要理解如何定义表结构以及如何使用 KQL 创建动态数据流。\n2. 逐个分析选项\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic): 正确。此代码段用于创建一个名为 EventStreamData 的表，并定义其列的结构，包括时间戳、设备 ID 和动态数据流。\n.create function EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:long): 错误。此代码段试图创建一个函数，但与题目要求不符，因为题目要求创建表，而不是函数。\n.create table EventStreamData (StreamData:long): 错误。此代码段试图创建一个表，但表结构不完整，缺少 TimeStamp 和DeviceId 列。\n.create table EventStreamData (StreamData:dynamic): 错误。此代码段试图创建一个表，但表结构不完整，缺少 TimeStamp 和DeviceId 列。\n3. 我的答案\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic)\n4. 官方答案\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic)\n5. 比较与分析\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationZh": "【答案来源】PDF 第 270 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是在 Microsoft Fabric 中使用 KQL（Kusto Query Language）创建表和函数的能力。\n需要理解如何定义表结构以及如何使用 KQL 创建动态数据流。\n2. 逐个分析选项\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic): 正确。此代码段用于创建一个名为 EventStreamData 的表，并定义其列的结构，包括时间戳、设备 ID 和动态数据流。\n.create function EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:long): 错误。此代码段试图创建一个函数，但与题目要求不符，因为题目要求创建表，而不是函数。\n.create table EventStreamData (StreamData:long): 错误。此代码段试图创建一个表，但表结构不完整，缺少 TimeStamp 和DeviceId 列。\n.create table EventStreamData (StreamData:dynamic): 错误。此代码段试图创建一个表，但表结构不完整，缺少 TimeStamp 和DeviceId 列。\n3. 我的答案\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic)\n4. 官方答案\n.create table EventStreamData (TimeStamp:datetime, DeviceId:string, StreamData:dynamic)\n5. 比较与分析\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationEn": "[Answer source] PDF p.270 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 32,
  "pdfPage": 268,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 32",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 32",
  "pdfQuestionNum": 32,
  "topic": 2
 },
 {
  "id": "dp700-q093",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "a data pipeline",
    "textEn": "a data pipeline",
    "textZh": "a data pipeline"
   },
   {
    "id": "B",
    "text": "an Apache Spark job definition",
    "textEn": "an Apache Spark job definition",
    "textZh": "an Apache Spark job definition"
   },
   {
    "id": "C",
    "text": "a streaming dataflow",
    "textEn": "a streaming dataflow",
    "textZh": "a streaming dataflow"
   },
   {
    "id": "D",
    "text": "a notebook",
    "textEn": "a notebook",
    "textZh": "a notebook"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地 Microsoft SQL Server 数据库名为 Database1，通过本地数据网关进行访问。\n你需要将数据从 Database1 复制到 Warehouse1。\n你应该使月",
  "stemZh": "你有一个包含名为 Warehouse1 的仓库的 Fabric 工作区。\n你有一个本地 Microsoft SQL Server 数据库名为 Database1，通过本地数据网关进行访问。\n你需要将数据从 Database1 复制到 Warehouse1。\n你应该使月",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nYou have an on-premises Microsoft SQL Server database named Database1 that is accessed by using an on-premises data gateway.\nYou need to copy data from Database1 to Warehouse1.\nWhich item should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用适当的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道、Apache Spark 作业定义、流式数据流和笔记本的功能和适用场景。\n2. 选项分析\nA.a data pipeline:正确。数据管道是 Microsoft Fabric中用于数据集成和传输的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。\nB.an Apache Spark job definition:错误。Apache Spark 作业定义主要用于大规模数据处理和分析，而不是专门用于数据复制任务。\nC.a streaming dataflow:错误。流式数据流用于处理实时数据流，而本题要求的是从本地 SQL Server数据库复制数据到仓库，这不是实时流式处理的场景。\nD.a notebook:错误。笔记本通常用于交互式数据分析和代码执行，而不是用于数据复制任务。\n3. 我的答案\n我的选择是：A. a data pipeline\n4. 官方答案\n官方答案是：A. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用适当的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道、Apache Spark 作业定义、流式数据流和笔记本的功能和适用场景。\n2. 选项分析\nA.a data pipeline:正确。数据管道是 Microsoft Fabric中用于数据集成和传输的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。\nB.an Apache Spark job definition:错误。Apache Spark 作业定义主要用于大规模数据处理和分析，而不是专门用于数据复制任务。\nC.a streaming dataflow:错误。流式数据流用于处理实时数据流，而本题要求的是从本地 SQL Server数据库复制数据到仓库，这不是实时流式处理的场景。\nD.a notebook:错误。笔记本通常用于交互式数据分析和代码执行，而不是用于数据复制任务。\n3. 我的答案\n我的选择是：A. a data pipeline\n4. 官方答案\n官方答案是：A. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在 Microsoft Fabric 中使用适当的工具将数据从本地 SQL Server 数据库复制到 Fabric 仓库。\n涉及的知识点包括数据管道、Apache Spark 作业定义、流式数据流和笔记本的功能和适用场景。\n2. 选项分析\nA.a data pipeline:正确。数据管道是 Microsoft Fabric中用于数据集成和传输的工具。它支持从本地数据源（通过数据网关）复制数据到 Fabric 仓库。\nB.an Apache Spark job definition:错误。Apache Spark 作业定义主要用于大规模数据处理和分析，而不是专门用于数据复制任务。\nC.a streaming dataflow:错误。流式数据流用于处理实时数据流，而本题要求的是从本地 SQL Server数据库复制数据到仓库，这不是实时流式处理的场景。\nD.a notebook:错误。笔记本通常用于交互式数据分析和代码执行，而不是用于数据复制任务。\n3. 我的答案\n我的选择是：A. a data pipeline\n4. 官方答案\n官方答案是：A. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 33,
  "pdfPage": 272,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 33",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 33",
  "pdfQuestionNum": 33,
  "topic": 2
 },
 {
  "id": "dp700-q094",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "使用哈希函数比较源表中的属性。",
    "textEn": "a hash function to compare the attributes in the source table.",
    "textZh": "使用哈希函数比较源表中的属性。"
   },
   {
    "id": "B",
    "text": "直接比较 DimCustomer 表中的属性。",
    "textEn": "a direct attributes comparison across the attributes in the DimCustomer table.",
    "textZh": "直接比较 DimCustomer 表中的属性。"
   },
   {
    "id": "C",
    "text": "直接比轮",
    "textEn": "a direct attributes comparison for the attributes in the source table.",
    "textZh": "直接比轮"
   },
   {
    "id": "D",
    "text": "使用哈希函数比较 DimCustomer 表中的属性。",
    "textEn": "a hash function to compare the attributes in the DimCustomer table.",
    "textZh": "使用哈希函数比较 DimCustomer 表中的属性。"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DW1 的 Fabric 数据仓库，其中包含一个类型 2 的缓慢变化维度 (SCD)维度表，名为 DimCustomer。DimCustomer包含 100 列和 2000 万行。这些列具有各种数据类型，包括 int、varchar、date 和 varbinary。\n你需要识别表中的传入更改，并在发生更改时更新记录。解决方案必须尽量减少资源消耗。\n你应该使用什么方法来识别属性的变化？",
  "stemZh": "你有一个名为 DW1 的 Fabric 数据仓库，其中包含一个类型 2 的缓慢变化维度 (SCD)维度表，名为 DimCustomer。DimCustomer包含 100 列和 2000 万行。这些列具有各种数据类型，包括 int、varchar、date 和 varbinary。\n你需要识别表中的传入更改，并在发生更改时更新记录。解决方案必须尽量减少资源消耗。\n你应该使用什么方法来识别属性的变化？",
  "stemEn": "You have a Fabric warehouse named DW1 that contains a Type 2 slowly changing dimension (SCD) dimension table named DimCustomer. DimCustomer contains 100 columns and 20 million rows. The columns are of various data types, including int, varchar, date, and varbinary.\nYou need to identify incoming changes to the table and update the records when there is a change. The solution must minimize resource consumption.\nWhat should you use to identify changes to attributes?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的Type 2 Slowly Changing Dimension (SCD)的处理方法，特别是如何高效地识别数据变化。\n重点在于选择一种方法来比较数据变化，同时最小化资源消耗。\n2. 选项分析\nA. a hash function to compare the attributes in the source table.\n使用哈希函数比较源表中的属性是一种高效的方法，可以快速识别数据变化。\n哈希函数生成固定长度的值，能够减少直接比较所有列的开销，尤其是在表中有大量列和行的情况下。\n此选项正确，因为它符合题目要求：高效识别变化并最小化资源消耗。\nB. a direct attributes comparison across the attributes in the DimCustomer table.\n直接比较目标表（DimCustomer表）中的属性需要逐列逐行进行比较，计算成本较高。\n此方法不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nC. a direct attributes comparison for the attributes in the source table.\n直接比较源表中的属性也需要逐列逐行进行比较，计算成本较高。\n此方法同样不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nD. a hash function to compare the attributes in the DimCustomer table.\n使用哈希函数比较目标表（DimCustomer表）中的属性虽然可以减少直接比较的开销，但目标表通常是更新后的数据，变化识别应基于源表。\n此选项不符合题目要求，因此错误。\n3. 我的答案\n我的答案是：\n4. 官方答案\n官方答案是：\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：使用哈希函数比较源表中的属性是一种高效的方法，能够快速识别变化并最小化资源消耗，符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的Type 2 Slowly Changing Dimension (SCD)的处理方法，特别是如何高效地识别数据变化。\n重点在于选择一种方法来比较数据变化，同时最小化资源消耗。\n2. 选项分析\nA. a hash function to compare the attributes in the source table.\n使用哈希函数比较源表中的属性是一种高效的方法，可以快速识别数据变化。\n哈希函数生成固定长度的值，能够减少直接比较所有列的开销，尤其是在表中有大量列和行的情况下。\n此选项正确，因为它符合题目要求：高效识别变化并最小化资源消耗。\nB. a direct attributes comparison across the attributes in the DimCustomer table.\n直接比较目标表（DimCustomer表）中的属性需要逐列逐行进行比较，计算成本较高。\n此方法不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nC. a direct attributes comparison for the attributes in the source table.\n直接比较源表中的属性也需要逐列逐行进行比较，计算成本较高。\n此方法同样不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nD. a hash function to compare the attributes in the DimCustomer table.\n使用哈希函数比较目标表（DimCustomer表）中的属性虽然可以减少直接比较的开销，但目标表通常是更新后的数据，变化识别应基于源表。\n此选项不符合题目要求，因此错误。\n3. 我的答案\n我的答案是：\n4. 官方答案\n官方答案是：\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：使用哈希函数比较源表中的属性是一种高效的方法，能够快速识别变化并最小化资源消耗，符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据仓库中的Type 2 Slowly Changing Dimension (SCD)的处理方法，特别是如何高效地识别数据变化。\n重点在于选择一种方法来比较数据变化，同时最小化资源消耗。\n2. 选项分析\nA. a hash function to compare the attributes in the source table.\n使用哈希函数比较源表中的属性是一种高效的方法，可以快速识别数据变化。\n哈希函数生成固定长度的值，能够减少直接比较所有列的开销，尤其是在表中有大量列和行的情况下。\n此选项正确，因为它符合题目要求：高效识别变化并最小化资源消耗。\nB. a direct attributes comparison across the attributes in the DimCustomer table.\n直接比较目标表（DimCustomer表）中的属性需要逐列逐行进行比较，计算成本较高。\n此方法不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nC. a direct attributes comparison for the attributes in the source table.\n直接比较源表中的属性也需要逐列逐行进行比较，计算成本较高。\n此方法同样不符合题目要求的\"最小化资源消耗\"，因此此选项错误。\nD. a hash function to compare the attributes in the DimCustomer table.\n使用哈希函数比较目标表（DimCustomer表）中的属性虽然可以减少直接比较的开销，但目标表通常是更新后的数据，变化识别应基于源表。\n此选项不符合题目要求，因此错误。\n3. 我的答案\n我的答案是：\n4. 官方答案\n官方答案是：\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：使用哈希函数比较源表中的属性是一种高效的方法，能够快速识别变化并最小化资源消耗，符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 34,
  "pdfPage": 274,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 34",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 34",
  "pdfQuestionNum": 34,
  "topic": 2
 },
 {
  "id": "dp700-q095",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "为 DB1 创建一个只读副本。",
    "textEn": "Create a read-only replica of DB1.",
    "textZh": "为 DB1 创建一个只读副本。"
   },
   {
    "id": "B",
    "text": "创建一个 Azure Stream Analytics 作业。",
    "textEn": "Create an Azure Stream Analytics job.",
    "textZh": "创建一个 Azure Stream Analytics 作业。"
   },
   {
    "id": "C",
    "text": "为 DB1 启用 Extended Events。",
    "textEn": "Enable Extended Events for DB1.",
    "textZh": "为 DB1 启用 Extended Events。"
   },
   {
    "id": "D",
    "text": "为 DB1 启用 change data capture (CDC)。",
    "textEn": "Enable change data capture (CDC) for DB1.",
    "textZh": "为 DB1 启用 change data capture (CDC)。"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DB1 的 Azure SQL 数据库。\n在一个 Fabric 工作区中，你部署了一个名为 EventStreamDB1 的 eventstream，用于将 DB1 的记录更改流式传输到一个lakehouse。\n你发现事件没有被传播到 EventStreamDB1。\n你需要确保事件被传播到 EventStreamDB1。\n你应该怎么做？",
  "stemZh": "你有一个名为 DB1 的 Azure SQL 数据库。\n在一个 Fabric 工作区中，你部署了一个名为 EventStreamDB1 的 eventstream，用于将 DB1 的记录更改流式传输到一个lakehouse。\n你发现事件没有被传播到 EventStreamDB1。\n你需要确保事件被传播到 EventStreamDB1。\n你应该怎么做？",
  "stemEn": "You have an Azure SQL database named DB1.\nIn a Fabric workspace, you deploy an eventstream named EventStreamDB1 to stream record changes from DB1 into a lakehouse.\nYou discover that events are NOT being propagated to EventStreamDB1.\nYou need to ensure that the events are propagated to EventStreamDB1.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Azure SQL数据库的变更数据捕获(Change Data Capture, CDC)功能，以及如何将数据库的变更事件流式传输到其他服务（如 Fabric 工作区中的事件流）。\n2. 选项分析\nA. Create a read-only replica of DB1.\n错误：创建只读副本不会捕获或传播数据库的变更事件。只读副本主要用于负载分担和查询优化，而不是事件流传输。\nB. Create an Azure Stream Analytics job.\n错误：Azure Stream Analytics 作业用于实时分析流数据，但它并不能直接解决数据库变更事件未被捕获的问题。需要先确保数据库的变更事件能够被捕获。\nC. Enable Extended Events for DB1.\n错误：Extended Events 是一种诊断工具，用于监控和调试 SQL Server 或 Azure SQL数据库的性能问题。它不是用于捕获和传播数据变更事件的工具。\nD. Enable change data capture (CDC) for DB1.\n正确：Change Data Capture (CDC) 是一种功能，用于捕获数据库表中的数据变更并记录到专用的变更表中。启用 CDC 后，数据库的变更事件可以被捕获并流式传输到事件流中。\n3. 我的答案\nD. Enable change data capture (CDC) for DB1.\n4. 官方答案\nD. Enable change data capture (CDC) for DB1.\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Azure SQL数据库的变更数据捕获(Change Data Capture, CDC)功能，以及如何将数据库的变更事件流式传输到其他服务（如 Fabric 工作区中的事件流）。\n2. 选项分析\nA. Create a read-only replica of DB1.\n错误：创建只读副本不会捕获或传播数据库的变更事件。只读副本主要用于负载分担和查询优化，而不是事件流传输。\nB. Create an Azure Stream Analytics job.\n错误：Azure Stream Analytics 作业用于实时分析流数据，但它并不能直接解决数据库变更事件未被捕获的问题。需要先确保数据库的变更事件能够被捕获。\nC. Enable Extended Events for DB1.\n错误：Extended Events 是一种诊断工具，用于监控和调试 SQL Server 或 Azure SQL数据库的性能问题。它不是用于捕获和传播数据变更事件的工具。\nD. Enable change data capture (CDC) for DB1.\n正确：Change Data Capture (CDC) 是一种功能，用于捕获数据库表中的数据变更并记录到专用的变更表中。启用 CDC 后，数据库的变更事件可以被捕获并流式传输到事件流中。\n3. 我的答案\nD. Enable change data capture (CDC) for DB1.\n4. 官方答案\nD. Enable change data capture (CDC) for DB1.\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是 Azure SQL数据库的变更数据捕获(Change Data Capture, CDC)功能，以及如何将数据库的变更事件流式传输到其他服务（如 Fabric 工作区中的事件流）。\n2. 选项分析\nA. Create a read-only replica of DB1.\n错误：创建只读副本不会捕获或传播数据库的变更事件。只读副本主要用于负载分担和查询优化，而不是事件流传输。\nB. Create an Azure Stream Analytics job.\n错误：Azure Stream Analytics 作业用于实时分析流数据，但它并不能直接解决数据库变更事件未被捕获的问题。需要先确保数据库的变更事件能够被捕获。\nC. Enable Extended Events for DB1.\n错误：Extended Events 是一种诊断工具，用于监控和调试 SQL Server 或 Azure SQL数据库的性能问题。它不是用于捕获和传播数据变更事件的工具。\nD. Enable change data capture (CDC) for DB1.\n正确：Change Data Capture (CDC) 是一种功能，用于捕获数据库表中的数据变更并记录到专用的变更表中。启用 CDC 后，数据库的变更事件可以被捕获并流式传输到事件流中。\n3. 我的答案\nD. Enable change data capture (CDC) for DB1.\n4. 官方答案\nD. Enable change data capture (CDC) for DB1.\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 35,
  "pdfPage": 276,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 35",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 35",
  "pdfQuestionNum": 35,
  "topic": 2
 },
 {
  "id": "dp700-q096",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "为数据管道添加一个 ForEach 活动。",
    "textEn": "Add a ForEach activity to the data pipeline.",
    "textZh": "为数据管道添加一个 ForEach 活动。"
   },
   {
    "id": "B",
    "text": "为 Copy data 活动配置重试。",
    "textEn": "Configure retries for the Copy data activity.",
    "textZh": "为 Copy data 活动配置重试。"
   },
   {
    "id": "C",
    "text": "从数据管道调用一个笔记本。",
    "textEn": "Call a notebook from the data pipeline.",
    "textZh": "从数据管道调用一个笔记本。"
   },
   {
    "id": "D",
    "text": "为 Copy data 活动配置 Fault tolerance。",
    "textEn": "Configure Fault tolerance for the Copy data activity.",
    "textZh": "为 Copy data 活动配置 Fault tolerance。"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "您需要推荐一个解决方案来解决MAR1的连接问题。该解决方案必须最小化开发工作。\n您应该推荐什么",
  "stemZh": "您需要推荐一个解决方案来解决MAR1的连接问题。该解决方案必须最小化开发工作。\n您应该推荐什么",
  "stemEn": "You need to recommend a solution to resolve the MAR1 connectivity issues. The solution must minimize development effort.\nWhat should you recommend?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何解决数据管道中的连接性问题，同时最小化开发工作量。这涉及到数据管道的配置和故障处理机制。\n2. 选项分析\nA. Add a ForEach activity to the data pipeline.\nForEach活动用于循环处理多个数据集或任务，但它并不能直接解决连接性问题。\n此选项不符合\"最小化开发工作量\"的要求，因为需要额外的逻辑来处理连接问题。\n错误\nB. Configure retries for the Copy data activity.\n配置重试机制是解决连接性问题的最佳实践，尤其是针对短暂的连接错误。\n此选项符合\"最小化开发工作量\"的要求，因为重试机制是内置功能，无需额外开发。\n正确\nC. Call a notebook from the data pipeline.\n调用笔记本可以实现复杂的逻辑，但需要额外的开发工作来处理连接问题。\n此选项不符合\"最小化开发工作量\"的要求。\n错误\nD. Configure Fault tolerance for the Copy data activity.\nFault tolerance主要用于处理数据错误，而不是连接性问题。\n此选项不能直接解决短暂的连接错误问题。\n错误\n3. 我选的答案\nB. Configure retries for the Copy data activity.\n4. 官方答案\nB. Configure retries for the Copy data activity.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：配置重试机制是解决短暂连接问题的最佳实践，同时符合\"最小化开发工作量\"的要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何解决数据管道中的连接性问题，同时最小化开发工作量。这涉及到数据管道的配置和故障处理机制。\n2. 选项分析\nA. Add a ForEach activity to the data pipeline.\nForEach活动用于循环处理多个数据集或任务，但它并不能直接解决连接性问题。\n此选项不符合\"最小化开发工作量\"的要求，因为需要额外的逻辑来处理连接问题。\n错误\nB. Configure retries for the Copy data activity.\n配置重试机制是解决连接性问题的最佳实践，尤其是针对短暂的连接错误。\n此选项符合\"最小化开发工作量\"的要求，因为重试机制是内置功能，无需额外开发。\n正确\nC. Call a notebook from the data pipeline.\n调用笔记本可以实现复杂的逻辑，但需要额外的开发工作来处理连接问题。\n此选项不符合\"最小化开发工作量\"的要求。\n错误\nD. Configure Fault tolerance for the Copy data activity.\nFault tolerance主要用于处理数据错误，而不是连接性问题。\n此选项不能直接解决短暂的连接错误问题。\n错误\n3. 我选的答案\nB. Configure retries for the Copy data activity.\n4. 官方答案\nB. Configure retries for the Copy data activity.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：配置重试机制是解决短暂连接问题的最佳实践，同时符合\"最小化开发工作量\"的要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何解决数据管道中的连接性问题，同时最小化开发工作量。这涉及到数据管道的配置和故障处理机制。\n2. 选项分析\nA. Add a ForEach activity to the data pipeline.\nForEach活动用于循环处理多个数据集或任务，但它并不能直接解决连接性问题。\n此选项不符合\"最小化开发工作量\"的要求，因为需要额外的逻辑来处理连接问题。\n错误\nB. Configure retries for the Copy data activity.\n配置重试机制是解决连接性问题的最佳实践，尤其是针对短暂的连接错误。\n此选项符合\"最小化开发工作量\"的要求，因为重试机制是内置功能，无需额外开发。\n正确\nC. Call a notebook from the data pipeline.\n调用笔记本可以实现复杂的逻辑，但需要额外的开发工作来处理连接问题。\n此选项不符合\"最小化开发工作量\"的要求。\n错误\nD. Configure Fault tolerance for the Copy data activity.\nFault tolerance主要用于处理数据错误，而不是连接性问题。\n此选项不能直接解决短暂的连接错误问题。\n错误\n3. 我选的答案\nB. Configure retries for the Copy data activity.\n4. 官方答案\nB. Configure retries for the Copy data activity.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因分析：配置重试机制是解决短暂连接问题的最佳实践，同时符合\"最小化开发工作量\"的要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 36,
  "pdfPage": 278,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 36",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 36",
  "pdfQuestionNum": 36,
  "topic": 2,
  "caseStudyId": "dp700-case-3",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，请使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个湖仓：\n·Lakehouse1：将存储来自源的原始数据和清洗数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的湖仓必须遵循使用以下三个层的奖章架构：bronze、silver 和 gold。为了填充 silver 层中的 MAR1数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，请使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个湖仓：\n·Lakehouse1：将存储来自源的原始数据和清洗数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的湖仓必须遵循使用以下三个层的奖章架构：bronze、silver 和 gold。为了填充 silver 层中的 MAR1数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q097",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "一个包含 Copy data 活动的数据管道",
    "textEn": "a data pipeline that includes a Copy data activity",
    "textZh": "一个包含 Copy data 活动的数据管道"
   },
   {
    "id": "B",
    "text": "一个包含 Delete data 活动的数据管道",
    "textEn": "a data pipeline that includes a Delete data activity",
    "textZh": "一个包含 Delete data 活动的数据管道"
   },
   {
    "id": "C",
    "text": "一个运行 VACUUM 命令的 notebook",
    "textEn": "a notebook that runs the VACUUM command",
    "textZh": "一个运行 VACUUM 命令的 notebook"
   },
   {
    "id": "D",
    "text": "一个运行 OPTIMIZE 命令的 notebook",
    "textEn": "a notebook that runs the OPTIMIZE command",
    "textZh": "一个运行 OPTIMIZE 命令的 notebook"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "您需要推荐一个处理旧文件的解决方案。该解决方案必须满足技术要求。\n您应该在推荐中包括什么？",
  "stemZh": "您需要推荐一个处理旧文件的解决方案。该解决方案必须满足技术要求。\n您应该在推荐中包括什么？",
  "stemEn": "You need to recommend a solution for handling old files. The solution must meet the technical requirements.\nWhat should you include in the recommendation?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何处理旧文件以满足技术要求，同时涉及到Fabric中的数据管理和Delta格式的文件操作。\n重点知识点包括Delta格式文件的管理、VACUUM命令的使用以及如何清理不再被引用的旧文件。\n2. 选项分析\nA. 一个包含 Copy data 活动的数据管道\n错误：Copy data 活动用于复制数据，而不是清理旧文件。此选项与清理旧文件的需求无关。\nB. 一个包含 Delete data 活动的数据管道\n错误：Delete data 活动可以删除数据，但无法自动识别Delta表日志中不再引用的旧文件。此选项不符合技术要求。\nC. 一个运行 VACUUM 命令的 notebook\n正确：VACUUM命令是Delta格式的内置功能，用于清理Delta表日志中不再引用的旧文件。此选项完全符合技术要求。\nD. 一个运行 OPTIMIZE 命令的 notebook\n错误：OPTIMIZE命令用于优化Delta表的存储布局以提高查询性能，而不是清理旧文件。此选项不符合技术要求。\n3. 我选的答案\nC.一个运行 VACUUM 命令的 notebook\n4. 官方答案\nC.一个运行 VACUUM 命令的 notebook\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：VACUUM命令是Delta格式的标准方法，用于清理旧日文件，完全符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何处理旧文件以满足技术要求，同时涉及到Fabric中的数据管理和Delta格式的文件操作。\n重点知识点包括Delta格式文件的管理、VACUUM命令的使用以及如何清理不再被引用的旧文件。\n2. 选项分析\nA. 一个包含 Copy data 活动的数据管道\n错误：Copy data 活动用于复制数据，而不是清理旧文件。此选项与清理旧文件的需求无关。\nB. 一个包含 Delete data 活动的数据管道\n错误：Delete data 活动可以删除数据，但无法自动识别Delta表日志中不再引用的旧文件。此选项不符合技术要求。\nC. 一个运行 VACUUM 命令的 notebook\n正确：VACUUM命令是Delta格式的内置功能，用于清理Delta表日志中不再引用的旧文件。此选项完全符合技术要求。\nD. 一个运行 OPTIMIZE 命令的 notebook\n错误：OPTIMIZE命令用于优化Delta表的存储布局以提高查询性能，而不是清理旧文件。此选项不符合技术要求。\n3. 我选的答案\nC.一个运行 VACUUM 命令的 notebook\n4. 官方答案\nC.一个运行 VACUUM 命令的 notebook\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：VACUUM命令是Delta格式的标准方法，用于清理旧日文件，完全符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何处理旧文件以满足技术要求，同时涉及到Fabric中的数据管理和Delta格式的文件操作。\n重点知识点包括Delta格式文件的管理、VACUUM命令的使用以及如何清理不再被引用的旧文件。\n2. 选项分析\nA. 一个包含 Copy data 活动的数据管道\n错误：Copy data 活动用于复制数据，而不是清理旧文件。此选项与清理旧文件的需求无关。\nB. 一个包含 Delete data 活动的数据管道\n错误：Delete data 活动可以删除数据，但无法自动识别Delta表日志中不再引用的旧文件。此选项不符合技术要求。\nC. 一个运行 VACUUM 命令的 notebook\n正确：VACUUM命令是Delta格式的内置功能，用于清理Delta表日志中不再引用的旧文件。此选项完全符合技术要求。\nD. 一个运行 OPTIMIZE 命令的 notebook\n错误：OPTIMIZE命令用于优化Delta表的存储布局以提高查询性能，而不是清理旧文件。此选项不符合技术要求。\n3. 我选的答案\nC.一个运行 VACUUM 命令的 notebook\n4. 官方答案\nC.一个运行 VACUUM 命令的 notebook\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：VACUUM命令是Delta格式的标准方法，用于清理旧日文件，完全符合题目要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 37,
  "pdfPage": 285,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 37",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 37",
  "pdfQuestionNum": 37,
  "topic": 2,
  "caseStudyId": "dp700-case-3",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，请使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是相同的。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个lakehouses：\n·Lakehouse1：将存储来自源的原始数据和清洗数据\n·Lakehouse2：将以维度模型的形式为用户提供分析查询数据\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码管理。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion architecture：bronze、silver 和 gold。为了填充 silver 层中的 MAR1 数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码管理。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上无关紧要，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码管理的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，会出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，请使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮会显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是相同的。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python 或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 导出 MAR1的数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个lakehouses：\n·Lakehouse1：将存储来自源的原始数据和清洗数据\n·Lakehouse2：将以维度模型的形式为用户提供分析查询数据\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码管理。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion architecture：bronze、silver 和 gold。为了填充 silver 层中的 MAR1 数据，将需要广泛的数据清洗，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码管理。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接导入源数据。\n·在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上无关紧要，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码管理的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q098",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "select",
  "options": [],
  "answer": [
   "sort",
   "extend",
   "project"
  ],
  "pdfAnswer": [
   "sort",
   "extend",
   "project"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "evaluate",
      "en": "evaluate",
      "zh": "evaluate"
     },
     {
      "key": "extend",
      "en": "extend",
      "zh": "extend"
     },
     {
      "key": "lookup",
      "en": "lookup",
      "zh": "lookup"
     },
     {
      "key": "project",
      "en": "project",
      "zh": "project"
     },
     {
      "key": "sort",
      "en": "sort",
      "zh": "sort"
     },
     {
      "key": "summarize",
      "en": "summarize",
      "zh": "summarize"
     },
     {
      "key": "take",
      "en": "take",
      "zh": "take"
     }
    ],
    "answer": "sort"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "evaluate",
      "en": "evaluate",
      "zh": "evaluate"
     },
     {
      "key": "extend",
      "en": "extend",
      "zh": "extend"
     },
     {
      "key": "lookup",
      "en": "lookup",
      "zh": "lookup"
     },
     {
      "key": "project",
      "en": "project",
      "zh": "project"
     },
     {
      "key": "sort",
      "en": "sort",
      "zh": "sort"
     },
     {
      "key": "summarize",
      "en": "summarize",
      "zh": "summarize"
     },
     {
      "key": "take",
      "en": "take",
      "zh": "take"
     }
    ],
    "answer": "extend"
   },
   {
    "id": "3",
    "label": "框 3",
    "labelEn": "Box 3",
    "labelZh": "框 3",
    "choices": [
     {
      "key": "evaluate",
      "en": "evaluate",
      "zh": "evaluate"
     },
     {
      "key": "extend",
      "en": "extend",
      "zh": "extend"
     },
     {
      "key": "lookup",
      "en": "lookup",
      "zh": "lookup"
     },
     {
      "key": "project",
      "en": "project",
      "zh": "project"
     },
     {
      "key": "sort",
      "en": "sort",
      "zh": "sort"
     },
     {
      "key": "summarize",
      "en": "summarize",
      "zh": "summarize"
     },
     {
      "key": "take",
      "en": "take",
      "zh": "take"
     }
    ],
    "answer": "project"
   }
  ],
  "template": "Readings\n| filter City == \"Kansas\"\n{{1}} by Timestamp\n{{2}} PrevMeterReading = prev(MeterReading),\n      PrevTimestamp = prev(Timestamp)\n{{3}} City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimeStamp",
  "templateEn": "Readings\n| filter City == \"Kansas\"\n{{1}} by Timestamp\n{{2}} PrevMeterReading = prev(MeterReading),\n      PrevTimestamp = prev(Timestamp)\n{{3}} City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimeStamp",
  "templateZh": "Readings\n| filter City == \"Kansas\"\n{{1}} by Timestamp\n{{2}} PrevMeterReading = prev(MeterReading),\n      PrevTimestamp = prev(Timestamp)\n{{3}} City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimeStamp",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "-\n您有一个 KQL 数据库，其中包含一个名为 Readings 的表。\n您需要构建一个 KQL 查询，以根据 Timestamp 值将每行的 MeterReading 值与上一行进行比较。\n以下表格显示了预期输出的示例。\n```\nCity | Area | MeterReading | Timestamp | PrevMeterReading | PrevTimestamp\nKansas | Area1 | 1500 | 2024-07-30 10:00:00 |  | \nKansas | Area2 | 1520 | 2024-07-30 11:00:00 | 1500 | 2024-07-30 10:00:00\nKansas | Area1 | 1550 | 2024-07-30 12:00:00 | 1520 | 2024-07-30 11:00:00\nKansas | Area2 | 1580 | 2024-07-30 13:00:00 | 1550 | 2024-07-30 12:00:00\n```\n您应该如何完成查询？要回答，请将适当的值拖到正确的目标位置。每个值可以使用一次、多次或不使用。您可能需要拖动拆分栏或滚动以\n注意：每个正确选择都值得一分。",
  "stemZh": "-\n您有一个 KQL 数据库，其中包含一个名为 Readings 的表。\n您需要构建一个 KQL 查询，以根据 Timestamp 值将每行的 MeterReading 值与上一行进行比较。\n以下表格显示了预期输出的示例。\n```\nCity | Area | MeterReading | Timestamp | PrevMeterReading | PrevTimestamp\nKansas | Area1 | 1500 | 2024-07-30 10:00:00 |  | \nKansas | Area2 | 1520 | 2024-07-30 11:00:00 | 1500 | 2024-07-30 10:00:00\nKansas | Area1 | 1550 | 2024-07-30 12:00:00 | 1520 | 2024-07-30 11:00:00\nKansas | Area2 | 1580 | 2024-07-30 13:00:00 | 1550 | 2024-07-30 12:00:00\n```\n您应该如何完成查询？要回答，请将适当的值拖到正确的目标位置。每个值可以使用一次、多次或不使用。您可能需要拖动拆分栏或滚动以\n注意：每个正确选择都值得一分。",
  "stemEn": "-\nYou have a KQL database that contains a table named Readings.\nYou need to build a KQL query to compare the MeterReading value of each row to the previous row base on the Timestamp value.\nA sample of the expected output is shown in the following table.\n```\nCity | Area | MeterReading | Timestamp | PrevMeterReading | PrevTimestamp\nKansas | Area1 | 1500 | 2024-07-30 10:00:00 |  | \nKansas | Area2 | 1520 | 2024-07-30 11:00:00 | 1500 | 2024-07-30 10:00:00\nKansas | Area1 | 1550 | 2024-07-30 12:00:00 | 1520 | 2024-07-30 11:00:00\nKansas | Area2 | 1580 | 2024-07-30 13:00:00 | 1550 | 2024-07-30 12:00:00\n```\nHow should you complete the query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 293 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的基本操作，包括数据排序（sort）、扩展字段（extend）、以及投影字段（project）。\n重点在于如何使用KQL函数如prevO来获取前一行的值，并正确构建查询以实现所需的输出。\n2. 选项分析\nsort:正确。需要对数据按时间戳（Timestamp）进行排序，以确保前后行的关系正确。\nextend:正确。使用 extend 可以创建新的字段，利用 prevO 函数获取前一行的 MeterReading 和 Timestamp 值。\nproject:正确。使用 project 可以选择需要输出的字段并按要求组织结果。\nevaluate:错误。evaluate 通常用于执行复杂的分析操作或插件功能，不适用于本题的场景。\nlookup:错误。lookup用于连接两个表的数据，而本题只涉及单表操作。\nsummarize：错误。summarize 用于聚合数据，而本题需要逐行比较，不涉及聚合操作。\ntake:错误。take 用于限制返回的行数，与本题无关。\n3. 我的答案\nReadings\n| filter City == \"Kansas\"\n| sort by Timestamp\n| extend PrevMeterReading = prev(MeterReading), PrevTimestamp = prev(Timestamp)\n| project City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimestamp 4. 官方答案Readings | filter City == \"Kansas\" | sort by Timestamp | extend PrevMeterReading = prev(MeterReading), PrevTimestamp = prev(Timestamp)\n| project City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimestamp 5. 比较与分析我的答案与官方答案完全一致。\n没有任何差异，说明我的理解和选择是正确的。",
  "explanationZh": "【答案来源】PDF 第 293 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是KQL（Kusto Query Language）的基本操作，包括数据排序（sort）、扩展字段（extend）、以及投影字段（project）。\n重点在于如何使用KQL函数如prevO来获取前一行的值，并正确构建查询以实现所需的输出。\n2. 选项分析\nsort:正确。需要对数据按时间戳（Timestamp）进行排序，以确保前后行的关系正确。\nextend:正确。使用 extend 可以创建新的字段，利用 prevO 函数获取前一行的 MeterReading 和 Timestamp 值。\nproject:正确。使用 project 可以选择需要输出的字段并按要求组织结果。\nevaluate:错误。evaluate 通常用于执行复杂的分析操作或插件功能，不适用于本题的场景。\nlookup:错误。lookup用于连接两个表的数据，而本题只涉及单表操作。\nsummarize：错误。summarize 用于聚合数据，而本题需要逐行比较，不涉及聚合操作。\ntake:错误。take 用于限制返回的行数，与本题无关。\n3. 我的答案\nReadings\n| filter City == \"Kansas\"\n| sort by Timestamp\n| extend PrevMeterReading = prev(MeterReading), PrevTimestamp = prev(Timestamp)\n| project City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimestamp 4. 官方答案Readings | filter City == \"Kansas\" | sort by Timestamp | extend PrevMeterReading = prev(MeterReading), PrevTimestamp = prev(Timestamp)\n| project City, Area, MeterReading, Timestamp, PrevMeterReading, PrevTimestamp 5. 比较与分析我的答案与官方答案完全一致。\n没有任何差异，说明我的理解和选择是正确的。",
  "explanationEn": "[Answer source] PDF p.293 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 38,
  "pdfPage": 292,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 38",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 38",
  "pdfQuestionNum": 38,
  "topic": 2
 },
 {
  "id": "dp700-q099",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "A data pipeline",
   "Apache Spark Structured Streaming",
   "A streaming dataflow"
  ],
  "pdfAnswer": [
   "A data pipeline",
   "Apache Spark Structured Streaming",
   "A streaming dataflow"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Source1",
    "labelEn": "Source1",
    "labelZh": "Source1",
    "choices": [
     {
      "key": "Apache Spark Structured Streaming",
      "en": "Apache Spark Structured Streaming",
      "zh": "Apache Spark 结构化流 (Structured Streaming)"
     },
     {
      "key": "An eventstream",
      "en": "An eventstream",
      "zh": "eventstream（事件流）"
     },
     {
      "key": "A data pipeline",
      "en": "A data pipeline",
      "zh": "数据管道"
     },
     {
      "key": "A streaming dataflow",
      "en": "A streaming dataflow",
      "zh": "流式数据流"
     }
    ],
    "answer": "A data pipeline"
   },
   {
    "id": "2",
    "label": "Source2",
    "labelEn": "Source2",
    "labelZh": "Source2",
    "choices": [
     {
      "key": "Apache Spark Structured Streaming",
      "en": "Apache Spark Structured Streaming",
      "zh": "Apache Spark 结构化流 (Structured Streaming)"
     },
     {
      "key": "An eventstream",
      "en": "An eventstream",
      "zh": "eventstream（事件流）"
     },
     {
      "key": "A data pipeline",
      "en": "A data pipeline",
      "zh": "数据管道"
     },
     {
      "key": "A streaming dataflow",
      "en": "A streaming dataflow",
      "zh": "流式数据流"
     }
    ],
    "answer": "Apache Spark Structured Streaming"
   },
   {
    "id": "3",
    "label": "Source3",
    "labelEn": "Source3",
    "labelZh": "Source3",
    "choices": [
     {
      "key": "Apache Spark Structured Streaming",
      "en": "Apache Spark Structured Streaming",
      "zh": "Apache Spark 结构化流 (Structured Streaming)"
     },
     {
      "key": "An eventstream",
      "en": "An eventstream",
      "zh": "eventstream（事件流）"
     },
     {
      "key": "A data pipeline",
      "en": "A data pipeline",
      "zh": "数据管道"
     },
     {
      "key": "A streaming dataflow",
      "en": "A streaming dataflow",
      "zh": "流式数据流"
     }
    ],
    "answer": "A streaming dataflow"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您需要推荐一个 Fabric 流媒体解决方案，该解决方案将使用下表中显示的来源。\n```\nName | Message size | Description\nSource1 | 10 MB | Contains semi-structured data that has a bigint column in the messages\nSource2 | 25 MB | Contains structured data that has 19 columns\nSource3 | 5 MB | Contains unstructured data that has images in the messages\n```\n该解决方案必须尽量减少开发工作量。\n对于每个来源，您应该在推荐中包含什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "-\n您需要推荐一个 Fabric 流媒体解决方案，该解决方案将使用下表中显示的来源。\n```\nName | Message size | Description\nSource1 | 10 MB | Contains semi-structured data that has a bigint column in the messages\nSource2 | 25 MB | Contains structured data that has 19 columns\nSource3 | 5 MB | Contains unstructured data that has images in the messages\n```\n该解决方案必须尽量减少开发工作量。\n对于每个来源，您应该在推荐中包含什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "-\nYou need to recommend a Fabric streaming solution that will use the sources shown in the following table.\n```\nName | Message size | Description\nSource1 | 10 MB | Contains semi-structured data that has a bigint column in the messages\nSource2 | 25 MB | Contains structured data that has 19 columns\nSource3 | 5 MB | Contains unstructured data that has images in the messages\n```\nThe solution must minimize development effort.\nWhat should you include in the recommendation for each source? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 296 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是Azure数据工程师在DP-700考试中关于数据流处理的知识点，包括如何选择合适的流处理技术（如Apache Spark Structured Streaming、数据管道、事件流、流数据流）来处理不同类型的数据源。\n重点关注数据的结构化程度、消息大小以及开发效率的要求。\n2. 选项分析\nSource1: 10 MB, 半结构化数据，包含bigint列\nApache Spark Structured Streaming：适合处理半结构化数据，支持大规模数据流处理，但开发复杂度较高，不符合“最小化开发努力”的要求。\nAn eventstream：事件流通常用于处理小型、实时事件数据，不适合处理10 MB的半结构化数据。\nA data pipeline：数据管道可以处理半结构化数据，且开发复杂度较低，符合题目要求。\nA streaming dataflow：流数据流适合实时数据处理，但通常用于更小的数据量，不适合10 MB的消息大小。\n选择答案：A data pipeline\nSource2: 25 MB, 结构化数据，包含19列\nApache Spark Structured Streaming：非常适合处理大规模结构化数据，支持复杂的流处理逻辑，且对25 MB的消息大小处理能力强。\nAn eventstream：事件流不适合处理大规模结构化数据，通常用于小型实时事件数据。\nA data pipeline：数据管道虽然可以处理结构化数据，但对于25 MB的消息大小和复杂结构化数据，可能不如Apache Spark Structured Streaming高效。\nA streaming dataflow：流数据流通常用于实时数据处理，但对复杂结构化数据的支持有限。\n选择答案：Apache Spark Structured Streaming\nSource3: 5 MB, 非结构化数据，包含图像\nApache Spark Structured Streaming：适合处理非结构化数据，但开发复杂度较高，不符合“最小化开发努力”的要求。\nAn eventstream：事件流不适合处理图像数据，通常用于小型实时事件数据。\nA data pipeline：数据管道可以处理非结构化数据，且开发复杂度较低，符合题目要求。\nA streaming dataflow：流数据流适合实时数据处理，但对图像数据的支持有限。\n选择答案：A data pipeline\n3. 我的答案\nSource1: A data pipeline\nSource2: Apache Spark Structured Streaming\nSource3: A data pipeline\n4. 官方答案\nSource1: A data pipeline\nSource2: Apache Spark Structured Streaming\nSource3: A streaming dataflow\n5. 与官方答案比较\nSource1：我的答案与官方答案一致，选择A data pipeline，理由是数据管道适合处理半结构化数据，且开发复杂度较低。\nSource2：我的答案与官方答案一致，选择Apache Spark Structured Streaming，理由是它适合处理大规模结构化数据。\nSource3：我的答案与官方答案不同。我选择了A data pipeline，而官方答案是A streaming dataflow。重新思考后，官方答案可能是基于流数据流对实时非结构化数据（如图像）的处理能力更强，尽管开发复杂度可能稍高，但在实时性方面更优。\n最终答案：我接受官方答案，修正Source3为A streaming dataflow。",
  "explanationZh": "【答案来源】PDF 第 296 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是Azure数据工程师在DP-700考试中关于数据流处理的知识点，包括如何选择合适的流处理技术（如Apache Spark Structured Streaming、数据管道、事件流、流数据流）来处理不同类型的数据源。\n重点关注数据的结构化程度、消息大小以及开发效率的要求。\n2. 选项分析\nSource1: 10 MB, 半结构化数据，包含bigint列\nApache Spark Structured Streaming：适合处理半结构化数据，支持大规模数据流处理，但开发复杂度较高，不符合“最小化开发努力”的要求。\nAn eventstream：事件流通常用于处理小型、实时事件数据，不适合处理10 MB的半结构化数据。\nA data pipeline：数据管道可以处理半结构化数据，且开发复杂度较低，符合题目要求。\nA streaming dataflow：流数据流适合实时数据处理，但通常用于更小的数据量，不适合10 MB的消息大小。\n选择答案：A data pipeline\nSource2: 25 MB, 结构化数据，包含19列\nApache Spark Structured Streaming：非常适合处理大规模结构化数据，支持复杂的流处理逻辑，且对25 MB的消息大小处理能力强。\nAn eventstream：事件流不适合处理大规模结构化数据，通常用于小型实时事件数据。\nA data pipeline：数据管道虽然可以处理结构化数据，但对于25 MB的消息大小和复杂结构化数据，可能不如Apache Spark Structured Streaming高效。\nA streaming dataflow：流数据流通常用于实时数据处理，但对复杂结构化数据的支持有限。\n选择答案：Apache Spark Structured Streaming\nSource3: 5 MB, 非结构化数据，包含图像\nApache Spark Structured Streaming：适合处理非结构化数据，但开发复杂度较高，不符合“最小化开发努力”的要求。\nAn eventstream：事件流不适合处理图像数据，通常用于小型实时事件数据。\nA data pipeline：数据管道可以处理非结构化数据，且开发复杂度较低，符合题目要求。\nA streaming dataflow：流数据流适合实时数据处理，但对图像数据的支持有限。\n选择答案：A data pipeline\n3. 我的答案\nSource1: A data pipeline\nSource2: Apache Spark Structured Streaming\nSource3: A data pipeline\n4. 官方答案\nSource1: A data pipeline\nSource2: Apache Spark Structured Streaming\nSource3: A streaming dataflow\n5. 与官方答案比较\nSource1：我的答案与官方答案一致，选择A data pipeline，理由是数据管道适合处理半结构化数据，且开发复杂度较低。\nSource2：我的答案与官方答案一致，选择Apache Spark Structured Streaming，理由是它适合处理大规模结构化数据。\nSource3：我的答案与官方答案不同。我选择了A data pipeline，而官方答案是A streaming dataflow。重新思考后，官方答案可能是基于流数据流对实时非结构化数据（如图像）的处理能力更强，尽管开发复杂度可能稍高，但在实时性方面更优。\n最终答案：我接受官方答案，修正Source3为A streaming dataflow。",
  "explanationEn": "[Answer source] PDF p.296 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 39,
  "pdfPage": 295,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 39",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 39",
  "pdfQuestionNum": 39,
  "topic": 2
 },
 {
  "id": "dp700-q100",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "No",
   "No",
   "Yes"
  ],
  "pdfAnswer": [
   "No",
   "No",
   "Yes"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "目标表将始终被覆盖。",
    "labelEn": "The target table will always be overwritten.",
    "labelZh": "目标表将始终被覆盖。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "2",
    "label": "merge 操作将始终运行。",
    "labelEn": "The merge operation will always run.",
    "labelZh": "merge 操作将始终运行。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "3",
    "label": "该代码支持增量加载和初始表创建。",
    "labelEn": "The code supports incremental loading and the initial table creation.",
    "labelZh": "该代码支持增量加载和初始表创建。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   }
  ],
  "answerSource": "image",
  "stem": "-\n您正在为 Fabric notebook 工作负载构建数据加载模式。\n您有以下代码段。\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n            print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确的选择都值一分。",
  "stemZh": "-\n您正在为 Fabric notebook 工作负载构建数据加载模式。\n您有以下代码段。\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n            print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\n对于以下每个陈述，如果该陈述为真，请选择“是”。否则，请选择“否”。\n注意：每个正确的选择都值一分。",
  "stemEn": "-\nYou are building a data loading pattern for Fabric notebook workloads.\nYou have the following code segment.\n```\ndef loading_pattern_sample(df_source):\n    try:\n        deltaTable = DeltaTable.forName(spark, target_table)\n    except Exception:\n        try:\n            df_source.write.format('delta').mode('overwrite').saveAsTable(f\"{target_table}\")\n        except Exception as e:\n            print(f':Load for table {target_table} failed with error: {str(e)}')\n            raise\n        return\n\n    try:\n        change_detection_columns = [col for col in df_source.columns if col not in candidate_key]\n\n        match_condition = ' AND '.join([f'target.{col} = source.{col}' for col in candidate_key])\n        update_condition = ' OR '.join([f'target.{col} != source.{col}' for col in change_detection_columns])\n\n        update_expr = {col: f'source.{col}' for col in df_source.columns}\n\n        merge_operation = deltaTable.alias('target').merge(\n            source=df_source.alias('source'),\n            condition=match_condition\n        ).whenMatchedUpdate(\n            condition=update_condition,\n            set=update_expr\n        ).whenNotMatchedInsertAll()\n\n        merge_operation.execute()\n    except Exception as e:\n            print(f'Insert operation for table {target_table} failed with error: {str(e)}')\n    return\n```\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 300 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDelta Lake的操作，包括表的创建、增量加载和合并操作。\n异常处理机制。\n数据加载模式的设计与实现。\n2. 选项分析\nThe target table will always be overwritten.\n错误。代码中只有在目标表不存在时才会执行 `df_source.write.format('delta').mode('overwrite').saveAsTable(...)`，因此目标表并不会总是被覆盖。\nThe merge operation will always run.\n错误。代码中只有在目标表存在时才会执行 `merge_operation.execute()`，如果目标表不存在，则不会运行合并操作。\nThe code supports incremental loading and the initial table creation.\n正确。代码首先检查目标表是否存在，如果不存在则创建表；如果存在，则执行增量加载（合并操作）。这表明代码支持初始表创建和增量加载。\n3. 我选的答案\nThe target table will always be overwritten: No\nThe merge operation will always run: No\nThe code supports incremental loading and the initial table creation: Yes 4. 官方答案The code supports incremental loading and the initial table creation: Yes 5. 与官方答案比较我的答案与官方答案一致，没有差异。",
  "explanationZh": "【答案来源】PDF 第 300 页答案图\n\n题目分析与解答\n1. 考察的知识点\nDelta Lake的操作，包括表的创建、增量加载和合并操作。\n异常处理机制。\n数据加载模式的设计与实现。\n2. 选项分析\nThe target table will always be overwritten.\n错误。代码中只有在目标表不存在时才会执行 `df_source.write.format('delta').mode('overwrite').saveAsTable(...)`，因此目标表并不会总是被覆盖。\nThe merge operation will always run.\n错误。代码中只有在目标表存在时才会执行 `merge_operation.execute()`，如果目标表不存在，则不会运行合并操作。\nThe code supports incremental loading and the initial table creation.\n正确。代码首先检查目标表是否存在，如果不存在则创建表；如果存在，则执行增量加载（合并操作）。这表明代码支持初始表创建和增量加载。\n3. 我选的答案\nThe target table will always be overwritten: No\nThe merge operation will always run: No\nThe code supports incremental loading and the initial table creation: Yes 4. 官方答案The code supports incremental loading and the initial table creation: Yes 5. 与官方答案比较我的答案与官方答案一致，没有差异。",
  "explanationEn": "[Answer source] PDF p.300 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 40,
  "pdfPage": 299,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "引入和转换数据 · 主题 2 · 问题 40",
  "pdfRefEn": "Ingest and transform data · Topic 2 · Question 40",
  "pdfQuestionNum": 40,
  "topic": 2
 },
 {
  "id": "dp700-q101",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "an eventstream",
    "textEn": "an eventstream",
    "textZh": "an eventstream"
   },
   {
    "id": "B",
    "text": "Apache Spark Structured Streaming",
    "textEn": "Apache Spark Structured Streaming",
    "textZh": "Apache Spark Structured Streaming"
   },
   {
    "id": "C",
    "text": "a streaming dataset",
    "textEn": "a streaming dataset",
    "textZh": "a streaming dataset"
   },
   {
    "id": "D",
    "text": "a KQL queryset",
    "textEn": "a KQL queryset",
    "textZh": "a KQL queryset"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个 Azure event hub。每个事件包含以下字段：\n• BikepointID\n• Street\n• Neighbourhood\n• Latitude\n• Longitude\n• No_Bikes\n• No_Empty_Docks\n你需要摄取这些事件。解决方案必须仅保留 Neighbourhood 值为 Chelsea 的事件，然后将保留的事件存储在 Fabric lakehouse 中。\n在发生故障的情况下，数据保留要求为两天。\n你应该使月",
  "stemZh": "你有一个 Azure event hub。每个事件包含以下字段：\n• BikepointID\n• Street\n• Neighbourhood\n• Latitude\n• Longitude\n• No_Bikes\n• No_Empty_Docks\n你需要摄取这些事件。解决方案必须仅保留 Neighbourhood 值为 Chelsea 的事件，然后将保留的事件存储在 Fabric lakehouse 中。\n在发生故障的情况下，数据保留要求为两天。\n你应该使月",
  "stemEn": "You have an Azure event hub. Each event contains the following fields:\n• BikepointID\n• Street\n• Neighbourhood\n• Latitude\n• Longitude\n• No_Bikes\n• No_Empty_Docks\nYou need to ingest the events. The solution must only retain events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse.\nData retention in case of failure is required to be two days.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nAzure Event Hub数据处理与流式数据处理。\n数据过滤与存储到Fabric lakehouse。\n数据保留策略（两天保留）。\n2. 选项分析\nA.an eventstream：正确。Eventstream是Azure Fabric中的一种流式数据处理工具，支持实时数据过滤（如按Neighbourhood值过滤），并且可以直接将数据存储到Fabric lakehouse。此外，它支持数据保留策略，满足两天保留的要求。\nB. Apache Spark Structured Streaming: 错误。虽然Apache Spark Structured Streaming可以处理流式数据并进行过滤，但它不是Azure Fabric的原生工具，且题目要求直接存储到Fabric lakehouse，而Eventstream更适合此场景。\nC.a streaming dataset:错误。 Streaming dataset通常用于Power BI实时数据可视化，而不是用于数据过滤和存储到Fabric lakehouse。\nD.a KQL queryset:错误。KQL（Kusto Query Language）主要用于查询Azure Data Explorer中的数据，而不是用于实时流式数据处理和存储到Fabric lakehouse。\n3. 我的答案\nA. an eventstream\n4. 官方答案\nA. an eventstream\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nAzure Event Hub数据处理与流式数据处理。\n数据过滤与存储到Fabric lakehouse。\n数据保留策略（两天保留）。\n2. 选项分析\nA.an eventstream：正确。Eventstream是Azure Fabric中的一种流式数据处理工具，支持实时数据过滤（如按Neighbourhood值过滤），并且可以直接将数据存储到Fabric lakehouse。此外，它支持数据保留策略，满足两天保留的要求。\nB. Apache Spark Structured Streaming: 错误。虽然Apache Spark Structured Streaming可以处理流式数据并进行过滤，但它不是Azure Fabric的原生工具，且题目要求直接存储到Fabric lakehouse，而Eventstream更适合此场景。\nC.a streaming dataset:错误。 Streaming dataset通常用于Power BI实时数据可视化，而不是用于数据过滤和存储到Fabric lakehouse。\nD.a KQL queryset:错误。KQL（Kusto Query Language）主要用于查询Azure Data Explorer中的数据，而不是用于实时流式数据处理和存储到Fabric lakehouse。\n3. 我的答案\nA. an eventstream\n4. 官方答案\nA. an eventstream\n5. 与官方答案比较\n我的答案与官方答案一致，没有差异。",
  "explanationEn": "Correct Answer: A",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 41,
  "pdfPage": 302,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "监视和优化分析解决方案 · 主题 2 · 问题 41",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 2 · Question 41",
  "pdfQuestionNum": 41,
  "topic": 2
 },
 {
  "id": "dp700-q102",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "multi",
  "options": [
   {
    "id": "A",
    "text": "an activator item",
    "textEn": "an activator item",
    "textZh": "an activator item"
   },
   {
    "id": "B",
    "text": "a data pipeline",
    "textEn": "a data pipeline",
    "textZh": "a data pipeline"
   },
   {
    "id": "C",
    "text": "a blob storage action",
    "textEn": "a blob storage action",
    "textZh": "a blob storage action"
   },
   {
    "id": "D",
    "text": "a time-based schedule",
    "textEn": "a time-based schedule",
    "textZh": "a time-based schedule"
   },
   {
    "id": "E",
    "text": "a streaming dataflow",
    "textEn": "a streaming dataflow",
    "textZh": "a streaming dataflow"
   },
   {
    "id": "F",
    "text": "a notebook that uses Apache Spark Structured Streaming",
    "textEn": "a notebook that uses Apache Spark Structured Streaming",
    "textZh": "a notebook that uses Apache Spark Structured Streaming"
   }
  ],
  "answer": [
   "A",
   "B"
  ],
  "pdfAnswer": [
   "A",
   "B"
  ],
  "answerSource": "text",
  "stem": "注意：每个正确选择都值一分。",
  "stemZh": "注意：每个正确选择都值一分。",
  "stemEn": "You need to create a workflow for the new book cover images.\nWhich two components should you include in the workflow? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
  "explanation": "题目分析与解答\n1. 考察的知识点\nFabric工作流的设计与实现。\n如何处理新到达的文件并触发后续数据处理。\n理解Fabric中的组件，如激活器项（Activator Item）和数据管道（Data Pipeline）。\n2. 选项分析\nA.an activator item-正确。激活器项是Fabric中用于触发工作流的组件，可以监控文件夹中的新文件并启动后续处理。\nB.a data pipeline-正确。数据管道是Fabric中用于定义数据处理工作流的核心组件，可以连接不同的步骤并实现数据处理逻辑。\nC.a blob storage action-错误。虽然书籍封面图像存储在Azure Blob Storage中，但题目要求使用Fabric服务，而Blob Storage Action是Azure Logic Apps中的操作，不符合题目要求。\nD.a time-based schedule -错误。时间调度适用于定时任务，而题目要求处理新到达的文件，这需要事件驱动的机制，而非时间驱动。\nE.a streaming dataflow-错误。流式数据流适用于实时数据流处理，而题目中处理的是文件到达事件，不需要流式数据流。\nF.a notebook that uses Apache Spark Structured Streaming-错误。虽然Structured Streaming可以处理实时数据，但题目要求的是工作流设计，Notebook并不是工作流的核心组件。\n3. 我的答案\nA. an activator item\nB. a data pipeline\n4. 官方答案\nA. an activator item\nB. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nFabric工作流的设计与实现。\n如何处理新到达的文件并触发后续数据处理。\n理解Fabric中的组件，如激活器项（Activator Item）和数据管道（Data Pipeline）。\n2. 选项分析\nA.an activator item-正确。激活器项是Fabric中用于触发工作流的组件，可以监控文件夹中的新文件并启动后续处理。\nB.a data pipeline-正确。数据管道是Fabric中用于定义数据处理工作流的核心组件，可以连接不同的步骤并实现数据处理逻辑。\nC.a blob storage action-错误。虽然书籍封面图像存储在Azure Blob Storage中，但题目要求使用Fabric服务，而Blob Storage Action是Azure Logic Apps中的操作，不符合题目要求。\nD.a time-based schedule -错误。时间调度适用于定时任务，而题目要求处理新到达的文件，这需要事件驱动的机制，而非时间驱动。\nE.a streaming dataflow-错误。流式数据流适用于实时数据流处理，而题目中处理的是文件到达事件，不需要流式数据流。\nF.a notebook that uses Apache Spark Structured Streaming-错误。虽然Structured Streaming可以处理实时数据，但题目要求的是工作流设计，Notebook并不是工作流的核心组件。\n3. 我的答案\nA. an activator item\nB. a data pipeline\n4. 官方答案\nA. an activator item\nB. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nFabric工作流的设计与实现。\n如何处理新到达的文件并触发后续数据处理。\n理解Fabric中的组件，如激活器项（Activator Item）和数据管道（Data Pipeline）。\n2. 选项分析\nA.an activator item-正确。激活器项是Fabric中用于触发工作流的组件，可以监控文件夹中的新文件并启动后续处理。\nB.a data pipeline-正确。数据管道是Fabric中用于定义数据处理工作流的核心组件，可以连接不同的步骤并实现数据处理逻辑。\nC.a blob storage action-错误。虽然书籍封面图像存储在Azure Blob Storage中，但题目要求使用Fabric服务，而Blob Storage Action是Azure Logic Apps中的操作，不符合题目要求。\nD.a time-based schedule -错误。时间调度适用于定时任务，而题目要求处理新到达的文件，这需要事件驱动的机制，而非时间驱动。\nE.a streaming dataflow-错误。流式数据流适用于实时数据流处理，而题目中处理的是文件到达事件，不需要流式数据流。\nF.a notebook that uses Apache Spark Structured Streaming-错误。虽然Structured Streaming可以处理实时数据，但题目要求的是工作流设计，Notebook并不是工作流的核心组件。\n3. 我的答案\nA. an activator item\nB. a data pipeline\n4. 官方答案\nA. an activator item\nB. a data pipeline\n5. 与官方答案比较\n我的答案与官方答案一致。\n没有差异，无需重新思考。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 42,
  "pdfPage": 304,
  "pdfSet": "主题 2",
  "pdfSetEn": "Topic 2",
  "pdfRef": "实施和管理分析解决方案 · 主题 2 · 问题 42",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 2 · Question 42",
  "pdfQuestionNum": 42,
  "topic": 2,
  "caseStudyId": "dp700-case-6",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是相同的。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于一个禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen2数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队在报告加载失败时收到以下错误消息：\"SQL 查询运行时失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，上个月的销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要为新的书籍封面图像创建一个工作流。\n以下两个组件应包含在工作流中？每个正确答案均为解决方案的一部分。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息是相同的。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 使用以下三个层级实现了medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。 gold 层位于一个禁用\n-Order\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen2数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队在报告加载失败时收到以下错误消息：\"SQL 查询运行时失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，上个月的销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要为新的书籍封面图像创建一个工作流。\n以下两个组件应包含在工作流中？每个正确答案均为解决方案的一部分。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen2 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q103",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "queryinsights.long_running_queries",
   "number_of_failed_runs > 1"
  ],
  "pdfAnswer": [
   "queryinsights.long_running_queries",
   "number_of_failed_runs > 1"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "框 1",
    "labelEn": "Box 1",
    "labelZh": "框 1",
    "choices": [
     {
      "key": "queryinsights.exec_requests_history",
      "en": "queryinsights.exec_requests_history",
      "zh": "queryinsights.exec_requests_history"
     },
     {
      "key": "queryinsights.exec_sessions_history",
      "en": "queryinsights.exec_sessions_history",
      "zh": "queryinsights.exec_sessions_history"
     },
     {
      "key": "queryinsights.frequently_run_queries",
      "en": "queryinsights.frequently_run_queries",
      "zh": "queryinsights.frequently_run_queries"
     },
     {
      "key": "queryinsights.long_running_queries",
      "en": "queryinsights.long_running_queries",
      "zh": "queryinsights.long_running_queries"
     }
    ],
    "answer": "queryinsights.long_running_queries"
   },
   {
    "id": "2",
    "label": "框 2",
    "labelEn": "Box 2",
    "labelZh": "框 2",
    "choices": [
     {
      "key": "max_run_total_elapsed_time_ms > 7200000",
      "en": "max_run_total_elapsed_time_ms > 7200000",
      "zh": "max_run_total_elapsed_time_ms > 7200000"
     },
     {
      "key": "median_total_elapsed_time_ms > 7200000",
      "en": "median_total_elapsed_time_ms > 7200000",
      "zh": "median_total_elapsed_time_ms > 7200000"
     },
     {
      "key": "number_of_canceled_runs > 1",
      "en": "number_of_canceled_runs > 1",
      "zh": "number_of_canceled_runs > 1"
     },
     {
      "key": "number_of_failed_runs > 1",
      "en": "number_of_failed_runs > 1",
      "zh": "number_of_failed_runs > 1"
     },
     {
      "key": "number_of_runs > 1",
      "en": "number_of_runs > 1",
      "zh": "number_of_runs > 1"
     }
    ],
    "answer": "number_of_failed_runs > 1"
   }
  ],
  "template": "SELECT last_run_start_time, last_run_command\nFROM {{1}}\nWHERE last_run_total_elapsed_time_ms > 7200000\nAND {{2}}",
  "templateEn": "SELECT last_run_start_time, last_run_command\nFROM {{1}}\nWHERE last_run_total_elapsed_time_ms > 7200000\nAND {{2}}",
  "templateZh": "SELECT last_run_start_time, last_run_command\nFROM {{1}}\nWHERE last_run_total_elapsed_time_ms > 7200000\nAND {{2}}",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "注意：每个正确选择都值一分。",
  "stemZh": "注意：每个正确选择都值一分。",
  "stemEn": "You need to troubleshoot the ad-hoc query issue.\nHow should you complete the statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 313 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用 Fabric 中的 Query Insights 功能来排查和优化 SQL 查询性能问题。\n重点在于理解 Query Insights 提供的表（如 exec_requests_history、exec_sessions_history等）以及如何筛选出导致性能问题的查询。\n2. 选项分析\n查询表选项分析\nqueryinsights.exec_requests_history：该表记录了每次查询的执行请求历史，但无法直接筛选出长时间运行的查询或失败的查询，因此不适合用于本题场景。\nqueryinsights.exec_sessions_history:该表记录了会话级别的历史信息，主要用于分析会话行为，而不是查询性能问题，因此不适合本题场景。\nqueryinsights.frequently_run_queries:该表记录了频繁运行的查询，但无法直接筛选出长时间运行或失败的查询，因此不适合本题场景。\nqueryinsights.long_running_queries:该表专门记录了运行时间较长的查询，适合用于筛选出导致性能问题的查询，因此是正确选项。\n筛选条件选项分析\nlast_run_total_elapsed_time_ms>7200000:筛选最近一次运行时间超过 2小时的查询，符合题目要求，但题目未提到需要筛选最近运行的查询，因此不适合。\nmax_run_total_elapsed_time_ms>7200000:筛选最大运行时间超过 2 小时的查询，符合题目要求，但题目未提到需要筛选最大运行时间， median_total_elapsed_time_ms>7200000:筛选中位运行时间超过 2小时的查询，符合题目要求，但题目未提到需要筛选中位运行时间， number_of_canceled_runs>1:筛选被取消运行次数超过 1的查询，题目未提到取消运行的查询，因此不适合。\nnumber_of_failed_runs>1:筛选失败运行次数超过 1的查询，符合题目要求，因为题目明确提到需要找到导致多次失败的查询，因此是正确选项。\nnumber_of_runs>1:筛选运行次数超过 1的查询，题目未提到需要筛选运行次数，因此不适合。\n3. 我选的答案\nqueryinsights.long_running_queries\nnumber_of_failed_runs > 1\n4. 官方答案\nqueryinsights.long_running_queries\nnumber_of_failed_runs > 1\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 313 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用 Fabric 中的 Query Insights 功能来排查和优化 SQL 查询性能问题。\n重点在于理解 Query Insights 提供的表（如 exec_requests_history、exec_sessions_history等）以及如何筛选出导致性能问题的查询。\n2. 选项分析\n查询表选项分析\nqueryinsights.exec_requests_history：该表记录了每次查询的执行请求历史，但无法直接筛选出长时间运行的查询或失败的查询，因此不适合用于本题场景。\nqueryinsights.exec_sessions_history:该表记录了会话级别的历史信息，主要用于分析会话行为，而不是查询性能问题，因此不适合本题场景。\nqueryinsights.frequently_run_queries:该表记录了频繁运行的查询，但无法直接筛选出长时间运行或失败的查询，因此不适合本题场景。\nqueryinsights.long_running_queries:该表专门记录了运行时间较长的查询，适合用于筛选出导致性能问题的查询，因此是正确选项。\n筛选条件选项分析\nlast_run_total_elapsed_time_ms>7200000:筛选最近一次运行时间超过 2小时的查询，符合题目要求，但题目未提到需要筛选最近运行的查询，因此不适合。\nmax_run_total_elapsed_time_ms>7200000:筛选最大运行时间超过 2 小时的查询，符合题目要求，但题目未提到需要筛选最大运行时间， median_total_elapsed_time_ms>7200000:筛选中位运行时间超过 2小时的查询，符合题目要求，但题目未提到需要筛选中位运行时间， number_of_canceled_runs>1:筛选被取消运行次数超过 1的查询，题目未提到取消运行的查询，因此不适合。\nnumber_of_failed_runs>1:筛选失败运行次数超过 1的查询，符合题目要求，因为题目明确提到需要找到导致多次失败的查询，因此是正确选项。\nnumber_of_runs>1:筛选运行次数超过 1的查询，题目未提到需要筛选运行次数，因此不适合。\n3. 我选的答案\nqueryinsights.long_running_queries\nnumber_of_failed_runs > 1\n4. 官方答案\nqueryinsights.long_running_queries\nnumber_of_failed_runs > 1\n5. 与官方答案比较\n我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.313 answer image",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 1,
  "pdfPage": 310,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 1",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 1",
  "pdfQuestionNum": 1,
  "topic": 3,
  "caseStudyId": "dp700-case-4",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层次实现了奖章架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在湖仓的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。gold 层位于禁用 V-Order 的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格 -\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)处理 SEO 数据。\n使书评可用于湖仓，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要排查临时查询问题。\n您应如何完成陈述？要回答，请在答案区域中选择适当的选项。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审查屏幕。此屏幕允许您在进入考试的下一部分之前审查您的答案并进行更改。一旦开始新的部分，您将无法返回此部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有“所有信息”选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备回答问题时，单击\"问题\"按钮返回问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层次实现了奖章架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在湖仓的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。gold 层位于禁用 V-Order 的仓库中。\nLitware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。超过一个月的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n价格 -\n单位 -\nSKU -\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\nFabric Admins -\nStreaming Admins -\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司的销售团队报告说，在上个月期间，销售数据在他们早上上班时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3)存储桶公开数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n以近实时 (NRT)处理 SEO 数据。\n使书评可用于湖仓，而无需复制数据。\n当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。\n您需要排查临时查询问题。\n您应如何完成陈述？要回答，请在答案区域中选择适当的选项。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\nSales Date -\nAuthor -\nPrice -\nUnits -\nSKU -\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\nSales -\nFabric Admins -\nStreaming Admins -\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\nProcess the SEO data in near-real-time (NRT).\nMake the book reviews available in the lakehouse without making a copy of the data.\nWhen a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q104",
  "examId": "dp-700",
  "domain": "implement",
  "domainLabel": "实施和管理分析解决方案 (估)",
  "domainLabelZh": "实施和管理分析解决方案 (估)",
  "domainLabelEn": "Implement and manage an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "安排一个调用其他数据管道的数据管道。",
    "textEn": "Schedule a data pipeline that calls other data pipelines.",
    "textZh": "安排一个调用其他数据管道的数据管道。"
   },
   {
    "id": "B",
    "text": "Schedule a notebook.",
    "textEn": "Schedule a notebook.",
    "textZh": "Schedule a notebook."
   },
   {
    "id": "C",
    "text": "安排一个 Apache Spark 作业。",
    "textEn": "Schedule an Apache Spark job.",
    "textZh": "安排一个 Apache Spark 作业。"
   },
   {
    "id": "D",
    "text": "安排多",
    "textEn": "Schedule multiple data pipelines.",
    "textZh": "安排多"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "您需要安排 medallion 层的填充以满足技术需求。\n您应该怎么",
  "stemZh": "您需要安排 medallion 层的填充以满足技术需求。\n您应该怎么",
  "stemEn": "You need to schedule the population of the medallion layers to meet the technical requirements.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nFabric中的数据管道调度与管理。\n如何实现符合技术要求的多层数据处理（Bronze,Silver，Gold）。\n数据工程任务的自动化与错误处理机制。\n2. 选项分析\nA. Schedule a data pipeline that calls other data pipelines.\n正确：此选项符合技术要求，因为可以通过一个主数据管道调用其他子数据管道来实现分层数据处理（Bronze，Silver，Gold）。\n支持并行处理：主数据管道可以调度多个子管道以实现同时运行。\n错误处理：可以在主管道中设置失败处理逻辑，例如发送邮件通知。\nB. Schedule a notebook.\n错误：Notebook适合交互式开发和调试，但不适合复杂的调度任务，尤其是需要调用多个子任务的场景。\nNotebook的调度能力有限，无法满足技术要求中的并行处理和失败通知。\nC. Schedule an Apache Spark job.\n错误：虽然Apache Spark可以处理大规模数据，但单个Spark作业无法实现分层数据处理的调度需求。\n此选项不支持调用其他子任务或管道，无法满足技术要求中的分层架构和失败处理。\nD. Schedule multiple data pipelines.\n错误：虽然可以分别调度多个数据管道，但缺乏一个主管道来统一管理和调用这些子管道。\n此选项增加了调度复杂性，不符合技术要求中的自动化和失败处理需求。\n3. 我的答案\nA. Schedule a data pipeline that calls other data pipelines.\n4. 官方答案\nA. Schedule a data pipeline that calls other data pipelines.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：选项A最符合技术要求，包括分层数据处理、并行运行、失败处理和自动化调度。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nFabric中的数据管道调度与管理。\n如何实现符合技术要求的多层数据处理（Bronze,Silver，Gold）。\n数据工程任务的自动化与错误处理机制。\n2. 选项分析\nA. Schedule a data pipeline that calls other data pipelines.\n正确：此选项符合技术要求，因为可以通过一个主数据管道调用其他子数据管道来实现分层数据处理（Bronze，Silver，Gold）。\n支持并行处理：主数据管道可以调度多个子管道以实现同时运行。\n错误处理：可以在主管道中设置失败处理逻辑，例如发送邮件通知。\nB. Schedule a notebook.\n错误：Notebook适合交互式开发和调试，但不适合复杂的调度任务，尤其是需要调用多个子任务的场景。\nNotebook的调度能力有限，无法满足技术要求中的并行处理和失败通知。\nC. Schedule an Apache Spark job.\n错误：虽然Apache Spark可以处理大规模数据，但单个Spark作业无法实现分层数据处理的调度需求。\n此选项不支持调用其他子任务或管道，无法满足技术要求中的分层架构和失败处理。\nD. Schedule multiple data pipelines.\n错误：虽然可以分别调度多个数据管道，但缺乏一个主管道来统一管理和调用这些子管道。\n此选项增加了调度复杂性，不符合技术要求中的自动化和失败处理需求。\n3. 我的答案\nA. Schedule a data pipeline that calls other data pipelines.\n4. 官方答案\nA. Schedule a data pipeline that calls other data pipelines.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：选项A最符合技术要求，包括分层数据处理、并行运行、失败处理和自动化调度。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nFabric中的数据管道调度与管理。\n如何实现符合技术要求的多层数据处理（Bronze,Silver，Gold）。\n数据工程任务的自动化与错误处理机制。\n2. 选项分析\nA. Schedule a data pipeline that calls other data pipelines.\n正确：此选项符合技术要求，因为可以通过一个主数据管道调用其他子数据管道来实现分层数据处理（Bronze，Silver，Gold）。\n支持并行处理：主数据管道可以调度多个子管道以实现同时运行。\n错误处理：可以在主管道中设置失败处理逻辑，例如发送邮件通知。\nB. Schedule a notebook.\n错误：Notebook适合交互式开发和调试，但不适合复杂的调度任务，尤其是需要调用多个子任务的场景。\nNotebook的调度能力有限，无法满足技术要求中的并行处理和失败通知。\nC. Schedule an Apache Spark job.\n错误：虽然Apache Spark可以处理大规模数据，但单个Spark作业无法实现分层数据处理的调度需求。\n此选项不支持调用其他子任务或管道，无法满足技术要求中的分层架构和失败处理。\nD. Schedule multiple data pipelines.\n错误：虽然可以分别调度多个数据管道，但缺乏一个主管道来统一管理和调用这些子管道。\n此选项增加了调度复杂性，不符合技术要求中的自动化和失败处理需求。\n3. 我的答案\nA. Schedule a data pipeline that calls other data pipelines.\n4. 官方答案\nA. Schedule a data pipeline that calls other data pipelines.\n5. 与官方答案的比较\n我的答案与官方答案一致。\n原因：选项A最符合技术要求，包括分层数据处理、并行运行、失败处理和自动化调度。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 2,
  "pdfPage": 315,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "实施和管理分析解决方案 · 主题 3 · 问题 2",
  "pdfRefEn": "Implement and manage an analytics solution · Topic 3 · Question 2",
  "pdfQuestionNum": 2,
  "topic": 3,
  "caseStudyId": "dp700-case-5",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。有12个文件，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您在进入考试的下一部分之前审阅您的答案并进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示诸如业务需求、现有环境和问题陈述等信息。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，请单击\"问题\"按钮返回到问题。\n概述。公司概述 -\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric -\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和 WorkspaceB，目前使用 Pro license 模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure Virtual Machines 上的 SQL Server 实例，与 Fabric 位于同一个Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1 包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体，这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 已使用 MAR1 一年。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3) 存储桶中的 Parquet 文件中。有12个文件，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据 -\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\nProducts -\nProductCategories -\nProductSubcategories -\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure -\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\nDataAnalysts：包含数据分析师\nDataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更 -\nContoso 计划创建以下两个 lakehouses：\nLakehouse1：将存储来自源的原始数据和清理后的数据\nLakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求 -\n新的 lakehouses 必须遵循使用以下三个层的 medallion 架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充 lakehouses 的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n最大限度地减少与跨云数据访问相关的出口成本。\n防止在 lakehouses 中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n这些项目必须与其他工作区项目一起进行源代码控制。\n摄取的数据必须以 Delta 格式落入 Lakehouse1 的 bronze 层。\n在数据落入 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n开发工作必须最小化，并且必须使用内置连接来导入源数据。\n在发生连接错误时，摄取过程必须尝试重新连接。\nLakehouses、数据管道和 notebooks 必须存储在 WorkspaceA 中。语义模型、报告和数据流必须存储在 WorkspaceB 中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换 -\n在POS1产品数据中，ProductID值是唯一的。gold 层中的产品维度必须仅包括产品列表中的活动产品。活动产品由IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\nFabric 中的安全性必须满足以下要求：\n数据工程师必须对所有 lakehouses 及其底层文件具有读写访问权限。\n数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n数据分析师不得访问 bronze 和 silver 层中的数据。\n数据工程师必须能够在WorkspaceA 中提交源代码控制的更改。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview -\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure -\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric -\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\nProducts -\nProductCategories -\nProductSubcategories -\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure -\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\nDataAnalysts: Contains the data analysts\nDataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes -\nContoso plans to create the following two lakehouses:\nLakehouse1: Will store both raw and cleansed data from the sources\nLakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\nMinimize egress costs associated with cross-cloud data access.\nPrevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\nThe items must be source controlled alongside other workspace items.\nIngested data must land in the bronze layer of Lakehouse1 in the Delta format.\nNo changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\nDevelopment effort must be minimized and a built-in connection must be used to import the source data.\nIn the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security -\nSecurity in Fabric must meet the following requirements:\nThe data engineers must have read and write access to all the lakehouses, including the underlying files.\nThe data analysts must only have read access to the Delta tables in the gold layer.\nThe data analysts must NOT have access to the data in the bronze and silver layers.\nThe data engineers must be able to commit changes to source control in WorkspaceA."
 },
 {
  "id": "dp700-q105",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "drag",
  "control": "select",
  "options": [],
  "answer": [
   "Row_cumsum",
   "Row_window_session"
  ],
  "pdfAnswer": [
   "Row_cumsum",
   "Row_window_session"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "Statement1",
    "labelEn": "Statement1",
    "labelZh": "Statement1",
    "choices": [
     {
      "key": "Row_cumsum",
      "en": "Row_cumsum",
      "zh": "Row_cumsum"
     },
     {
      "key": "Row_rank_dense",
      "en": "Row_rank_dense",
      "zh": "Row_rank_dense"
     },
     {
      "key": "Row_rank_min",
      "en": "Row_rank_min",
      "zh": "Row_rank_min"
     },
     {
      "key": "Row_window_session",
      "en": "Row_window_session",
      "zh": "Row_window_session"
     }
    ],
    "answer": "Row_cumsum"
   },
   {
    "id": "2",
    "label": "Statement2",
    "labelEn": "Statement2",
    "labelZh": "Statement2",
    "choices": [
     {
      "key": "Row_cumsum",
      "en": "Row_cumsum",
      "zh": "Row_cumsum"
     },
     {
      "key": "Row_rank_dense",
      "en": "Row_rank_dense",
      "zh": "Row_rank_dense"
     },
     {
      "key": "Row_rank_min",
      "en": "Row_rank_min",
      "zh": "Row_rank_min"
     },
     {
      "key": "Row_window_session",
      "en": "Row_window_session",
      "zh": "Row_window_session"
     }
    ],
    "answer": "Row_window_session"
   }
  ],
  "template": "Statement1:\nTaxiData\n| sort by VendorID asc\n| extend RunningTotalAmount = {{1}}(total_amount, VendorID != prev(VendorID))\n\nStatement2:\nTaxiData\n| sort by tpep_pickup_datetime asc, payment_type asc\n| extend FirstPickupDateTime = {{2}}(tpep_pickup_datetime, 1h, 0m, payment_type != prev(payment_type))",
  "templateEn": "Statement1:\nTaxiData\n| sort by VendorID asc\n| extend RunningTotalAmount = {{1}}(total_amount, VendorID != prev(VendorID))\n\nStatement2:\nTaxiData\n| sort by tpep_pickup_datetime asc, payment_type asc\n| extend FirstPickupDateTime = {{2}}(tpep_pickup_datetime, 1h, 0m, payment_type != prev(payment_type))",
  "templateZh": "Statement1:\nTaxiData\n| sort by VendorID asc\n| extend RunningTotalAmount = {{1}}(total_amount, VendorID != prev(VendorID))\n\nStatement2:\nTaxiData\n| sort by tpep_pickup_datetime asc, payment_type asc\n| extend FirstPickupDateTime = {{2}}(tpep_pickup_datetime, 1h, 0m, payment_type != prev(payment_type))",
  "templateKind": "code",
  "answerSource": "image",
  "stem": "您有一个 Fabric eventhouse，其中包含一个 KQL数据库。该数据库包含一个名为 TaxiData 的表。以下是 TaxiData 中数据的示例。\n```\nVendorID | tpep_pickup_datetime | tpep_dropoff_datetime | passenger_count | trip_distance | PULocationID | DOLocationID | payment_type | total_amount\n2 | 2022-06-06T11:08:32Z | 2022-06-06T11:22:17Z | 1 | 0.17 | 231 | 50 | 2 | 7.12\n2 | 2022-06-06T11:12:05Z | 2022-06-06T11:20:43Z | 1 | 1.02 | 161 | 163 | 1 | 10.56\n1 | 2022-06-06T11:15:00Z | 2022-06-06T11:25:32Z | 1 | 1.07 | 142 | 230 | 2 | 17.12\n2 | 2022-06-06T11:29:54Z | 2022-06-06T11:49:34Z | 2 | 2.07 | 162 | 236 | 2 | 12.01\n1 | 2022-06-06T11:50:50Z | 2022-06-06T12:07:24Z | 2 | 2.65 | 140 | 142 | 1 | 7.89\n```\n您需要构建两个 KQL 查询。解决方案必须满足以下要求：\n其中一个查询必须按 VendorID 对 RunningTotalAmount 进行分区。\n另一个查询必须创建一个名为 FirstPickupDateTime 的列，该列显示按 payment_type 分区的 tpep_pickup_datetime 每小时的第一个值。\n您应该如何完成每个查询？要回答，请将适当的值拖到正确的目标位置。每个值可以使用一次、多次或不使用。您可能需要拖动拆分栏可\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个 Fabric eventhouse，其中包含一个 KQL数据库。该数据库包含一个名为 TaxiData 的表。以下是 TaxiData 中数据的示例。\n```\nVendorID | tpep_pickup_datetime | tpep_dropoff_datetime | passenger_count | trip_distance | PULocationID | DOLocationID | payment_type | total_amount\n2 | 2022-06-06T11:08:32Z | 2022-06-06T11:22:17Z | 1 | 0.17 | 231 | 50 | 2 | 7.12\n2 | 2022-06-06T11:12:05Z | 2022-06-06T11:20:43Z | 1 | 1.02 | 161 | 163 | 1 | 10.56\n1 | 2022-06-06T11:15:00Z | 2022-06-06T11:25:32Z | 1 | 1.07 | 142 | 230 | 2 | 17.12\n2 | 2022-06-06T11:29:54Z | 2022-06-06T11:49:34Z | 2 | 2.07 | 162 | 236 | 2 | 12.01\n1 | 2022-06-06T11:50:50Z | 2022-06-06T12:07:24Z | 2 | 2.65 | 140 | 142 | 1 | 7.89\n```\n您需要构建两个 KQL 查询。解决方案必须满足以下要求：\n其中一个查询必须按 VendorID 对 RunningTotalAmount 进行分区。\n另一个查询必须创建一个名为 FirstPickupDateTime 的列，该列显示按 payment_type 分区的 tpep_pickup_datetime 每小时的第一个值。\n您应该如何完成每个查询？要回答，请将适当的值拖到正确的目标位置。每个值可以使用一次、多次或不使用。您可能需要拖动拆分栏可\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric eventhouse that contains a KQL database. The database contains a table named TaxiData. The following is a sample of the data in TaxiData.\n```\nVendorID | tpep_pickup_datetime | tpep_dropoff_datetime | passenger_count | trip_distance | PULocationID | DOLocationID | payment_type | total_amount\n2 | 2022-06-06T11:08:32Z | 2022-06-06T11:22:17Z | 1 | 0.17 | 231 | 50 | 2 | 7.12\n2 | 2022-06-06T11:12:05Z | 2022-06-06T11:20:43Z | 1 | 1.02 | 161 | 163 | 1 | 10.56\n1 | 2022-06-06T11:15:00Z | 2022-06-06T11:25:32Z | 1 | 1.07 | 142 | 230 | 2 | 17.12\n2 | 2022-06-06T11:29:54Z | 2022-06-06T11:49:34Z | 2 | 2.07 | 162 | 236 | 2 | 12.01\n1 | 2022-06-06T11:50:50Z | 2022-06-06T12:07:24Z | 2 | 2.65 | 140 | 142 | 1 | 7.89\n```\nYou need to build two KQL queries. The solution must meet the following requirements:\nOne of the queries must partition RunningTotalAmount by VendorID.\nThe other query must create a column named FirstPickupDateTime that shows the first value of each hour from tpep_pickup_datetime partitioned by payment_type.\nHow should you complete each query? To answer, drag the appropriate values the correct targets. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 321 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题主要考察KQL（Kusto Query Language）的数据处理能力，包括如何使用内置函数对数据进行分组、排序和计算。\n具体涉及的函数包括：Row_cumsum（用于累积计算）和Row_window_session（用于基于时间窗口的分组计算）。\n2. 选项分析\nStatement1\nRow_cumsum：正确。此函数用于计算累积总和，并且可以通过条件（如VendorID变化）来重置累积值。符合题目要求\"按VendorID分区计算RunningTotalAmount\"。\nRow_rank_dense：错误。此函数用于生成密集排名，不适用于累积总和的计算。\nRow_rank_min：错误。此函数用于生成最小排名，不适用于累积总和的计算。\nRow_window_session:错误。此函数用于基于时间窗口的分组计算，与累积总和无关。\nStatement2\nRow_window_session: 正确。此函数用于基于时间窗口（如1小时）进行分组计算，并且可以通过条件（如payment_type变化）来重置分组。符合题目要求\"按payment_type分区，创建FirstPickupDateTime列\"。\nRow_cumsum:：错误。此函数用于累积总和，不适用于基于时间窗口的分组计算。\nRow_rank_dense：错误。此函数用于生成密集排名，不适用于基于时间窗口的分组计算。\nRow_rank_min：错误。此函数用于生成最小排名，不适用于基于时间窗口的分组计算。\n3. 我的答案\nStatement1: Row_cumsum\nStatement2: Row_window_session\n4. 官方答案\nStatement1: Row_cumsum\nStatement2: Row_window_session\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。\nExamTopics Logo",
  "explanationZh": "【答案来源】PDF 第 321 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题主要考察KQL（Kusto Query Language）的数据处理能力，包括如何使用内置函数对数据进行分组、排序和计算。\n具体涉及的函数包括：Row_cumsum（用于累积计算）和Row_window_session（用于基于时间窗口的分组计算）。\n2. 选项分析\nStatement1\nRow_cumsum：正确。此函数用于计算累积总和，并且可以通过条件（如VendorID变化）来重置累积值。符合题目要求\"按VendorID分区计算RunningTotalAmount\"。\nRow_rank_dense：错误。此函数用于生成密集排名，不适用于累积总和的计算。\nRow_rank_min：错误。此函数用于生成最小排名，不适用于累积总和的计算。\nRow_window_session:错误。此函数用于基于时间窗口的分组计算，与累积总和无关。\nStatement2\nRow_window_session: 正确。此函数用于基于时间窗口（如1小时）进行分组计算，并且可以通过条件（如payment_type变化）来重置分组。符合题目要求\"按payment_type分区，创建FirstPickupDateTime列\"。\nRow_cumsum:：错误。此函数用于累积总和，不适用于基于时间窗口的分组计算。\nRow_rank_dense：错误。此函数用于生成密集排名，不适用于基于时间窗口的分组计算。\nRow_rank_min：错误。此函数用于生成最小排名，不适用于基于时间窗口的分组计算。\n3. 我的答案\nStatement1: Row_cumsum\nStatement2: Row_window_session\n4. 官方答案\nStatement1: Row_cumsum\nStatement2: Row_window_session\n5. 与官方答案比较\n我的答案与官方答案完全一致。\n无需重新思考，答案正确。\nExamTopics Logo",
  "explanationEn": "[Answer source] PDF p.321 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "drag",
  "pdfQNum": 3,
  "pdfPage": 320,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "引入和转换数据 · 主题 3 · 问题 3",
  "pdfRefEn": "Ingest and transform data · Topic 3 · Question 3",
  "pdfQuestionNum": 3,
  "topic": 3
 },
 {
  "id": "dp700-q106",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "yn",
  "options": [],
  "answer": [
   "Yes",
   "No",
   "No"
  ],
  "pdfAnswer": [
   "Yes",
   "No",
   "No"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "New York 的 Litware 将显示在结果集的顶部。",
    "labelEn": "Litware from New York will be displayed at the top of the result set.",
    "labelZh": "New York 的 Litware 将显示在结果集的顶部。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "Yes"
   },
   {
    "id": "2",
    "label": "Seattle 的 Fabrikam 在 Rank 列中的值将为 2。",
    "labelEn": "Fabrikam in Seattle will have value = 2 in the Rank column.",
    "labelZh": "Seattle 的 Fabrikam 在 Rank 列中的值将为 2。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   },
   {
    "id": "3",
    "label": "San Francisco 的 Litware 在 Rank 列中的值将与 New York 的 Litware 相同。",
    "labelEn": "Litware in San Francisco will have the same value in the Rank column as Litware in New York.",
    "labelZh": "San Francisco 的 Litware 在 Rank 列中的值将与 New York 的 Litware 相同。",
    "choices": [
     {
      "key": "Yes",
      "en": "Yes",
      "zh": "是"
     },
     {
      "key": "No",
      "en": "No",
      "zh": "否"
     }
    ],
    "answer": "No"
   }
  ],
  "answerSource": "image",
  "stem": "热点 -\n您正在处理来自外部数据提供商的流数据。\n您有以下代码桶。\n```\ndatatable (Location:string, Company:string, UnitsSold:long)\n[\n  \"New York\", \"Contoso\", 300,\n  \"New York\", \"Litware\", 1000,\n  \"New York\", \"Relecloud\", 300,\n  \"New York\", \"Fabrikam\", 200,\n  \"Seattle\", \"Contoso\", 300,\n  \"Seattle\", \"Litware\", 100,\n  \"Seattle\", \"Fabrikam\", 100,\n  \"San Francisco\", \"Relecloud\", 500,\n  \"San Francisco\", \"Litware\", 500,\n  \"Washington DC\", \"Litware\", 300,\n  \"Washington DC\", \"Contoso\", 400\n]\n| sort by Location desc, UnitsSold desc\n| extend Rank=row_rank_dense(UnitsSold, prev(Location) != Location)\n```\n对于以下每个陈述，如果该陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemZh": "热点 -\n您正在处理来自外部数据提供商的流数据。\n您有以下代码桶。\n```\ndatatable (Location:string, Company:string, UnitsSold:long)\n[\n  \"New York\", \"Contoso\", 300,\n  \"New York\", \"Litware\", 1000,\n  \"New York\", \"Relecloud\", 300,\n  \"New York\", \"Fabrikam\", 200,\n  \"Seattle\", \"Contoso\", 300,\n  \"Seattle\", \"Litware\", 100,\n  \"Seattle\", \"Fabrikam\", 100,\n  \"San Francisco\", \"Relecloud\", 500,\n  \"San Francisco\", \"Litware\", 500,\n  \"Washington DC\", \"Litware\", 300,\n  \"Washington DC\", \"Contoso\", 400\n]\n| sort by Location desc, UnitsSold desc\n| extend Rank=row_rank_dense(UnitsSold, prev(Location) != Location)\n```\n对于以下每个陈述，如果该陈述为真，请选择是。否则，请选择否。\n注意：每个正确选择都值一分。",
  "stemEn": "You are processing streaming data from an external data provider.\nYou have the following code segment.\n```\ndatatable (Location:string, Company:string, UnitsSold:long)\n[\n  \"New York\", \"Contoso\", 300,\n  \"New York\", \"Litware\", 1000,\n  \"New York\", \"Relecloud\", 300,\n  \"New York\", \"Fabrikam\", 200,\n  \"Seattle\", \"Contoso\", 300,\n  \"Seattle\", \"Litware\", 100,\n  \"Seattle\", \"Fabrikam\", 100,\n  \"San Francisco\", \"Relecloud\", 500,\n  \"San Francisco\", \"Litware\", 500,\n  \"Washington DC\", \"Litware\", 300,\n  \"Washington DC\", \"Contoso\", 400\n]\n| sort by Location desc, UnitsSold desc\n| extend Rank=row_rank_dense(UnitsSold, prev(Location) != Location)\n```\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 324 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是Azure Data Explorer中的KQL（Kusto Query Language）查询语法，特别是排序（sort by）和密集排名（row_rank_dense）的使用。\n需要理解如何根据多个字段排序以及如何计算密集排名。\n2. 选项分析\nLitware from New York will be displayed at the top of the result set:\n代码中使用了 sort by Location desc，UnitsSold desc，首先按 Location 降序排列，然后按 UnitsSold 降序排列。\n根据数据，Location 的降序排列顺序是：Washington DC、Seattle、San Francisco、New York。\n在 New York 中，Litware 的 UnitsSold 是 1000，最大值，因此它会排在 New York 的顶部。\n此选项正确。\nFabrikam in Seattle will have value = 2 in the Rank column:\n代码中使用了row_rank_dense(UnitsSold，prev(Location）！= Location)，这表示在每个 Location 内根据 UnitsSold 计算密集排名。\n在 Seattle 中，UnitsSold 的降序排列是：300（Contoso）、100（Litware）、100（Fabrikam）。\n由于 Litware 和 Fabrikam 的 UnitsSold 相同，它们会共享同一个排名值，即排名为 2。\n此选项正确。\nLitware in San Francisco will have the same value in the Rank column as Litware in New York:\n在 San Francisco 中，Litware 的 UnitsSold 是 500，排名为 1。\n在 New York 中，Litware 的 UnitsSold 是 1000，排名为 1。\n虽然它们的排名值相同，但这是因为它们分别属于不同的 Location，排名是独立计算的。\n此选项正确。\n3. 我选的答案\nLitware from New York will be displayed at the top of the result set: Yes Fabrikam in Seattle will have value = 2 in the Rank column: Yes Litware in San Francisco will have the same value in the Rank column as Litware in New York: Yes 4. 官方答案Litware from New York will be displayed at the top of the result set: Yes Fabrikam in Seattle will have value = 2 in the Rank column: No Litware in San Francisco will have the same value in the Rank column as Litware in New York: No 5. 与官方答案比较我的答案与官方答案不同。\n重新思考后发现：\n对于 Fabrikam in Seattle will have value = 2 in the Rank column，虽然 UnitsSold 相同，但排名是基于密集排名规则， row_rank_dense 不会给相同值分配相同排名，因此 Fabrikam 的排名应该是 3。\n对于 Litware in San Francisco will have the same value in the Rank column as Litware in New York, 排名是独立计算的， 虽然值相同，但它们属于不同的 Location，因此排名值不同。\n最终答案与官方答案一致。",
  "explanationZh": "【答案来源】PDF 第 324 页答案图\n\nDP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是Azure Data Explorer中的KQL（Kusto Query Language）查询语法，特别是排序（sort by）和密集排名（row_rank_dense）的使用。\n需要理解如何根据多个字段排序以及如何计算密集排名。\n2. 选项分析\nLitware from New York will be displayed at the top of the result set:\n代码中使用了 sort by Location desc，UnitsSold desc，首先按 Location 降序排列，然后按 UnitsSold 降序排列。\n根据数据，Location 的降序排列顺序是：Washington DC、Seattle、San Francisco、New York。\n在 New York 中，Litware 的 UnitsSold 是 1000，最大值，因此它会排在 New York 的顶部。\n此选项正确。\nFabrikam in Seattle will have value = 2 in the Rank column:\n代码中使用了row_rank_dense(UnitsSold，prev(Location）！= Location)，这表示在每个 Location 内根据 UnitsSold 计算密集排名。\n在 Seattle 中，UnitsSold 的降序排列是：300（Contoso）、100（Litware）、100（Fabrikam）。\n由于 Litware 和 Fabrikam 的 UnitsSold 相同，它们会共享同一个排名值，即排名为 2。\n此选项正确。\nLitware in San Francisco will have the same value in the Rank column as Litware in New York:\n在 San Francisco 中，Litware 的 UnitsSold 是 500，排名为 1。\n在 New York 中，Litware 的 UnitsSold 是 1000，排名为 1。\n虽然它们的排名值相同，但这是因为它们分别属于不同的 Location，排名是独立计算的。\n此选项正确。\n3. 我选的答案\nLitware from New York will be displayed at the top of the result set: Yes Fabrikam in Seattle will have value = 2 in the Rank column: Yes Litware in San Francisco will have the same value in the Rank column as Litware in New York: Yes 4. 官方答案Litware from New York will be displayed at the top of the result set: Yes Fabrikam in Seattle will have value = 2 in the Rank column: No Litware in San Francisco will have the same value in the Rank column as Litware in New York: No 5. 与官方答案比较我的答案与官方答案不同。\n重新思考后发现：\n对于 Fabrikam in Seattle will have value = 2 in the Rank column，虽然 UnitsSold 相同，但排名是基于密集排名规则， row_rank_dense 不会给相同值分配相同排名，因此 Fabrikam 的排名应该是 3。\n对于 Litware in San Francisco will have the same value in the Rank column as Litware in New York, 排名是独立计算的， 虽然值相同，但它们属于不同的 Location，因此排名值不同。\n最终答案与官方答案一致。",
  "explanationEn": "[Answer source] PDF p.324 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 4,
  "pdfPage": 323,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "引入和转换数据 · 主题 3 · 问题 4",
  "pdfRefEn": "Ingest and transform data · Topic 3 · Question 4",
  "pdfQuestionNum": 4,
  "topic": 3
 },
 {
  "id": "dp700-q107",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "禁用 V-Order 并运行 OPTIMIZE 命令。",
    "textEn": "Disable V-Order and run the OPTIMIZE command.",
    "textZh": "禁用 V-Order 并运行 OPTIMIZE 命令。"
   },
   {
    "id": "B",
    "text": "禁用 V-Order 并运行 VACUUM 命令。",
    "textEn": "Disable V-Order and run the VACUUM command.",
    "textZh": "禁用 V-Order 并运行 VACUUM 命令。"
   },
   {
    "id": "C",
    "text": "运行 OPTIMIZE 和 VACUUM 命令。",
    "textEn": "Run the OPTIMIZE and VACUUM commands.",
    "textZh": "运行 OPTIMIZE 和 VACUUM 命令。"
   }
  ],
  "answer": [
   "C"
  ],
  "pdfAnswer": [
   "C"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric workspace，其中包含一个名为 Lakehouse1 的 lakehouse。Lakehouse1 包含一个 Delta table，名为 Table1。\n你分析了 Table1，发现 Table1 包含 2,000 个大小为 1 MB 的 Parquet 文件。\n你需要尽量减少查询 Table1 所需的时间。\n你应该怎么做？",
  "stemZh": "你有一个 Fabric workspace，其中包含一个名为 Lakehouse1 的 lakehouse。Lakehouse1 包含一个 Delta table，名为 Table1。\n你分析了 Table1，发现 Table1 包含 2,000 个大小为 1 MB 的 Parquet 文件。\n你需要尽量减少查询 Table1 所需的时间。\n你应该怎么做？",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1. Lakehouse1 contains a Delta table named Table1.\nYou analyze Table1 and discover that Table1 contains 2,000 Parquet files of 1 MB each.\nYou need to minimize how long it takes to query Table1.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\nDelta Lake的性能优化，包括OPTIMIZE和VACUUM命令的使用。\n如何处理大量小文件以提高查询性能。\n2. 选项分析\nA. Disable V-Order and run the OPTIMIZE command.\nOPTIMIZE命令用于合并小文件以提高查询性能，这是正确的操作。\n禁用V-Order并不相关，因为V-Order是一种数据排序优化方式，禁用它不会帮助解决小文件问题。\n因此此选项部分正确，但禁用V-Order是错误的操作。\nB. Disable V-Order and run the VACUUM command.\nVACUUM命令用于清理旧版本数据以释放存储空间，但它不会直接提高查询性能。\n禁用V-Order同样不相关，错误的操作。\n因此此选项错误。\nC. Run the OPTIMIZE and VACUUM commands.\nOPTIMIZE命令合并小文件，提高查询性能，这是正确的操作。\nVACUUM命令清理旧版本数据，虽然主要目的是释放存储空间，但在某些情况下也可以间接提高性能。\n此选项包含两个正确的操作，因此是正确答案。\n3. 我的选择\n我选择的答案是：C\n4. 官方答案\n官方正确答案是：C\n5. 比较与思考\n我的答案与官方答案一致。\n原因分析：OPTIMIZE命令解决了小文件问题，VACUUM命令清理了旧版本数据，两者结合可以有效提高查询性能。\nExamTopics Logo",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\nDelta Lake的性能优化，包括OPTIMIZE和VACUUM命令的使用。\n如何处理大量小文件以提高查询性能。\n2. 选项分析\nA. Disable V-Order and run the OPTIMIZE command.\nOPTIMIZE命令用于合并小文件以提高查询性能，这是正确的操作。\n禁用V-Order并不相关，因为V-Order是一种数据排序优化方式，禁用它不会帮助解决小文件问题。\n因此此选项部分正确，但禁用V-Order是错误的操作。\nB. Disable V-Order and run the VACUUM command.\nVACUUM命令用于清理旧版本数据以释放存储空间，但它不会直接提高查询性能。\n禁用V-Order同样不相关，错误的操作。\n因此此选项错误。\nC. Run the OPTIMIZE and VACUUM commands.\nOPTIMIZE命令合并小文件，提高查询性能，这是正确的操作。\nVACUUM命令清理旧版本数据，虽然主要目的是释放存储空间，但在某些情况下也可以间接提高性能。\n此选项包含两个正确的操作，因此是正确答案。\n3. 我的选择\n我选择的答案是：C\n4. 官方答案\n官方正确答案是：C\n5. 比较与思考\n我的答案与官方答案一致。\n原因分析：OPTIMIZE命令解决了小文件问题，VACUUM命令清理了旧版本数据，两者结合可以有效提高查询性能。\nExamTopics Logo",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\nDelta Lake的性能优化，包括OPTIMIZE和VACUUM命令的使用。\n如何处理大量小文件以提高查询性能。\n2. 选项分析\nA. Disable V-Order and run the OPTIMIZE command.\nOPTIMIZE命令用于合并小文件以提高查询性能，这是正确的操作。\n禁用V-Order并不相关，因为V-Order是一种数据排序优化方式，禁用它不会帮助解决小文件问题。\n因此此选项部分正确，但禁用V-Order是错误的操作。\nB. Disable V-Order and run the VACUUM command.\nVACUUM命令用于清理旧版本数据以释放存储空间，但它不会直接提高查询性能。\n禁用V-Order同样不相关，错误的操作。\n因此此选项错误。\nC. Run the OPTIMIZE and VACUUM commands.\nOPTIMIZE命令合并小文件，提高查询性能，这是正确的操作。\nVACUUM命令清理旧版本数据，虽然主要目的是释放存储空间，但在某些情况下也可以间接提高性能。\n此选项包含两个正确的操作，因此是正确答案。\n3. 我的选择\n我选择的答案是：C\n4. 官方答案\n官方正确答案是：C\n5. 比较与思考\n我的答案与官方答案一致。\n原因分析：OPTIMIZE命令解决了小文件问题，VACUUM命令清理了旧版本数据，两者结合可以有效提高查询性能。\nExamTopics Logo",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 5,
  "pdfPage": 326,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 5",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 5",
  "pdfQuestionNum": 5,
  "topic": 3
 },
 {
  "id": "dp700-q108",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "sys.dm_exec_connections",
    "textEn": "sys.dm_exec_connections",
    "textZh": "sys.dm_exec_connections"
   },
   {
    "id": "B",
    "text": "sys.dm_exec_requests",
    "textEn": "sys.dm_exec_requests",
    "textZh": "sys.dm_exec_requests"
   },
   {
    "id": "C",
    "text": "queryinsights.long_running_queries",
    "textEn": "queryinsights.long_running_queries",
    "textZh": "queryinsights.long_running_queries"
   },
   {
    "id": "D",
    "text": "queryinsights.frequently_run_queries",
    "textEn": "queryinsights.frequently_run_queries",
    "textZh": "queryinsights.frequently_run_queries"
   },
   {
    "id": "E",
    "text": "sys.dm_exec_sessions",
    "textEn": "sys.dm_exec_sessions",
    "textZh": "sys.dm_exec_sessions"
   }
  ],
  "answer": [
   "E"
  ],
  "pdfAnswer": [
   "E"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。每天通过数据管道和存储过程将数据加载到 Warehouse1 中。\n你发现每天的数据加载时间比预期的要长。\n你需要监控 Warehouse1，以识别正在主动运行查询的用户名称。\n你应该使用哪个视图？",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。每天通过数据管道和存储过程将数据加载到 Warehouse1 中。\n你发现每天的数据加载时间比预期的要长。\n你需要监控 Warehouse1，以识别正在主动运行查询的用户名称。\n你应该使用哪个视图？",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1. Data is loaded daily into Warehouse1 by using data pipelines and stored procedures.\nYou discover that the daily data load takes longer than expected.\nYou need to monitor Warehouse1 to identify the names of users that are actively running queries.\nWhich view should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用系统视图监控数据仓库中的活动查询和用户会话。\n重点在于理解不同系统视图的功能，例如 sys.dm_exec_sessions 和 sys.dm_exec_requests。\n2. 选项分析\nA. sys.dm_exec_connections\n此视图用于查看当前的数据库连接信息，例如连接的网络协议、加密状态等。\n它不能直接提供正在运行查询的用户信息，因此此选项错误。\nB. sys.dm_exec_requests\n此视图用于查看当前正在执行的请求，包括查询文本和状态。\n虽然它可以显示正在运行的查询，但它无法直接显示用户会话信息，因此此选项不完全符合要求。\nC. queryinsights.long_running_queries\n此视图用于分析运行时间较长的查询，帮助优化性能。\n它不能显示用户会话信息，因此此选项错误。\nD. queryinsights.frequently_run_queries\n此视图用于分析频繁运行的查询，帮助识别热点查询。\n它不能显示用户会话信息，因此此选项错误。\nE. sys.dm_exec_sessions\n此视图用于查看当前的用户会话信息，包括会话状态、登录名等。\n它可以直接显示正在运行查询的用户信息，因此此选项正确。\n3. 我的答案\n我的答案是：E. sys.dm_exec_sessions\n4. 官方答案\n官方答案是：E. sys.dm_exec_sessions\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：sys.dm_exec_sessions 是唯一一个可以直接显示用户会话信息的视图，符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用系统视图监控数据仓库中的活动查询和用户会话。\n重点在于理解不同系统视图的功能，例如 sys.dm_exec_sessions 和 sys.dm_exec_requests。\n2. 选项分析\nA. sys.dm_exec_connections\n此视图用于查看当前的数据库连接信息，例如连接的网络协议、加密状态等。\n它不能直接提供正在运行查询的用户信息，因此此选项错误。\nB. sys.dm_exec_requests\n此视图用于查看当前正在执行的请求，包括查询文本和状态。\n虽然它可以显示正在运行的查询，但它无法直接显示用户会话信息，因此此选项不完全符合要求。\nC. queryinsights.long_running_queries\n此视图用于分析运行时间较长的查询，帮助优化性能。\n它不能显示用户会话信息，因此此选项错误。\nD. queryinsights.frequently_run_queries\n此视图用于分析频繁运行的查询，帮助识别热点查询。\n它不能显示用户会话信息，因此此选项错误。\nE. sys.dm_exec_sessions\n此视图用于查看当前的用户会话信息，包括会话状态、登录名等。\n它可以直接显示正在运行查询的用户信息，因此此选项正确。\n3. 我的答案\n我的答案是：E. sys.dm_exec_sessions\n4. 官方答案\n官方答案是：E. sys.dm_exec_sessions\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：sys.dm_exec_sessions 是唯一一个可以直接显示用户会话信息的视图，符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何使用系统视图监控数据仓库中的活动查询和用户会话。\n重点在于理解不同系统视图的功能，例如 sys.dm_exec_sessions 和 sys.dm_exec_requests。\n2. 选项分析\nA. sys.dm_exec_connections\n此视图用于查看当前的数据库连接信息，例如连接的网络协议、加密状态等。\n它不能直接提供正在运行查询的用户信息，因此此选项错误。\nB. sys.dm_exec_requests\n此视图用于查看当前正在执行的请求，包括查询文本和状态。\n虽然它可以显示正在运行的查询，但它无法直接显示用户会话信息，因此此选项不完全符合要求。\nC. queryinsights.long_running_queries\n此视图用于分析运行时间较长的查询，帮助优化性能。\n它不能显示用户会话信息，因此此选项错误。\nD. queryinsights.frequently_run_queries\n此视图用于分析频繁运行的查询，帮助识别热点查询。\n它不能显示用户会话信息，因此此选项错误。\nE. sys.dm_exec_sessions\n此视图用于查看当前的用户会话信息，包括会话状态、登录名等。\n它可以直接显示正在运行查询的用户信息，因此此选项正确。\n3. 我的答案\n我的答案是：E. sys.dm_exec_sessions\n4. 官方答案\n官方答案是：E. sys.dm_exec_sessions\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：sys.dm_exec_sessions 是唯一一个可以直接显示用户会话信息的视图，符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 6,
  "pdfPage": 328,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 6",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 6",
  "pdfQuestionNum": 6,
  "topic": 3
 },
 {
  "id": "dp700-q109",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "VACUUM",
    "textEn": "VACUUM",
    "textZh": "VACUUM"
   },
   {
    "id": "B",
    "text": "COMPUTE",
    "textEn": "COMPUTE",
    "textZh": "COMPUTE"
   },
   {
    "id": "C",
    "text": "OPTIMIZE",
    "textEn": "OPTIMIZE",
    "textZh": "OPTIMIZE"
   },
   {
    "id": "D",
    "text": "CLONE",
    "textEn": "CLONE",
    "textZh": "CLONE"
   }
  ],
  "answer": [
   "A"
  ],
  "pdfAnswer": [
   "A"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 EventStream1 的事件流。EventStream1 将事件输出到湖仓中的一个表。\n你需要删除超过七天且不再使用的文件。\n你应该运行哪个",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 EventStream1 的事件流。EventStream1 将事件输出到湖仓中的一个表。\n你需要删除超过七天且不再使用的文件。\n你应该运行哪个",
  "stemEn": "You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table in a lakehouse.\nYou need to remove files that are older than seven days and are no longer in use.\nWhich command should you run?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何管理和清理数据湖中的文件，特别是使用VACUUM命令清理不再使用的I旧文件。\n2. 选项分析\nA. VACUUM: 正确。VACUUM命令用于清理数据湖中的旧文件，删除不再使用的文件以释放存储空间。此命令适用于清理超过指定(如7天)\nB.COMPUTE：错误。COMPUTE命令通常用于计算或执行某些操作，与清理文件无关。\nC.OPTIMIZE:错误。OPTIMIZE命令用于优化数据存储布局以提高查询性能，但不会删除旧文件。\nD.CLONE:错误。CLONE命令用于创建数据的副本，与清理文件无关。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 答案比较与分析\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何管理和清理数据湖中的文件，特别是使用VACUUM命令清理不再使用的I旧文件。\n2. 选项分析\nA. VACUUM: 正确。VACUUM命令用于清理数据湖中的旧文件，删除不再使用的文件以释放存储空间。此命令适用于清理超过指定(如7天)\nB.COMPUTE：错误。COMPUTE命令通常用于计算或执行某些操作，与清理文件无关。\nC.OPTIMIZE:错误。OPTIMIZE命令用于优化数据存储布局以提高查询性能，但不会删除旧文件。\nD.CLONE:错误。CLONE命令用于创建数据的副本，与清理文件无关。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 答案比较与分析\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何管理和清理数据湖中的文件，特别是使用VACUUM命令清理不再使用的I旧文件。\n2. 选项分析\nA. VACUUM: 正确。VACUUM命令用于清理数据湖中的旧文件，删輨不再使用的文件以迟放存储空輓。此命令辴用于清理超辟指定(如7天)\nB.COMPUTE：错误。COMPUTE命令通常用于计算或执行某些操作，与清理文件无关。\nC.OPTIMIZE:错误。OPTIMIZE命令用于优化数据存储布局以提高查询性能，但不会删除旧文件。\nD.CLONE:错误。CLONE命令用于创建数据的副本，与清理文件无关。\n3. 我的答案\n我的答案是：A\n4. 官方答案\n官方答案是：A\n5. 答案比较与分析\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 7,
  "pdfPage": 330,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 7",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 7",
  "pdfQuestionNum": 7,
  "topic": 3
 },
 {
  "id": "dp700-q110",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "在 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输出 JSON。",
    "textEn": "From Monitoring hub, select the latest failed run of Pipeline1, and then view the output JSON.",
    "textZh": "在 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输出 JSON。"
   },
   {
    "id": "B",
    "text": "在 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。",
    "textEn": "From Monitoring hub, select the latest failed run of Pipeline1, and then view the input JSON.",
    "textZh": "在 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。"
   },
   {
    "id": "C",
    "text": "在 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ltemReadFailed 的详细信息。",
    "textEn": "From Real-time hub, select Fabric events, and then review the details of Microsoft.Fabric.ItemReadFailed.",
    "textZh": "在 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ltemReadFailed 的详细信息。"
   },
   {
    "id": "D",
    "text": "在 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ltemUpdateFailed 的详细信息。",
    "textEn": "From Real-time hub, select Fabric events, and then review the details of Microsoft. Fabric.ItemUpdateFailed.",
    "textZh": "在 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ltemUpdateFailed 的详细信息。"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 DW1 的 Fabric 数据仓库，它通过名为 Pipeline1的数据管道加载数据。Pipeline1使用具有动态 SQL 源的 Copy data活动。 Pipeline1 被安排每 15 分钟运行一次。\n你发现 Pipeline1 一直失败。\n你需要确定管道失败时执行了哪个 SQL查询。\n你应该怎么做？",
  "stemZh": "你有一个名为 DW1 的 Fabric 数据仓库，它通过名为 Pipeline1的数据管道加载数据。Pipeline1使用具有动态 SQL 源的 Copy data活动。 Pipeline1 被安排每 15 分钟运行一次。\n你发现 Pipeline1 一直失败。\n你需要确定管道失败时执行了哪个 SQL查询。\n你应该怎么做？",
  "stemEn": "You have a Fabric warehouse named DW1 that loads data by using a data pipeline named Pipeline1. Pipeline1 uses a Copy data activity with a dynamic SQL source. Pipeline1 is scheduled to run every 15 minutes.\nYou discover that Pipeline1 keeps failing.\nYou need to identify which SQL query was executed when the pipeline failed.\nWhat should you do?",
  "explanation": "DP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是如何通过监控工具（Monitoring hub）和日志信息（JSON）来诊断数据管道（Pipeline）运行失败的原因。\n重点在于理解如何定位失败的SQL查询以及如何使用输入和输出JSON来分析问题。\n2. 选项分析\nA. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输出 JSON。\n输出 JSON通常包含活动的结果信息，例如成功或失败的状态，以及可能的错误消息。\n虽然输出JSON可以提供一些错误信息，但它无法直接显示执行的SQL查询。\n因此，此选项不符合题目要求。\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n输入JSON包含活动的输入参数，例如动态SQL查询和其他配置数据。\n通过查看输入JSON，可以直接定位到执行的SQL查询，这是题目要求的关键。\n此选项正确。\nC. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemReadFailed 的详细信息。\nReal-time hub 和 Fabric events 主要用于实时监控事件，例如数据读取失败（ItemReadFailed）。\n虽然可以查看失败的事件，但无法直接定位到执行的 SQL 查询。\n此选项不符合题目要求。\nD. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemUpdateFailed 的详细信息。\n此选项与选项C 类似，关注的是数据更新失败（ItemUpdateFailed）。\n同样无法直接定位到执行的 SQL 查询。\n此选项不符合题目要求。\n3. 我选的答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n4. 官方答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：输入JSON包含动态SQL查询，是定位问题的关键信息，而其他选项无法满足题目要求。",
  "explanationZh": "DP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是如何通过监控工具（Monitoring hub）和日志信息（JSON）来诊断数据管道（Pipeline）运行失败的原因。\n重点在于理解如何定位失败的SQL查询以及如何使用输入和输出JSON来分析问题。\n2. 选项分析\nA. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输出 JSON。\n输出 JSON通常包含活动的结果信息，例如成功或失败的状态，以及可能的错误消息。\n虽然输出JSON可以提供一些错误信息，但它无法直接显示执行的SQL查询。\n因此，此选项不符合题目要求。\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n输入JSON包含活动的输入参数，例如动态SQL查询和其他配置数据。\n通过查看输入JSON，可以直接定位到执行的SQL查询，这是题目要求的关键。\n此选项正确。\nC. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemReadFailed 的详细信息。\nReal-time hub 和 Fabric events 主要用于实时监控事件，例如数据读取失败（ItemReadFailed）。\n虽然可以查看失败的事件，但无法直接定位到执行的 SQL 查询。\n此选项不符合题目要求。\nD. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemUpdateFailed 的详细信息。\n此选项与选项C 类似，关注的是数据更新失败（ItemUpdateFailed）。\n同样无法直接定位到执行的 SQL 查询。\n此选项不符合题目要求。\n3. 我选的答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n4. 官方答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：输入JSON包含动态SQL查询，是定位问题的关键信息，而其他选项无法满足题目要求。",
  "explanationEn": "DP-700考试辅导：题目解析\n1. 考察的知识点\n本题考察的是如何通过监控工具（Monitoring hub）和日志信息（JSON）来诊断数据管道（Pipeline）运行失败的原因。\n重点在于理解如何定位失败的SQL查询以及如何使用输入和输出JSON来分析问题。\n2. 选项分析\nA. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输出 JSON。\n输出 JSON通常包含活动的结果信息，例如成功或失败的状态，以及可能的错误消息。\n虽然输出JSON可以提供一些错误信息，但它无法直接显示执行的SQL查询。\n因此，此选项不符合题目要求。\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n输入JSON包含活动的输入参数，例如动态SQL查询和其他配置数据。\n通过查看输入JSON，可以直接定位到执行的SQL查询，这是题目要求的关键。\n此选项正确。\nC. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemReadFailed 的详细信息。\nReal-time hub 和 Fabric events 主要用于实时监控事件，例如数据读取失败（ItemReadFailed）。\n虽然可以查看失败的事件，但无法直接定位到执行的 SQL 查询。\n此辷轒不符合轞目要求。\nD. 从 Real-time hub 中，选择 Fabric events，然后查看 Microsoft.Fabric.ItemUpdateFailed 的详细信息。\n此选项与选项C 类似，关注的是数据更新失败（ItemUpdateFailed）。\n同样无法直接定位到执行的 SQL 查询。\n此辷轒不符合轞目要求。\n3. 我选的答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n4. 官方答案\nB. 从 Monitoring hub 中，选择 Pipeline1 最近失败的运行，然后查看输入 JSON。\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：输入JSON包含动态SQL查询，是定位问题的关键信息，而其他选项无法满足题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 8,
  "pdfPage": 332,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 8",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 8",
  "pdfQuestionNum": 8,
  "topic": 3
 },
 {
  "id": "dp700-q111",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "Real-Time hub",
    "textEn": "Real-Time hub",
    "textZh": "Real-Time hub"
   },
   {
    "id": "B",
    "text": "Monitoring hub",
    "textEn": "Monitoring hub",
    "textZh": "Monitoring hub"
   },
   {
    "id": "C",
    "text": "the job history from the application run",
    "textEn": "the job history from the application run",
    "textZh": "the job history from the application run"
   },
   {
    "id": "D",
    "text": "Spark History Server",
    "textEn": "Spark History Server",
    "textZh": "Spark History Server"
   },
   {
    "id": "E",
    "text": "the run series from the details of the application run",
    "textEn": "the run series from the details of the application run",
    "textZh": "the run series from the details of the application run"
   }
  ],
  "answer": [
   "E"
  ],
  "pdfAnswer": [
   "E"
  ],
  "answerSource": "text",
  "stem": "你有一个名为 Notebook1 的 Fabric notebook，它在过去一周内一直成功执行。\n在上一次运行中，Notebook1执行了九个作业。\n你需要在时间轴图表中查看这些作业。\n你应该使用什么？",
  "stemZh": "你有一个名为 Notebook1 的 Fabric notebook，它在过去一周内一直成功执行。\n在上一次运行中，Notebook1执行了九个作业。\n你需要在时间轴图表中查看这些作业。\n你应该使用什么？",
  "stemEn": "You have a Fabric notebook named Notebook1 that has been executing successfully for the last week.\nDuring the last run, Notebook1executed nine jobs.\nYou need to view the jobs in a timeline chart.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric环境中查看Notebook执行的作业历史和时间线图。\n重点是理解Azure Fabric中不同工具和功能的用途，例如Monitoring hub、Spark History Server等。\n2. 选项分析\nA. Real-Time hub: 错误。Real-Time hub主要用于实时数据流处理和监控，与查看Notebook作业的时间线图无关。\nB. Monitoring hub: 错误。Monitoring hub用于监控系统的整体运行状况和性能指标，但不提供具体的Notebook作业时间线图。\nC. the job history from the application run: 错误。虽然可以查看作业历史，但无法以时间线图的形式呈现作业运行情况。\nD. Spark History Server: 错误。Spark History Server用于查看Spark作业的详细运行信息，但不适用于Fabric Notebook的时间线图需求。\nE. the run series from the details of the application run: 正确。此选项提供了查看Notebook作业运行时间线图的功能，符合题目要求。\n3. 我的答案\n我的答案是：E\n4. 官方答案\n官方答案是：E\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：选项E明确提到“the run series from the details of the application run”，这是查看Notebook作业时间线图的正确方法。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric环境中查看Notebook执行的作业历史和时间线图。\n重点是理解Azure Fabric中不同工具和功能的用途，例如Monitoring hub、Spark History Server等。\n2. 选项分析\nA. Real-Time hub: 错误。Real-Time hub主要用于实时数据流处理和监控，与查看Notebook作业的时间线图无关。\nB. Monitoring hub: 错误。Monitoring hub用于监控系统的整体运行状况和性能指标，但不提供具体的Notebook作业时间线图。\nC. the job history from the application run: 错误。虽然可以查看作业历史，但无法以时间线图的形式呈现作业运行情况。\nD. Spark History Server: 错误。Spark History Server用于查看Spark作业的详细运行信息，但不适用于Fabric Notebook的时间线图需求。\nE. the run series from the details of the application run: 正确。此选项提供了查看Notebook作业运行时间线图的功能，符合题目要求。\n3. 我的答案\n我的答案是：E\n4. 官方答案\n官方答案是：E\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：选项E明确提到“the run series from the details of the application run”，这是查看Notebook作业时间线图的正确方法。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Azure Fabric环境中查看Notebook执行的作业历史和时间线图。\n重点是理解Azure Fabric中不同工具和功能的用途，例如Monitoring hub、Spark History Server等。\n2. 选项分析\nA. Real-Time hub: 错误。Real-Time hub主要用于实时数据流处理和监控，与查看Notebook作业的时间线图无关。\nB. Monitoring hub: 错误。Monitoring hub用于监控系统的整体运行状况和性能指标，但不提供具体的Notebook作业时间线图。\nC. the job history from the application run: 错误。虽然可以查看作业历史，但无法以时间线图的形式呈现作业运行情况。\nD. Spark History Server: 错误。Spark History Server用于查看Spark作业的详细运行信息，但不适用于Fabric Notebook的时间线图需求。\nE. the run series from the details of the application run: 正确。此选项提供了查看Notebook作业运行时间线图的功能，符合题目要求。\n3. 我的答案\n我的答案是：E\n4. 官方答案\n官方答案是：E\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：选项E明确提到“the run series from the details of the application run”，这是查看Notebook作业时间线图的正确方法。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 9,
  "pdfPage": 334,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 9",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 9",
  "pdfQuestionNum": 9,
  "topic": 3
 },
 {
  "id": "dp700-q112",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "Runtime logs",
   "Details"
  ],
  "pdfAnswer": [
   "Runtime logs",
   "Details"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "查找错误详细信息",
    "labelEn": "To find the error details",
    "labelZh": "查找错误详细信息",
    "choices": [
     {
      "key": "Data insights",
      "en": "Data insights",
      "zh": "Data insights"
     },
     {
      "key": "Data preview",
      "en": "Data preview",
      "zh": "Data preview"
     },
     {
      "key": "Details",
      "en": "Details",
      "zh": "Details"
     },
     {
      "key": "Runtime logs",
      "en": "Runtime logs",
      "zh": "Runtime logs"
     }
    ],
    "answer": "Runtime logs"
   },
   {
    "id": "2",
    "label": "查找错误总数",
    "labelEn": "To find the total number of errors",
    "labelZh": "查找错误总数",
    "choices": [
     {
      "key": "Data insights",
      "en": "Data insights",
      "zh": "Data insights"
     },
     {
      "key": "Data preview",
      "en": "Data preview",
      "zh": "Data preview"
     },
     {
      "key": "Details",
      "en": "Details",
      "zh": "Details"
     },
     {
      "key": "Runtime logs",
      "en": "Runtime logs",
      "zh": "Runtime logs"
     }
    ],
    "answer": "Details"
   }
  ],
  "answerSource": "image",
  "stem": "您有一个 Fabric 工作区，其中包含一个名为 EventStream1 的事件流。\n您发现 EventStream1 转换失败。\n您需要找到以下错误信息：\n错误详情，包括发生时间\n错误总数 -\n您应该使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemZh": "您有一个 Fabric 工作区，其中包含一个名为 EventStream1 的事件流。\n您发现 EventStream1 转换失败。\n您需要找到以下错误信息：\n错误详情，包括发生时间\n错误总数 -\n您应该使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值一分。",
  "stemEn": "You have a Fabric workspace that contains an eventstream named EventStream1.\nYou discover that an EventStream1 transformation fails.\nYou need to find the following error information:\nThe error details, including the occurrence time\nThe total number of errors -\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 337 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Fabric 工作区中排查事件流（EventStream）转换失败的错误信息，包括错误详情和错误总数。\n涉及到 Fabric 中的日志和数据预览功能的使用。\n2. 选项分析\nTo find the error details:\nData insights: 错误详情通常不会通过数据洞察（Data insights）直接提供，该功能主要用于分析数据趋势和统计信息，因此此选项错误。\nData preview: 数据预览（Data preview）用于查看数据流的实时数据，但不会提供错误详情，因此此选项错误。\nDetails：详情（Details）选项可能包含错误的详细信息，但它通常不包括错误发生的时间，因此此选项错误。\nRuntime logs:运行时日志（Runtime logs）记录了事件流的运行时信息，包括错误详情和发生时间，因此此选项正确。\nTo find the total number of errors:\nData insights：数据洞察（Data insights）可能提供错误的统计信息，但它通常不直接显示错误总数，因此此选项错误。\nData preview：数据预览（Data preview）用于查看实时数据流，但不会显示错误总数，因此此选项错误。\nDetails:详情（Details）选项通常包含错误的统计信息，因此此选项正确。\nRuntime logs: 运行时日志（Runtime logs）记录了事件流的运行时信息，但它通常不直接显示错误总数，因此此选项错误。\n3. 我的答案\nTo find the error details: Runtime logs\nTo find the total number of errors: Details\n4. 官方答案\nTo find the error details: Runtime logs\nTo find the total number of errors: Details\n5. 答案比较与分析\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationZh": "【答案来源】PDF 第 337 页答案图\n\n题目分析与解答\n1. 考察的知识点\n本题考察的是如何在Fabric 工作区中排查事件流（EventStream）转换失败的错误信息，包括错误详情和错误总数。\n涉及到 Fabric 中的日志和数据预览功能的使用。\n2. 选项分析\nTo find the error details:\nData insights: 错误详情通常不会通过数据洞察（Data insights）直接提供，该功能主要用于分析数据趋势和统计信息，因此此选项错误。\nData preview: 数据预览（Data preview）用于查看数据流的实时数据，但不会提供错误详情，因此此选项错误。\nDetails：详情（Details）选项可能包含错误的详细信息，但它通常不包括错误发生的时间，因此此选项错误。\nRuntime logs:运行时日志（Runtime logs）记录了事件流的运行时信息，包括错误详情和发生时间，因此此选项正确。\nTo find the total number of errors:\nData insights：数据洞察（Data insights）可能提供错误的统计信息，但它通常不直接显示错误总数，因此此选项错误。\nData preview：数据预览（Data preview）用于查看实时数据流，但不会显示错误总数，因此此选项错误。\nDetails:详情（Details）选项通常包含错误的统计信息，因此此选项正确。\nRuntime logs: 运行时日志（Runtime logs）记录了事件流的运行时信息，但它通常不直接显示错误总数，因此此选项错误。\n3. 我的答案\nTo find the error details: Runtime logs\nTo find the total number of errors: Details\n4. 官方答案\nTo find the error details: Runtime logs\nTo find the total number of errors: Details\n5. 答案比较与分析\n我的答案与官方答案一致。\n没有需要重新思考的部分。",
  "explanationEn": "[Answer source] PDF p.337 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 10,
  "pdfPage": 336,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 10",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 10",
  "pdfQuestionNum": 10,
  "topic": 3
 },
 {
  "id": "dp700-q113",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "启用",
    "textEn": "Enable V-Order.",
    "textZh": "启用"
   },
   {
    "id": "B",
    "text": "创建和更新统计信息。",
    "textEn": "Create and update statistics.",
    "textZh": "创建和更新统计信息。"
   },
   {
    "id": "C",
    "text": "Run the VACUUM command.",
    "textEn": "Run the VACUUM command.",
    "textZh": "Run the VACUUM command."
   },
   {
    "id": "D",
    "text": "入主键。",
    "textEn": "Introduce primary keys.",
    "textZh": "入主键。"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "应该怎么做以优化业务用户的查询体验？",
  "stemZh": "应该怎么做以优化业务用户的查询体验？",
  "stemEn": "What should you do to optimize the query experience for the business users?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化查询性能，特别是在数据仓库中提高查询效率的技术，包括统计信息、索引、数据组织等。\n2. 选项分析\nA. Enable V-Order (启用 V-Order)\nV-Order是一种数据存储格式，可以优化查询性能，特别是针对列式存储的查询。但题目中明确指出金层数据仓库已禁用V-Order，因此启用V-Order不符合现有环境。\n错误原因：题目环境中明确指出V-Order已禁用，无法直接启用。\nB. Create and update statistics (创建和更新统计信息)\n创建和更新统计信息可以帮助查询优化器更好地选择执行计划，从而提高查询性能。这是优化查询性能的常见方法。\n正确原因：统计信息可以显著提高查询效率，特别是在数据量较大的情况下。\nC. Run the VACUUM command (运行 VACUUM 命令)\nVACUUM命令通常用于清理未使用的数据文件或优化存储空间，但它不会直接影响查询性能。\n错误原因：VACUUM主要用于存储优化，而非查询优化。\nD. Introduce primary keys (引入主键)\n主键可以帮助确保数据的唯一性和完整性，但它不会直接提高查询性能，尤其是在数据仓库中，主键的作用有限。\n错误原因：主键的主要作用是数据约束，而非查询性能优化。\n3. 我的答案\nB. Create and update statistics (创建和更新统计信息)\n4. 官方答案\nB. Create and update statistics (创建和更新统计信息)\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：创建和更新统计信息是优化查询性能的最佳实践，符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化查询性能，特别是在数据仓库中提高查询效率的技术，包括统计信息、索引、数据组织等。\n2. 选项分析\nA. Enable V-Order (启用 V-Order)\nV-Order是一种数据存储格式，可以优化查询性能，特别是针对列式存储的查询。但题目中明确指出金层数据仓库已禁用V-Order，因此启用V-Order不符合现有环境。\n错误原因：题目环境中明确指出V-Order已禁用，无法直接启用。\nB. Create and update statistics (创建和更新统计信息)\n创建和更新统计信息可以帮助查询优化器更好地选择执行计划，从而提高查询性能。这是优化查询性能的常见方法。\n正确原因：统计信息可以显著提高查询效率，特别是在数据量较大的情况下。\nC. Run the VACUUM command (运行 VACUUM 命令)\nVACUUM命令通常用于清理未使用的数据文件或优化存储空间，但它不会直接影响查询性能。\n错误原因：VACUUM主要用于存储优化，而非查询优化。\nD. Introduce primary keys (引入主键)\n主键可以帮助确保数据的唯一性和完整性，但它不会直接提高查询性能，尤其是在数据仓库中，主键的作用有限。\n错误原因：主键的主要作用是数据约束，而非查询性能优化。\n3. 我的答案\nB. Create and update statistics (创建和更新统计信息)\n4. 官方答案\nB. Create and update statistics (创建和更新统计信息)\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：创建和更新统计信息是优化查询性能的最佳实践，符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化查询性能，特别是在数据仓库中提高查询效率的技术，包括统计信息、索引、数据组织等。\n2. 选项分析\nA. Enable V-Order (启用 V-Order)\nV-Order是一种数据存储格式，可以优化查询性能，特别是针对列式存储的查询。但题目中明确指出金层数据仓库已禁用V-Order，因此启用V-Order不符合现有环境。\n错误原因：题目环境中明确指出V-Order已禁用，无法直接启用。\nB. Create and update statistics (创建和更新统计信息)\n创建和更新统计信息可以帮助查询优化器更好地选择执行计划，从而提高查询性能。这是优化查询性能的常见方法。\n正确原因：统计信息可以显著提高查询效率，特别是在数据量较大的情况下。\nC. Run the VACUUM command (运行 VACUUM 命令)\nVACUUM命令通常用于清理未使用的数据文件或优化存储空间，但它不会直接影响查询性能。\n错误原因：VACUUM主要用于存储优化，而非查询优化。\nD. Introduce primary keys (引入主键)\n主键可以帮助确保数据的唯一性和完整性，但它不会直接提高查询性能，尤其是在数据仓库中，主键的作用有限。\n错误原因：主键的主要作用是数据约束，而非查询性能优化。\n3. 我的答案\nB. Create and update statistics (创建和更新统计信息)\n4. 官方答案\nB. Create and update statistics (创建和更新统计信息)\n5. 与官方答案比较\n我的答案与官方答案一致。\n原因分析：创建和更新统计信息是优化查询性能的最佳实践，符合题目要求。",
  "caseStudy": true,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 11,
  "pdfPage": 338,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 11",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 11",
  "pdfQuestionNum": 11,
  "topic": 3,
  "caseStudyId": "dp700-case-2",
  "caseStudyText": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。gold 层位于一个的仓Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上到达工作时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3) buckets 暴露数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)方式处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextZh": "案例研究\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，本次考试可能还有其他案例研究和部分。您必须管理您的时间，以确保能够在规定的时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了关于案例研究中描述场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到这一部分。\n开始案例研究\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有一个\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述\nLitware, Inc.是一家出版公司，拥有一个在线书店和多个全球零售书店。Litware 还为其代表的作者管理在线广告业务。\n现有环境。Fabric 环境\nLitware 有一个名为 Workspace1 的 Fabric 工作区。 Workspace1 启用了高并发。\n公司有一个数据工程团队，使用 Python 进行数据处理。\n现有环境。数据处理\n零售书店在每个营业日结束时发送销售数据，而在线书店则不断向中央企业资源规划（ERP）系统提供日志和销售数据。\nLitware 通过使用以下三个层级实现了 medallion 架构：bronze、silver 和 gold。销售数据以 Parquet 文件的形式从 ERP 系统摄取，这些文件存储在 lakehouse 的 Files 文件夹中。使用 Notebooks 将文件转换为 Delta 表以用于 bronze 和 silver 层。gold 层位于一个的仓Litware 在 Azure Blob Storage 中存储了书籍封面的图像文件。这些文件被加载到 Files 文件夹中。\n现有环境。\n月末销售数据在每月的第一个日历日进行处理。一个月以上的数据不会发生变化。\n在源系统中，销售数据每天从午夜开始每六小时刷新一次。\n销售数据通过Dataflow Gen1数据流捕获。当数据流运行时，会捕获新的和历史数据。数据流捕获以下源字段：\n销售\n作者\n• 价格\n• 单位\n• SKU\n一个名为 AuthorSales 的表存储与每位作者相关的销售数据。该表包含一个名为 AuthorEmail 的列。作者通过使用其电子邮件地址在一个来宾 Fabric 租户中进行身份验证。\n现有环境。\nLitware\n销售\n• Fabric Admins\n• Streaming Admins\n现有环境。\n业务用户对仓库执行临时查询。业务用户表示，针对仓库的报告有时运行两个小时并未按预期加载。经过进一步调查，数据工程团队收到以下错误消息，当报告未加载时显示：\"SQL查询运行失败。\n数据工程团队希望调试问题并找到导致多次失败的查询。\n当作者发布新书时，销售活动通常会增加。这种增加会减慢数据摄取过程。\n公司销售团队报告，上个月的销售数据在他们早上到达工作时并未更新。\n需求。\nLitware 最近签署了一份合同以接收书评。书评的提供方通过 Amazon Simple Storage Service (Amazon S3) buckets 暴露数据。\nLitware 计划为作者管理搜索引擎优化 (SEO)。 SEO 数据将通过 REST API 流式传输。\n需求。\nLitware 计划在Fabric 中实施一个版本控制解决方案，该解决方案将使用 GitHub 集成并遵循最小权限原则。\n需求。\n为了控制数据平台成本，数据平台必须仅使用Fabric 服务和项目。不得配置额外的 Azure 资源。\n需求。\nLitware 确定了以下数据需求：\n·以近实时 (NRT)方式处理 SEO 数据。\n·使书评在 lakehouse 中可用，而无需复制数据。\n·当新的书籍封面图像到达 Files 文件夹时，尽快处理图像。",
  "caseStudyTextEn": "Case Study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a publishing company that has an online bookstore and several retail bookstores worldwide. Litware also manages an online advertising business for the authors it represents.\nExisting Environment. Fabric Environment\nLitware has a Fabric workspace named Workspace1. High concurrency is enabled for Workspace1.\nThe company has a data engineering team that uses Python for data processing.\nExisting Environment. Data Processing\nThe retail bookstores send sales data at the end of each business day, while the online bookstore constantly provides logs and sales data to a central enterprise resource planning (ERP) system.\nLitware implements a medallion architecture by using the following three layers: bronze, silver, and gold. The sales data is ingested from the ERP system as Parquet files that land in the Files folder in a lakehouse. Notebooks are used to transform the files in a Delta table for the bronze and silver layers. The gold layer is in a warehouse that has V-Order disabled.\nLitware has image files of book covers in Azure Blob Storage. The files are loaded into the Files folder.\nExisting Environment. Sales Data\nMonth-end sales data is processed on the first calendar day of each month. Data that is older than one month never changes.\nIn the source system, the sales data refreshes every six hours starting at midnight each day.\nThe sales data is captured in a Dataflow Gen1 dataflow. When the dataflow runs, new and historical data is captured. The dataflow captures the following fields of the source:\n• Sales Date\n• Author\n• Price\n• Units\n• SKU\nA table named AuthorSales stores the sales data that relates to each author. The table contains a column named AuthorEmail.\nAuthors authenticate to a guest Fabric tenant by using their email address.\nExisting Environment. Security Groups\nLitware has the following security groups:\n• Sales\n• Fabric Admins\n• Streaming Admins\nExisting Environment. Performance Issues\nBusiness users perform ad-hoc queries against the warehouse. The business users indicate that reports against the warehouse sometimes run for two hours and fail to load as expected. Upon further investigation, the data engineering team receives the following error message when the reports fail to load: “The SQL query failed while running.” The data engineering team wants to debug the issue and find queries that cause more than one failure.\nWhen the authors have new book releases, there is often an increase in sales activity. This increase slows the data ingestion process.\nThe company’s sales team reports that during the last month, the sales data has NOT been up-to-date when they arrive at work in the morning.\nRequirements. Planned Changes -\nLitware recently signed a contract to receive book reviews. The provider of the reviews exposes the data in Amazon Simple Storage Service (Amazon S3) buckets.\nLitware plans to manage Search Engine Optimization (SEO) for the authors. The SEO data will be streamed from a REST API.\nRequirements. Version Control -\nLitware plans to implement a version control solution in Fabric that will use GitHub integration and follow the principle of least privilege.\nRequirements. Governance Requirements\nTo control data platform costs, the data platform must use only Fabric services and items. Additional Azure resources must NOT be provisioned.\nRequirements. Data Requirements -\nLitware identifies the following data requirements:\n• Process the SEO data in near-real-time (NRT).\n• Make the book reviews available in the lakehouse without making a copy of the data.\n• When a new book cover image arrives in the Files folder, process the image as soon as possible."
 },
 {
  "id": "dp700-q114",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "the Microsoft Fabric Capacity Metrics app",
    "textEn": "the Microsoft Fabric Capacity Metrics app",
    "textZh": "the Microsoft Fabric Capacity Metrics app"
   },
   {
    "id": "B",
    "text": "views from the queryinsights schema",
    "textEn": "views from the queryinsights schema",
    "textZh": "views from the queryinsights schema"
   },
   {
    "id": "C",
    "text": "Query activity",
    "textEn": "Query activity",
    "textZh": "Query activity"
   },
   {
    "id": "D",
    "text": "the sys.dm_exec_requests dynamic management view",
    "textEn": "the sys.dm_exec_requests dynamic management view",
    "textZh": "the sys.dm_exec_requests dynamic management view"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n在监控 Warehouse1 时，你发现查询性能在过去 60 分钟内有所下降。\n你需要隔离过去 60 分钟内运行的所有查询。结果必须包括提交查询的用户的用户名以及查询语句。\n你应该使用什么？",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 Warehouse1 的仓库。\n在监控 Warehouse1 时，你发现查询性能在过去 60 分钟内有所下降。\n你需要隔离过去 60 分钟内运行的所有查询。结果必须包括提交查询的用户的用户名以及查询语句。\n你应该使用什么？",
  "stemEn": "You have a Fabric workspace that contains a warehouse named Warehouse1.\nWhile monitoring Warehouse1, you discover that query performance has degraded during the last 60 minutes.\nYou need to isolate all the queries that were run during the last 60 minutes. The results must include the username of the users that submitted the queries and the query statements.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和诊断 Microsoft Fabric 仓库中的查询性能问题。\n重点在于使用适当的工具或视图来获取查询的详细信息，包括用户名和查询语句。\n2. 选项分析\nA. the Microsoft Fabric Capacity Metrics app\n错误：Microsoft Fabric Capacity Metrics app 主要用于监控容量使用情况和性能指标，但不提供具体的查询细节（如用户名和查询语句）。\nB. views from the queryinsights schema\n正确：queryinsights schema 提供了详细的查询性能数据，包括查询语句和提交查询的用户名，非常适合用于诊断查询性能问题。\nC. Query activity\n错误：Query activity 可能提供一些查询活动的概览，但无法提供详细的查询语句和用户名信息。\nD. the sys.dm_exec_requests dynamic management view\n错误：sys.dm_exec_requests 动态管理视图主要用于监控当前正在执行的查询，而不是过去的查询记录。\n3. 我的答案\n我选择的答案是：B\n4. 官方答案\n官方正确答案是：B\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和诊断 Microsoft Fabric 仓库中的查询性能问题。\n重点在于使用适当的工具或视图来获取查询的详细信息，包括用户名和查询语句。\n2. 选项分析\nA. the Microsoft Fabric Capacity Metrics app\n错误：Microsoft Fabric Capacity Metrics app 主要用于监控容量使用情况和性能指标，但不提供具体的查询细节（如用户名和查询语句）。\nB. views from the queryinsights schema\n正确：queryinsights schema 提供了详细的查询性能数据，包括查询语句和提交查询的用户名，非常适合用于诊断查询性能问题。\nC. Query activity\n错误：Query activity 可能提供一些查询活动的概览，但无法提供详细的查询语句和用户名信息。\nD. the sys.dm_exec_requests dynamic management view\n错误：sys.dm_exec_requests 动态管理视图主要用于监控当前正在执行的查询，而不是过去的查询记录。\n3. 我的答案\n我选择的答案是：B\n4. 官方答案\n官方正确答案是：B\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和诊断 Microsoft Fabric 仓库中的查询性能问题。\n重点在于使用适当的工具或视图来获取查询的详细信息，包括用户名和查询语句。\n2. 选项分析\nA. the Microsoft Fabric Capacity Metrics app\n错误：Microsoft Fabric Capacity Metrics app 主要用于监控容量使用情况和性能指标，但不提供具体的查询细节（如用户名和查询语句）。\nB. views from the queryinsights schema\n正确：queryinsights schema 提供了详细的查询性能数据，包括查询语句和提交查询的用户名，非常适合用于诊断查询性能问题。\nC. Query activity\n错误：Query activity 可能提供一些查询活动的概览，但无法提供详细的查询语句和用户名信息。\nD. the sys.dm_exec_requests dynamic management view\n错误：sys.dm_exec_requests 动态管理视图主要用于监控当前正在执行的查询，而不是过去的查询记录。\n3. 我的答案\n我选择的答案是：B\n4. 官方答案\n官方正确答案是：B\n5. 答案比较与思考\n我的答案与官方答案一致，无需重新思考。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 12,
  "pdfPage": 344,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 12",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 12",
  "pdfQuestionNum": 12,
  "topic": 3
 },
 {
  "id": "dp700-q115",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "设置中",
    "textEn": "the refresh history from the settings of Model1",
    "textZh": "设置中"
   },
   {
    "id": "B",
    "text": "一个 notebook",
    "textEn": "a notebook",
    "textZh": "一个 notebook"
   },
   {
    "id": "C",
    "text": "一个 Dataflow Gen2 dataflow",
    "textEn": "a Dataflow Gen2 dataflow",
    "textZh": "一个 Dataflow Gen2 dataflow"
   },
   {
    "id": "D",
    "text": "一个 data pipeline",
    "textEn": "a data pipeline",
    "textZh": "一个 data pipeline"
   }
  ],
  "answer": [
   "B"
  ],
  "pdfAnswer": [
   "B"
  ],
  "answerSource": "text",
  "stem": "你有一个包含名为Model1 的语义模型的 Fabric 工作区。\n你需要监控 Model1 的刷新历史，并在图表中可视化刷新历史。\n你应该使用",
  "stemZh": "你有一个包含名为Model1 的语义模型的 Fabric 工作区。\n你需要监控 Model1 的刷新历史，并在图表中可视化刷新历史。\n你应该使用",
  "stemEn": "You have a Fabric workspace that contains a semantic model named Model1.\nYou need to monitor the refresh history of Model1 and visualize the refresh history in a chart.\nWhat should you use?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和可视化 Fabric 工作区中语义模型的刷新历史。\n涉及到 Fabric 中的工具和功能，包括 Notebook、Dataflow Gen2、Data Pipeline 等。\n2. 选项分析\nA. the refresh history from the settings of Model1\n错误：虽然可以在Model1的设置中查看刷新历史，但设置界面仅提供静态信息，无法直接生成可视化图表。\nB. a notebook\n正确：Notebook是一个强大的工具，可以通过编程方式查询刷新历史数据，并使用可视化库（如Matplotlib或Plotly）生成图表。\nC. a Dataflow Gen2 dataflow\n错误：Dataflow Gen2主要用于数据转换和加载，无法直接用于监控语义模型的刷新历史。\nD. a data pipeline\n错误：Data Pipeline 用于数据处理和工作流管理，无法直接用于监控和可视化刷新历史。\n3. 我的答案\n我的选择是：B. a notebook\n4. 官方答案\n官方答案是：B. a notebook\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Notebook 是 Fabric 中最灵活的工具之一，可以通过编程方式查询数据并生成可视化图表，完全符合题目要求。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和可视化 Fabric 工作区中语义模型的刷新历史。\n涉及到 Fabric 中的工具和功能，包括 Notebook、Dataflow Gen2、Data Pipeline 等。\n2. 选项分析\nA. the refresh history from the settings of Model1\n错误：虽然可以在Model1的设置中查看刷新历史，但设置界面仅提供静态信息，无法直接生成可视化图表。\nB. a notebook\n正确：Notebook是一个强大的工具，可以通过编程方式查询刷新历史数据，并使用可视化库（如Matplotlib或Plotly）生成图表。\nC. a Dataflow Gen2 dataflow\n错误：Dataflow Gen2主要用于数据转换和加载，无法直接用于监控语义模型的刷新历史。\nD. a data pipeline\n错误：Data Pipeline 用于数据处理和工作流管理，无法直接用于监控和可视化刷新历史。\n3. 我的答案\n我的选择是：B. a notebook\n4. 官方答案\n官方答案是：B. a notebook\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Notebook 是 Fabric 中最灵活的工具之一，可以通过编程方式查询数据并生成可视化图表，完全符合题目要求。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何监控和可视化 Fabric 工作区中语义模型的刷新历史。\n涉及到 Fabric 中的工具和功能，包括 Notebook、Dataflow Gen2、Data Pipeline 等。\n2. 选项分析\nA. the refresh history from the settings of Model1\n错误：虽然可以在Model1的设置中查看刷新历史，但设置界面仅提供静态信息，无法直接生成可视化图表。\nB. a notebook\n正确：Notebook是一个强大的工具，可以通过编程方式查询刷新历史数据，并使用可视化库（如Matplotlib或Plotly）生成图表。\nC. a Dataflow Gen2 dataflow\n错误：Dataflow Gen2主要用于数据转换和加载，无法直接用于监控语义模型的刷新历史。\nD. a data pipeline\n错误：Data Pipeline 用于数据处理和工作流管理，无法直接用于监控和可视化刷新历史。\n3. 我的答案\n我的选择是：B. a notebook\n4. 官方答案\n官方答案是：B. a notebook\n5. 答案比较与分析\n我的答案与官方答案一致。\n原因分析：Notebook 是 Fabric 中最灵活的工具之一，可以通过编程方式查询数据并生成可视化图表，完全符合题目要求。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 13,
  "pdfPage": 346,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 13",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 13",
  "pdfQuestionNum": 13,
  "topic": 3
 },
 {
  "id": "dp700-q116",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "启用",
    "textEn": "Enable V-Order.",
    "textZh": "启用"
   },
   {
    "id": "B",
    "text": "创建统计信息。",
    "textEn": "Create statistics.",
    "textZh": "创建统计信息。"
   },
   {
    "id": "C",
    "text": "删除统计信息。",
    "textEn": "Drop statistics.",
    "textZh": "删除统计信息。"
   },
   {
    "id": "D",
    "text": "Disable V-Order.",
    "textEn": "Disable V-Order.",
    "textZh": "Disable V-Order."
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个Fabric工作区，其中包含一个写密集型仓库名为DW1。DW1存储用于加载维度模型的暂存表。这些表通常被读取一次，然后被删除，并重新创建以处理新数据。\n你需要最小化 DW1的加载时间。\n你应该怎么做？",
  "stemZh": "你有一个Fabric工作区，其中包含一个写密集型仓库名为DW1。DW1存储用于加载维度模型的暂存表。这些表通常被读取一次，然后被删除，并重新创建以处理新数据。\n你需要最小化 DW1的加载时间。\n你应该怎么做？",
  "stemEn": "You have a Fabric workspace that contains a write-intensive warehouse named DW1. DW1 stores staging tables that are used to load a dimensional model. The tables are often read once, dropped, and then recreated to process new data.\nYou need to minimize the load time of DW1.\nWhat should you do?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化数据仓库的性能，特别是在写密集型场景下的配置选项。\n涉及到 V-Order 的启用与禁用，以及统计信息的创建与删除对性能的影响。\n2. 选项分析\nA. Enable V-Order. 启用 V-Order。\nV-Order 是一种优化数据存储的技术，主要用于提高查询性能，特别是读取性能。\n在写密集型场景中，启用V-Order可能会增加写入的开销，因为数据需要按照特定的顺序进行组织。\n因此，此选项不适合用于优化写入性能。\nB. Create statistics. 创建统计信息。\n创建统计信息通常用于优化查询性能，帮助查询优化器选择最佳的执行计划。\n但在写密集型场景中，创建统计信息可能会增加额外的开销，并不会直接减少写入时间。\n因此，此选项不适合用于优化写入性能。\nC. Drop statistics. 删除统计信息。\n删除统计信息可能会减少写入时的开销，因为统计信息的维护可能会增加写入的负担。\n但删除统计信息可能会对后续查询性能产生负面影响，因此需要权衡使用场景。\n此选项可能有一定的作用，但不是最佳选择。\nD. Disable V-Order. 禁用 V-Order。\n禁用V-Order 可以减少写入时的开销，因为数据不需要按照特定的顺序进行组织。\n在写密集型场景中，禁用V-Order 是一个合理的选择，可以显著减少写入时间。\n此选项是最佳\n3. 我的答案\nD. Disable V-Order. 禁用 V-Order。\n4. 官方答案\nD. Disable V-Order. 禁用 V-Order。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n禁用V-Order 是优化写密集型场景的最佳选择。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化数据仓库的性能，特别是在写密集型场景下的配置选项。\n涉及到 V-Order 的启用与禁用，以及统计信息的创建与删除对性能的影响。\n2. 选项分析\nA. Enable V-Order. 启用 V-Order。\nV-Order 是一种优化数据存储的技术，主要用于提高查询性能，特别是读取性能。\n在写密集型场景中，启用V-Order可能会增加写入的开销，因为数据需要按照特定的顺序进行组织。\n因此，此选项不适合用于优化写入性能。\nB. Create statistics. 创建统计信息。\n创建统计信息通常用于优化查询性能，帮助查询优化器选择最佳的执行计划。\n但在写密集型场景中，创建统计信息可能会增加额外的开销，并不会直接减少写入时间。\n因此，此选项不适合用于优化写入性能。\nC. Drop statistics. 删除统计信息。\n删除统计信息可能会减少写入时的开销，因为统计信息的维护可能会增加写入的负担。\n但删除统计信息可能会对后续查询性能产生负面影响，因此需要权衡使用场景。\n此选项可能有一定的作用，但不是最佳选择。\nD. Disable V-Order. 禁用 V-Order。\n禁用V-Order 可以减少写入时的开销，因为数据不需要按照特定的顺序进行组织。\n在写密集型场景中，禁用V-Order 是一个合理的选择，可以显著减少写入时间。\n此选项是最佳\n3. 我的答案\nD. Disable V-Order. 禁用 V-Order。\n4. 官方答案\nD. Disable V-Order. 禁用 V-Order。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n禁用V-Order 是优化写密集型场景的最佳选择。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是如何优化数据仓库的性能，特别是在写密集型场景下的配置选项。\n涉及到 V-Order 的启用与禁用，以及统计信息的创建与删除对性能的影响。\n2. 选项分析\nA. Enable V-Order. 启用 V-Order。\nV-Order 是一种优化数据存储的技术，主要用于提高查询性能，特别是读取性能。\n在写密集型场景中，启用V-Order可能会增加写入的开销，因为数据需要按照特定的顺序进行组织。\n因此，此选项不适合用于优化写入性能。\nB. Create statistics. 创建统计信息。\n创建统计信息通常用于优化查询性能，帮助查询优化器选择最佳的执行计划。\n但在写密集型场景中，创建统计信息可能会增加额外的开销，并不会直接减少写入时间。\n因此，此选项不适合用于优化写入性能。\nC. Drop statistics. 删除统计信息。\n删除统计信息可能会减少写入时的开销，因为统计信息的维护可能会增加写入的负担。\n但删除统计信息可能会对后续查询性能产生负面影响，因此需要权衡使用场景。\n此选项可能有一定的作用，但不是最佳选择。\nD. Disable V-Order. 禁用 V-Order。\n禁用V-Order 可以减少写入时的开销，因为数据不需要按照特定的顺序进行组织。\n在写密集型场景中，禁用V-Order 是一个合理的选择，可以显著减少写入时间。\n此选项是最佳\n3. 我的答案\nD. Disable V-Order. 禁用 V-Order。\n4. 官方答案\nD. Disable V-Order. 禁用 V-Order。\n5. 与官方答案的比较\n我的答案与官方答案一致。\n禁用V-Order 是优化写密集型场景的最佳选择。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 14,
  "pdfPage": 348,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 14",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 14",
  "pdfQuestionNum": 14,
  "topic": 3
 },
 {
  "id": "dp700-q117",
  "examId": "dp-700",
  "domain": "monitor",
  "domainLabel": "监视和优化分析解决方案 (估)",
  "domainLabelZh": "监视和优化分析解决方案 (估)",
  "domainLabelEn": "Monitor and optimize an analytics solution (est.)",
  "domainGuess": true,
  "type": "hotspot",
  "control": "select",
  "options": [],
  "answer": [
   "An On failure dependency condition",
   "An Office365Outlook activity"
  ],
  "pdfAnswer": [
   "An On failure dependency condition",
   "An Office365Outlook activity"
  ],
  "boxes": [
   {
    "id": "1",
    "label": "识别失败",
    "labelEn": "To identify the failure",
    "labelZh": "识别失败",
    "choices": [
     {
      "key": "A Fail activity",
      "en": "A Fail activity",
      "zh": "Fail 活动"
     },
     {
      "key": "An If condition activity",
      "en": "An If condition activity",
      "zh": "If condition 活动"
     },
     {
      "key": "An On failure dependency condition",
      "en": "An On failure dependency condition",
      "zh": "“失败时”(On failure) 依赖条件"
     },
     {
      "key": "An On completion dependency condition",
      "en": "An On completion dependency condition",
      "zh": "“完成时”(On completion) 依赖条件"
     }
    ],
    "answer": "An On failure dependency condition"
   },
   {
    "id": "2",
    "label": "发送通知",
    "labelEn": "To send the notification",
    "labelZh": "发送通知",
    "choices": [
     {
      "key": "A Teams activity",
      "en": "A Teams activity",
      "zh": "Teams 活动"
     },
     {
      "key": "An Invoke pipeline activity",
      "en": "An Invoke pipeline activity",
      "zh": "Invoke pipeline 活动"
     },
     {
      "key": "An Office365Outlook activity",
      "en": "An Office365Outlook activity",
      "zh": "Office365Outlook 活动"
     }
    ],
    "answer": "An Office365Outlook activity"
   }
  ],
  "answerSource": "image",
  "stem": "-\n案例研究\n-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述的场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述\n-\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n-\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric\n-\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure 虚拟机上的 SQL Server 实例，与 Fabric 位于同一个 Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure\n-\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更\n-\nContoso 计划创建以下两个湖仓：\n·Lakehouse1：将存储来自源的原始数据和清理后的数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求\n新的湖仓必须遵循使用以下三个层的奖章架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须重新尝试连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\n-\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。\n您需要确保在填充湖仓的任何步骤失败时通知数据工程师。解决方案必须满足技术要求并最小化开发工作。\n您应该使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemZh": "-\n案例研究\n-\n这是一个案例研究。案例研究没有单独计时。您可以使用考试时间完成每个案例研究。然而，此考试可能包含其他案例研究和部分。您必须管理时间以确保能够在规定时间内完成考试中的所有问题。\n要回答案例研究中的问题，您需要参考案例研究中提供的信息。案例研究可能包含展示和其他资源，这些资源提供了案例研究中描述的场景的更多信息。每个问题都是独立的，与案例研究中的其他问题无关。\n在案例研究结束时，将出现一个审阅屏幕。此屏幕允许您审查您的答案并在进入考试的下一部分之前进行更改。一旦开始新的部分，您将无法返回到此部分。\n开始案例研究\n-\n要显示案例研究中的第一个问题，请单击\"下一步\"按钮。在回答问题之前，使用左侧窗格中的按钮浏览案例研究的内容。单击这些按钮将显示信息，例如业务需求、现有环境和问题陈述。如果案例研究有\"所有信息\"选项卡，请注意显示的信息与后续选项卡中显示的信息相同。当您准备好回答问题时，单击\"问题\"按钮返回到问题。\n概述。公司概述\n-\nContoso, Ltd.是一家在线零售公司，计划通过迁移到 Fabric 来现代化其分析平台。公司计划开始使用 Fabric 进行营销分析。\n概述。\n-\n公司的IT 部门有一个数据分析师团队和一个数据工程师团队，他们使用分析系统。\n数据工程师负责数据的摄取、转换和加载。他们更喜欢使用 Python或SQL来转换数据。\n数据分析师查询数据并创建语义模型和报告。他们有能力使用 Power Query 和 T-SQL 编写查询。\n现有环境。Fabric\n-\nContoso 有一个名为 Cap1 的 F64 容量。所有 Fabric 用户都被允许创建项目。\nContoso 有两个工作区，分别是 WorkspaceA 和WorkspaceB，目前使用 Pro 许可模式。\n现有环境。\nContoso 有一个名为 POS1 的销售点 (POS)系统，该系统使用 Azure 虚拟机上的 SQL Server 实例，与 Fabric 位于同一个 Microsoft Entra 租户中。主机虚拟机位于一个阻止公共访问的私有虚拟网络中。POS1包含公司网站上处理的所有销售交易。\n公司有一个名为 MAR1 的软件即服务 (SaaS) 在线营销应用程序。MAR1 有七个实体。这些实体包含与电子邮件打开率和交互率以及网站交互相关的数据。可以通过调用 REST APIs 从 MAR1导出数据。每个实体都有不同的端点。\nContoso 使用 MAR1 已有一年时间。前几年的数据存储在 Amazon Simple Storage Service (Amazon S3)存储桶中的 Parquet 文件中。这些文件共有 12个，大小从 300 MB到 900 MB不等，与电子邮件交互相关。\n现有环境。产品数据\nPOS1 包含一个产品列表及界关数据。数据来自以下三个表：\n• Products\n• ProductCategories\n• ProductSubcategories\n在数据中，产品与产品子类别相关联，子类别与产品类别相关联。\n现有环境。Azure\n-\nContoso 有一个 Microsoft Entra 租户，其中包含以下启用邮件的安全组：\n·DataAnalysts：包含数据分析师\n·DataEngineers：包含数据工程师\nContoso 有一个 Azure 订阅。\n公司有一个现有的 Azure DevOps 组织，并为与 Fabric 相关的存储库创建了一个新项目。\n现有环境。\nContoso 的营销副总裁需要分析不同类型电子邮件内容的有效性。通常需要一周时间手动编译和分析数据。Contoso 希望通过使用Fabric 将时间减少到不到一天。\n数据工程团队已成功从MAR1导出数据。团队遇到瞬时连接错误，导致数据导出失败。\n需求。计划变更\n-\nContoso 计划创建以下两个湖仓：\n·Lakehouse1：将存储来自源的原始数据和清理后的数据\n·Lakehouse2：将以维度模型的形式为用户提供数据以进行分析查询\n将添加其他项目以促进数据摄取和转换。\nContoso 计划在 Fabric 中使用 Azure Repos 进行源代码控制。\n需求。技术需求\n新的湖仓必须遵循使用以下三个层的奖章架构：bronze、silver 和 gold。将需要广泛的数据清理以将 MAR1数据填充到 silver 层，包括去重、处理缺失值以及标准化大小写。\n每一层必须完全填充后才能进入下一层。如果填充湖仓的任何步骤失败，必须向数据工程师发送电子邮件。\n数据导入必须尽可能同时运行。\n使用来自 Amazon S3 存储桶的电子邮件数据必须满足以下要求：\n·最大限度地减少与跨云数据访问相关的出口成本。\n·防止在湖仓中保存原始数据的副本。\n与数据摄取相关的项目必须满足以下要求：\n·这些项目必须与其他工作区项目一起进行源代码控制。\n·摄取的数据必须以 Delta 格式落地到 Lakehouse1 的 bronze 层。\n·在数据落地到 bronze 层之前，除了文件格式的更改外，不得实施其他更改。\n·开发工作必须最小化，并且必须使用内置连接来导入源数据。\n·在发生连接错误时，摄取过程必须重新尝试连接。\n湖仓、数据管道和笔记本必须存储在WorkspaceA中。语义模型、报告和数据流必须存储在 WorkspaceB中。\n每周一次，必须删除不再被 Delta 表日志引用的旧文件。\n需求。数据转换\n在 POS1 产品数据中，ProductID 值是唯一的。gold 层中的产品维度必须仅包含产品列表中的活动产品。活动产品產 IsActive 值为1 标识。\n某些产品类别和子类别未分配给任何产品。它们在分析上不相关，必须从gold层中的产品维度中省略。\n需求。\n-\nFabric 中的安全性必须满足以下要求：\n·数据工程师必须对所有湖仓及其底层文件具有读写访问权限。\n·数据分析师只能对 gold 层中的 Delta 表具有读取访问权限。\n·数据分析师不得访问 bronze 和 silver 层中的数据。\n·数据工程师必须能够在 WorkspaceA 中提交源代码控制的更改。\n您需要确保在填充湖仓的任何步骤失败时通知数据工程师。解决方案必须满足技术要求并最小化开发工作。\n您应该使用什么？要回答，请在答案区域中选择适当的选项。\n注意：每个正确选择都值得一分。",
  "stemEn": "-\nCase Study\n-\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview. Company Overview\n-\nContoso, Ltd. is an online retail company that wants to modernize its analytics platform by moving to Fabric. The company plans to begin using Fabric for marketing analytics.\nOverview. IT Structure\n-\nThe company’s IT department has a team of data analysts and a team of data engineers that use analytics systems.\nThe data engineers perform the ingestion, transformation, and loading of data. They prefer to use Python or SQL to transform the data.\nThe data analysts query data and create semantic models and reports. They are qualified to write queries in Power Query and T- SQL.\nExisting Environment. Fabric\n-\nContoso has an F64 capacity named Cap1. All Fabric users are allowed to create items.\nContoso has two workspaces named WorkspaceA and WorkspaceB that currently use Pro license mode.\nExisting Environment. Source Systems\nContoso has a point of sale (POS) system named POS1 that uses an instance of SQL Server on Azure Virtual Machines in the same Microsoft Entra tenant as Fabric. The host virtual machine is on a private virtual network that has public access blocked. POS1 contains all the sales transactions that were processed on the company’s website.\nThe company has a software as a service (SaaS) online marketing app named MAR1. MAR1 has seven entities. The entities contain data that relates to email open rates and interaction rates, as well as website interactions. The data can be exported from MAR1 by calling REST APIs. Each entity has a different endpoint.\nContoso has been using MAR1 for one year. Data from prior years is stored in Parquet files in an Amazon Simple Storage Service (Amazon S3) bucket. There are 12 files that range in size from 300 MB to 900 MB and relate to email interactions.\nExisting Environment. Product Data\nPOS1 contains a product list and related data. The data comes from the following three tables:\n• Products\n• ProductCategories\n• ProductSubcategories\nIn the data, products are related to product subcategories, and subcategories are related to product categories.\nExisting Environment. Azure\n-\nContoso has a Microsoft Entra tenant that has the following mail-enabled security groups:\n• DataAnalysts: Contains the data analysts\n• DataEngineers: Contains the data engineers\nContoso has an Azure subscription.\nThe company has an existing Azure DevOps organization and creates a new project for repositories that relate to Fabric.\nExisting Environment. User Problems\nThe VP of marketing at Contoso requires analysis on the effectiveness of different types of email content. It typically takes a week to manually compile and analyze the data. Contoso wants to reduce the time to less than one day by using Fabric.\nThe data engineering team has successfully exported data from MAR1. The team experiences transient connectivity errors, which causes the data exports to fail.\nRequirements. Planned Changes\n-\nContoso plans to create the following two lakehouses:\n• Lakehouse1: Will store both raw and cleansed data from the sources\n• Lakehouse2: Will serve data in a dimensional model to users for analytical queries\nAdditional items will be added to facilitate data ingestion and transformation.\nContoso plans to use Azure Repos for source control in Fabric.\nRequirements. Technical Requirements\nThe new lakehouses must follow a medallion architecture by using the following three layers: bronze, silver, and gold. There will be extensive data cleansing required to populate the MAR1 data in the silver layer, including deduplication, the handling of missing values, and the standardizing of capitalization.\nEach layer must be fully populated before moving on to the next layer. If any step in populating the lakehouses fails, an email must be sent to the data engineers.\nData imports must run simultaneously, when possible.\nThe use of email data from the Amazon S3 bucket must meet the following requirements:\n• Minimize egress costs associated with cross-cloud data access.\n• Prevent saving a copy of the raw data in the lakehouses.\nItems that relate to data ingestion must meet the following requirements:\n• The items must be source controlled alongside other workspace items.\n• Ingested data must land in the bronze layer of Lakehouse1 in the Delta format.\n• No changes other than changes to the file formats must be implemented before the data lands in the bronze layer.\n• Development effort must be minimized and a built-in connection must be used to import the source data.\n• In the event of a connectivity error, the ingestion processes must attempt the connection again.\nLakehouses, data pipelines, and notebooks must be stored in WorkspaceA. Semantic models, reports, and dataflows must be stored in WorkspaceB.\nOnce a week, old files that are no longer referenced by a Delta table log must be removed.\nRequirements. Data Transformation\nIn the POS1 product data, ProductID values are unique. The product dimension in the gold layer must include only active products from product list. Active products are identified by an IsActive value of 1.\nSome product categories and subcategories are NOT assigned to any product. They are NOT analytically relevant and must be omitted from the product dimension in the gold layer.\nRequirements. Data Security\n-\nSecurity in Fabric must meet the following requirements:\n• The data engineers must have read and write access to all the lakehouses, including the underlying files.\n• The data analysts must only have read access to the Delta tables in the gold layer.\n• The data analysts must NOT have access to the data in the bronze and silver layers.\n• The data engineers must be able to commit changes to source control in WorkspaceA.\nYou need to ensure that the data engineers are notified if any step in populating the lakehouses fails. The solution must meet the technical requirements and minimize development effort.\nWhat should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
  "explanation": "【答案来源】PDF 第 356 页答案图\n\n题目分析与解答\n1. 考察的知识点\n如何在数据管道中处理失败情况（On failure dependency condition）。\n如何发送通知以满足技术要求（Office365Outlook activity）。\n2. 选项分析\nTo identify the failure:\nA Fail activity:错误活动会显式触发失败，但它需要手动配置并不适合自动化处理失败的场景，因此不符合题目要求。\nAn If condition activity：条件活动用于逻辑判断，但无法直接处理失败情况，因此不符合题目要求。\nAn On failure dependency condition：这是一个内置的依赖条件，可以自动检测并处理失败情况，符合题目要求。\nAn On completion dependency condition：此选项用于在活动完成后执行操作，但无法专门处理失败情况，因此不符合题目要求。\nTo send the notification:\nA Teams activity:用于发送通知到Microsoft Teams，但题目未提到使用Teams进行通知，因此不符合题目要求。\nAn Invoke pipeline activity：用于调用另一个数据管道，但无法直接发送通知，因此不符合题目要求。\nAn Office365Outlook activity:用于通过Office365发送电子邮件通知，符合题目要求。\n3. 我选的答案\nTo identify the failure: An On failure dependency condition To send the notification: An Office365Outlook activity 4. 官方答案To identify the failure: An On failure dependency condition To send the notification: An Office365Outlook activity 5. 与官方答案比较我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationZh": "【答案来源】PDF 第 356 页答案图\n\n题目分析与解答\n1. 考察的知识点\n如何在数据管道中处理失败情况（On failure dependency condition）。\n如何发送通知以满足技术要求（Office365Outlook activity）。\n2. 选项分析\nTo identify the failure:\nA Fail activity:错误活动会显式触发失败，但它需要手动配置并不适合自动化处理失败的场景，因此不符合题目要求。\nAn If condition activity：条件活动用于逻辑判断，但无法直接处理失败情况，因此不符合题目要求。\nAn On failure dependency condition：这是一个内置的依赖条件，可以自动检测并处理失败情况，符合题目要求。\nAn On completion dependency condition：此选项用于在活动完成后执行操作，但无法专门处理失败情况，因此不符合题目要求。\nTo send the notification:\nA Teams activity:用于发送通知到Microsoft Teams，但题目未提到使用Teams进行通知，因此不符合题目要求。\nAn Invoke pipeline activity：用于调用另一个数据管道，但无法直接发送通知，因此不符合题目要求。\nAn Office365Outlook activity:用于通过Office365发送电子邮件通知，符合题目要求。\n3. 我选的答案\nTo identify the failure: An On failure dependency condition To send the notification: An Office365Outlook activity 4. 官方答案To identify the failure: An On failure dependency condition To send the notification: An Office365Outlook activity 5. 与官方答案比较我的答案与官方答案一致。\n无需重新思考，答案正确。",
  "explanationEn": "[Answer source] PDF p.356 answer image",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "hotspot",
  "pdfQNum": 15,
  "pdfPage": 350,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "监视和优化分析解决方案 · 主题 3 · 问题 15",
  "pdfRefEn": "Monitor and optimize an analytics solution · Topic 3 · Question 15",
  "pdfQuestionNum": 15,
  "topic": 3
 },
 {
  "id": "dp700-q118",
  "examId": "dp-700",
  "domain": "ingest",
  "domainLabel": "引入和转换数据 (估)",
  "domainLabelZh": "引入和转换数据 (估)",
  "domainLabelEn": "Ingest and transform data (est.)",
  "domainGuess": true,
  "type": "single",
  "options": [
   {
    "id": "A",
    "text": "KQL queryset",
    "textEn": "KQL queryset",
    "textZh": "KQL queryset"
   },
   {
    "id": "B",
    "text": "Streaming dataset",
    "textEn": "Streaming dataset",
    "textZh": "Streaming dataset"
   },
   {
    "id": "C",
    "text": "Notebook",
    "textEn": "Notebook",
    "textZh": "Notebook"
   },
   {
    "id": "D",
    "text": "Dataflow Gen2",
    "textEn": "Dataflow Gen2",
    "textZh": "Dataflow Gen2"
   }
  ],
  "answer": [
   "D"
  ],
  "pdfAnswer": [
   "D"
  ],
  "answerSource": "text",
  "stem": "你有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。\n在一个外部数据源中，你有每个大小为 500 GB 的数据文件。每天都会添加一个新文件。\n你需要将数据摄取到 Lakehouse1 中，而不应用任何转换。解决方案必须满足以下要求：\n• 在添加新文件时触发该过程。\n• 提供最高的吞吐量。\n你应该使用哪种类型的项来摄取数据？",
  "stemZh": "你有一个 Fabric 工作区，其中包含一个名为 Lakehouse1 的湖仓。\n在一个外部数据源中，你有每个大小为 500 GB 的数据文件。每天都会添加一个新文件。\n你需要将数据摄取到 Lakehouse1 中，而不应用任何转换。解决方案必须满足以下要求：\n• 在添加新文件时触发该过程。\n• 提供最高的吞吐量。\n你应该使用哪种类型的项来摄取数据？",
  "stemEn": "You have a Fabric workspace that contains a lakehouse named Lakehouse1.\nIn an external data source, you have data files that are 500 GB each. A new file is added every day.\nYou need to ingest the data into Lakehouse1 without applying any transformations. The solution must meet the following requirements:\n• Trigger the process when a new file is added.\n• Provide the highest throughput.\nWhich type of item should you use to ingest the data?",
  "explanation": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据湖的文件摄取（ingestion）方法，特别是如何高效地将外部数据源中的大文件导入到Microsoft Fabric的Lakehouse中。\n重点关注触发机制、吞吐量以及工具的适用性。\n2. 选项分析\nA. KQL queryset\n错误：KQL（Kusto Query Language）主要用于查询数据，而不是用于数据摄取。它无法满足触发摄取过程或提供高吞吐量的要求。\nB. Streaming dataset\n错误：Streaming dataset适用于实时数据流的处理，而本题要求的是摄取大文件（500 GB），并且没有提到实时流数据的需求。\nC. Notebook\n错误：Notebook通常用于数据分析和处理，虽然可以编写代码来摄取数据，但它不具备自动触发机制，也不是吞吐量最高的选项。\nD. Dataflow Gen2\n正确：Dataflow Gen2是专门设计用于高效摄取和处理大规模数据的工具。它支持自动触发机制（如文件添加事件），并提供高吞吐量，非常适合本题场景。\n3. 我的答案\n我的选择是：D. Dataflow Gen2\n4. 官方答案\n官方答案是：D. Dataflow Gen2\n5. 比较与思考\n我的答案与官方答案一致。\n原因：Dataflow Gen2完全符合题目要求，能够自动触发摄取过程并提供高吞吐量，是最佳选择。",
  "explanationZh": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据湖的文件摄取（ingestion）方法，特别是如何高效地将外部数据源中的大文件导入到Microsoft Fabric的Lakehouse中。\n重点关注触发机制、吞吐量以及工具的适用性。\n2. 选项分析\nA. KQL queryset\n错误：KQL（Kusto Query Language）主要用于查询数据，而不是用于数据摄取。它无法满足触发摄取过程或提供高吞吐量的要求。\nB. Streaming dataset\n错误：Streaming dataset适用于实时数据流的处理，而本题要求的是摄取大文件（500 GB），并且没有提到实时流数据的需求。\nC. Notebook\n错误：Notebook通常用于数据分析和处理，虽然可以编写代码来摄取数据，但它不具备自动触发机制，也不是吞吐量最高的选项。\nD. Dataflow Gen2\n正确：Dataflow Gen2是专门设计用于高效摄取和处理大规模数据的工具。它支持自动触发机制（如文件添加事件），并提供高吞吐量，非常适合本题场景。\n3. 我的答案\n我的选择是：D. Dataflow Gen2\n4. 官方答案\n官方答案是：D. Dataflow Gen2\n5. 比较与思考\n我的答案与官方答案一致。\n原因：Dataflow Gen2完全符合题目要求，能够自动触发摄取过程并提供高吞吐量，是最佳选择。",
  "explanationEn": "题目分析与解答\n1. 考察的知识点\n本题考察的是数据湖的文件摄取（ingestion）方法，特别是如何高效地将外部数据源中的大文件导入到Microsoft Fabric的Lakehouse中。\n重点关注触发机制、吞吐量以及工具的适用性。\n2. 选项分析\nA. KQL queryset\n错误：KQL（Kusto Query Language）主要用于查询数据，而不是用于数据摄取。它无法满足触发摄取过程或提供高吞吐量的要求。\nB. Streaming dataset\n错误：Streaming dataset适用于实时数据流的处理，而本题要求的是摄取大文件（500 GB），并且没有提到实时流数据的需求。\nC. Notebook\n错误：Notebook通常用于数据分析和处理，虽然可以编写代码来摄取数据，但它不具备自动触发机制，也不是吞吐量最高的选项。\nD. Dataflow Gen2\n正确：Dataflow Gen2是专门设计用于高效摄取和处理大规模数据的工具。它支持自动触发机制（如文件添加事件），并提供高吞吐量，非常适合本题场景。\n3. 我的答案\n我的选择是：D. Dataflow Gen2\n4. 官方答案\n官方答案是：D. Dataflow Gen2\n5. 比较与思考\n我的答案与官方答案一致。\n原因：Dataflow Gen2完全符合题目要求，能够自动触发摄取过程并提供高吞吐量，是最佳选择。",
  "caseStudy": false,
  "answerConfidence": "high",
  "answerFixed": false,
  "rawType": "choice",
  "pdfQNum": 16,
  "pdfPage": 358,
  "pdfSet": "主题 3",
  "pdfSetEn": "Topic 3",
  "pdfRef": "引入和转换数据 · 主题 3 · 问题 16",
  "pdfRefEn": "Ingest and transform data · Topic 3 · Question 16",
  "pdfQuestionNum": 16,
  "topic": 3
 }
];
if (typeof window !== "undefined") window.QUESTIONS_DP_700 = QUESTIONS_DP_700;
