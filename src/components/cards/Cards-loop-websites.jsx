import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import WebsiteCard from './Card-websites'

const CardsLoopWebsites = ({ items, hideLastItemOnMobile = false }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-3 lg:-mx-6">
        {items.map(item => (
          <div
            className={classNames("w-full sm:w-1/2 lg:w-1/3 p-3 md:p-6", {
              "last:hidden lg:last:block": hideLastItemOnMobile,
            })}
            key={item.id}
          >
            <WebsiteCard {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}

CardsLoopWebsites.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardsLoopWebsites
