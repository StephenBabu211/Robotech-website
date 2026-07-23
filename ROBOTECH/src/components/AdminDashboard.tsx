import React, { useState, useEffect } from 'react';
import { Enquiry } from '../types';
import { 
  ShieldCheck, 
  Search, 
  Trash2, 
  Download, 
  FileText, 
  X, 
  Lock, 
  KeyRound, 
  RefreshCw, 
  Filter, 
  Printer, 
  Building, 
  Mail, 
  Phone, 
  Clock,
  Sparkles
} from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'robotech2026' || passcode === 'admin') {
      setAuthenticated(true);
      setAuthError(false);
      fetchAdminEnquiries('robotech2026');
    } else {
      setAuthError(true);
    }
  };

  const fetchAdminEnquiries = async (key: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/enquiries?key=${key}`);
      const data = await res.json();
      if (res.ok && data.enquiries) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error('Error fetching admin enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/admin/enquiries/${id}?key=robotech2026`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setEnquiries(prev => prev.filter(e => e.id !== id));
      }
    } catch (err) {
      console.error('Error deleting enquiry:', err);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.robotName.toLowerCase().includes(q) ||
      item.company.toLowerCase().includes(q) ||
      item.id.toLowerCase().includes(q);

    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Export to CSV
  const exportToCSV = () => {
    if (filteredEnquiries.length === 0) return;
    
    const headers = ['Enquiry ID', 'Customer Name', 'Company', 'Email', 'Phone', 'Country', 'Robot Selected', 'Intent', 'Purpose', 'Status', 'Date Time', 'IP'];
    const rows = filteredEnquiries.map(item => [
      `"${item.id}"`,
      `"${item.name}"`,
      `"${item.company}"`,
      `"${item.email}"`,
      `"${item.phone}"`,
      `"${item.country}"`,
      `"${item.robotName}"`,
      `"${item.intent}"`,
      `"${item.purpose}"`,
      `"${item.status}"`,
      `"${item.createdAt}"`,
      `"${item.ip || 'N/A'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ROBOTECH_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Print PDF
  const handlePrintPDF = () => {
    window.print();
  };

  if (!authenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
        <div className="relative w-full max-w-md bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,229,255,0.2)] text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-white">ROBOTECH Admin Access</h2>
            <p className="text-xs text-slate-400">Enter access key to view customer enquiries and export records.</p>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            {authError && (
              <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500 text-red-300 text-xs text-center font-semibold">
                Invalid Admin Access Key! (Default: robotech2026)
              </div>
            )}

            <div>
              <label className="block text-xs font-mono text-slate-300 font-bold mb-1.5">
                Passcode / Access Key
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="password"
                  required
                  placeholder="Enter Key (robotech2026)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-black text-sm hover:scale-[1.02] transition-transform"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-6xl my-8 bg-[#0B1020] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,229,255,0.25)] text-white overflow-hidden print:bg-white print:text-slate-950 print:border-none print:shadow-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <h2 className="text-2xl font-black text-white font-mono">ROBOTECH Admin Portal</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">Live customer enquiries and quotation records</p>
          </div>

          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={() => fetchAdminEnquiries('robotech2026')}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={exportToCSV}
              className="px-3.5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handlePrintPDF}
              className="px-3.5 py-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 hover:bg-purple-600 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by customer, email, robot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Total: {filteredEnquiries.length}</span>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="mt-6 overflow-x-auto">
          {filteredEnquiries.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              No customer enquiries found in database.
            </div>
          ) : (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900/90 text-slate-400 font-mono uppercase border-b border-slate-800">
                  <th className="p-3">ID / Date</th>
                  <th className="p-3">Customer Details</th>
                  <th className="p-3">Robot Selected</th>
                  <th className="p-3">Intent</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-right print:hidden">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-mono">
                {filteredEnquiries.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="p-3 text-slate-300">
                      <div className="font-bold text-cyan-400">{item.id}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {new Date(item.createdAt).toLocaleString()}
                      </div>
                    </td>

                    <td className="p-3 text-slate-200">
                      <div className="font-bold text-white text-sm">{item.name}</div>
                      <div className="text-slate-400 text-[11px] flex items-center gap-1 mt-0.5">
                        <Building className="w-3 h-3 text-slate-500" />
                        <span>{item.company}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Mail className="w-3 h-3 text-slate-500" />
                        <span>{item.email}</span>
                      </div>
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Phone className="w-3 h-3 text-slate-500" />
                        <span>{item.phone} ({item.country})</span>
                      </div>
                    </td>

                    <td className="p-3 font-bold text-emerald-400">
                      {item.robotName}
                    </td>

                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {item.intent}
                      </span>
                    </td>

                    <td className="p-3 text-slate-300 max-w-xs text-[11px]">
                      <div className="line-clamp-2">{item.message}</div>
                      <div className="text-[10px] text-slate-500 mt-1">Purpose: {item.purpose}</div>
                    </td>

                    <td className="p-3 text-right print:hidden">
                      <button
                        onClick={() => handleDeleteEnquiry(item.id)}
                        className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        title="Delete Enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
};
