import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const status = () => {
    clickTabItem(tabId)
  }

  const isActiveTabButton = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveTabButton}`}
        onClick={status}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
