import React, {useState, useEffect} from 'react'
import {Modal, Tabs, Skeleton} from 'antd'
import {getInfo} from './service'
import {system} from '@/utils/twelvet'
import styles from './styles.less'

/**
 * 字典模块数据管理
 */
const PreviewCode: React.FC<{
  info: {
    tableId: number
    visible: boolean
  }
  onClose: () => void
}> = (props) => {

  const {info, onClose} = props

  const [codeData, setCodeData] = useState<{}>({})

  const [loading, setLoading] = useState<boolean>(false)

  /**
   * 获取信息
   * @returns
   */
  const refGetInfo = async (tableId: number) => {
    try {
      setLoading(true)
      const {data} = await getInfo(tableId)

      setCodeData(data)
    } catch (e) {
      system.error(e)
    } finally {
      setLoading(false)
    }
  }

  /**
   * 初始化数据信息
   */
  useEffect(() => {
    if (info.tableId != 0) {
      refGetInfo(info.tableId)
    }
  }, [info.tableId])

  return (
    <Modal
      title={`代码预览`}
      width={'80%'}
      open={info.visible}
      onCancel={() => {
        onClose()
      }}
      footer={null}
    >
      <Skeleton active loading={loading}>
        <Tabs
          defaultActiveKey="1"
          tabPosition='top'
        >
          <Tabs.TabPane tab="Controller.java" key="1">
              <pre className={styles.preCode}>
                  <code>
                    {codeData['vm/java/controller.java.vm']}
                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Service.java" key="2">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/java/service.java.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="ServiceImpl.java" key="3">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/java/serviceImpl.java.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Mapper.java" key="4">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/java/mapper.java.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Mapper.xml" key="5">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/xml/mapper.xml.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Domain.java" key="6">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/java/domain.java.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab={codeData['vm/react/index.tsx.vm'] ? 'index.tsx' : 'index-tree.tsx'} key="7">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/react/index.tsx.vm'] ? codeData['vm/react/index.tsx.vm'] : codeData['vm/react/index-tree.tsx.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Api.ts" key="8">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/js/api.ts.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

          <Tabs.TabPane tab="SQL" key="9">
              <pre className={styles.preCode}>
                  <code>

                    {codeData['vm/sql/sql.vm']}

                  </code>
              </pre>
          </Tabs.TabPane>

        </Tabs>
      </Skeleton>

    </Modal>
  )

}

export default PreviewCode
