declare namespace HumanRole {
  /**
   * 状态参数
   */
  type State = {
    pageSize: number;
    exportExcelLoading: boolean;
    deleteLoading: boolean;
  };

  /**
   * 搜索参数
   */
  type PageParams = {
    current: number;
    pageSize: number;
    roleName: string;
    roleKey: string;
    status: string;
  };

  /**
   * 响应参数
   */
  type PageListItem = {
    roleName: string;
    roleKey: string;
    roleSort: string;
    status: string;
    createTime: Date;
  };
}
