import moment from 'moment'

require('dotenv').config()
export const POLL_INTERVAL = process.env.REACT_APP_POLL_INTERVAL

export const BRIDGE_TYPE = {
  FAST_BRIDGE: "FAST_BRIDGE",
  CLASSIC_BRIDGE: "CLASSIC_BRIDGE",
  MULTI_BRIDGE: "MULTI_BRIDGE", /// FIXME: remove me
}


export const EXPIRY_OPTIONS = [
  {
    value: moment().add(3, 'M').format("YYYY-MM-DD"),
    label: '3 Months',
  },
  {
    value: moment().add(6, 'M').format("YYYY-MM-DD"),
    label: '6 Months',
  },
  {
    value: moment().add(1, 'y').format("YYYY-MM-DD"),
    label: '1 Year',
  },
]



export const ECOSYSTEM_CATEGORY = [ 'defi', 'gamefi', 'nft', 'bridge', 'wallet', 'tool', 'token' ];
