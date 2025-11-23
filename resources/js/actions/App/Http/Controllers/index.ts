import Auth from './Auth'
import UserController from './UserController'
import InstrumentController from './InstrumentController'
import StrategyController from './StrategyController'
import TradeController from './TradeController'
import CategoryController from './CategoryController'
import TransactionController from './TransactionController'
import ShortTermStockController from './ShortTermStockController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
UserController: Object.assign(UserController, UserController),
InstrumentController: Object.assign(InstrumentController, InstrumentController),
StrategyController: Object.assign(StrategyController, StrategyController),
TradeController: Object.assign(TradeController, TradeController),
CategoryController: Object.assign(CategoryController, CategoryController),
TransactionController: Object.assign(TransactionController, TransactionController),
ShortTermStockController: Object.assign(ShortTermStockController, ShortTermStockController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers