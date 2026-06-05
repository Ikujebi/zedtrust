"use client";

import { Table, Tag, Progress, Tooltip } from "antd";
import {
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Layers,
  DollarSign,
  PieChart,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* -------------------------
   ANIMATION VARIANTS
--------------------------*/

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1], // ✅ FIXED (no TS error)
    },
  },
};

/* -------------------------
   DATA
--------------------------*/
const transactionData = [
  {
    key: "1",
    reference: "TXN-9021",
    entity: "Apex Liquidity Pool",
    category: "Yield Strategy",
    amount: "+$12,450.00",
    status: "cleared",
  },
  {
    key: "2",
    reference: "TXN-4412",
    entity: "AWS Cloud Infrastructure",
    category: "Operational Cost",
    amount: "-$3,120.50",
    status: "cleared",
  },
  {
    key: "3",
    reference: "TXN-0811",
    entity: "Vanguard ETF Rebalance",
    category: "Capital Asset",
    amount: "+$8,900.00",
    status: "pending",
  },
];

/* -------------------------
   TABLE COLUMNS
--------------------------*/
const tableColumns = [
  {
    title: "Reference",
    dataIndex: "reference",
    key: "reference",
    render: (text: string) => (
      <span className="font-mono text-gray-300">{text}</span>
    ),
  },
  {
    title: "Counterparty",
    dataIndex: "entity",
    key: "entity",
    render: (text: string) => (
      <span className="font-semibold text-white">{text}</span>
    ),
  },
  {
    title: "Node",
    dataIndex: "category",
    key: "category",
    render: (text: string) => (
      <Tag className="border border-forest-mid text-gray-300 bg-forest-dark px-3 py-1">
        {text}
      </Tag>
    ),
  },
  {
    title: "Amount (USD)",
    dataIndex: "amount",
    key: "amount",
    render: (text: string) => {
      const isPositive = text.includes("+");

      return (
        <span
          className={`font-bold ${
            isPositive ? "text-lemon" : "text-red-400"
          }`}
        >
          {text}
        </span>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const ok = status === "cleared";

      return (
        <Tag
          className={`uppercase text-[10px] font-bold border ${
            ok
              ? "border-lemon text-lemon bg-lemon/10"
              : "border-yellow-400 text-yellow-300 bg-yellow-400/10"
          }`}
        >
          {status}
        </Tag>
      );
    },
  },
];

/* -------------------------
   COMPONENT
--------------------------*/
export default function DashboardPreview() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full glass-panel rounded-2xl p-6 md:p-8"
    >
      {/* HEADER */}
      <motion.div
        variants={card}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-forest-mid pb-6 mb-8"
      >
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers size={18} className="text-lemon" />
            Liquidity Command Center
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Real-time valuation synchronized 3s ago.
          </p>
        </div>

        <button className="flex items-center gap-2 text-xs bg-forest-mid border border-lemon/20 hover:border-lemon text-gray-300 rounded-lg px-4 py-2 transition">
          <RefreshCw size={14} />
          Refresh Ledger
        </button>
      </motion.div>

      {/* METRIC GRID */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
      >
        {/* CARD 1 */}
        <motion.div
          variants={card}
          className="bg-forest-dark/60 border border-forest-mid p-6 rounded-xl hover:shadow-[0_0_30px_#ccff0020] transition"
        >
          <div className="flex justify-between">
            <span className="text-xs text-gray-400 uppercase">
              Net Liquid Capital
            </span>
            <DollarSign className="text-lemon" size={18} />
          </div>

          <h2 className="text-3xl font-extrabold text-white mt-4">
            $1,842,910
            <span className="text-lemon text-sm font-normal">.40</span>
          </h2>

          <span className="inline-flex items-center gap-1 text-xs text-lemon mt-2 bg-lemon/5 px-2 py-0.5 rounded">
            <ArrowUpRight size={14} /> +14.2% MoM
          </span>
        </motion.div>

        {/* CARD 2 */}
        <motion.div variants={card} className="bg-forest-dark/60 border border-forest-mid p-6 rounded-xl">
          <div className="flex justify-between">
            <span className="text-xs text-gray-400 uppercase">
              Yield Burn Rate
            </span>
            <PieChart className="text-mint" size={18} />
          </div>

          <h2 className="text-3xl font-extrabold text-white mt-4">
            22.41%
          </h2>

          <Tooltip title="Target: 30%">
            <Progress
              percent={22.41}
              strokeColor="#ccff00"
              railColor="#0b291a"
              showInfo={false}
            />
          </Tooltip>
        </motion.div>

        {/* CARD 3 */}
        <motion.div variants={card} className="bg-forest-dark/60 border border-forest-mid p-6 rounded-xl">
          <div className="flex justify-between">
            <span className="text-xs text-gray-400 uppercase">
              Escrow Pool
            </span>
            <ArrowDownRight className="text-red-400" size={18} />
          </div>

          <h2 className="text-3xl font-extrabold text-white mt-4">
            $340,000
          </h2>

          <span className="inline-flex items-center gap-1 text-xs text-red-400 mt-2 bg-red-400/5 px-2 py-0.5 rounded">
            -2.4% Safe Outflow
          </span>
        </motion.div>
      </motion.div>

      {/* TABLE */}
      <motion.div variants={card}>
        <h4 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-wider">
          Audit Ledger Engine
        </h4>

        <Table
          dataSource={transactionData}
          columns={tableColumns}
          pagination={false}
          className="custom-table"
        />
      </motion.div>
    </motion.div>
  );
}