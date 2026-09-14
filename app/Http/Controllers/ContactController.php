<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Yajra\DataTables\Facades\DataTables;

class ContactController extends Controller
{
    //
    public function index()
    {
        return view('admin.contact.index');
    }

    public function all()
    {
        //
        $data = Contact::select(['id', 'company_name', 'office', 'phone', 'email', 'address_ho']);

        return DataTables::of($data)
            ->addIndexColumn()
            ->addColumn('action', function ($row) {
                $html = '<a href="/contact/edit/'.$row->id.'" class="btn btn-sm btn-primary">Edit</a>';
                $html .= ' <button data-href="/contact/destroy/'.$row->id.'" class="btn btn-sm btn-danger" onclick="deleteFunc(this)">Delete</button>';
                return $html;
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    /**
     * Show the create form.
     */
    public function create()
    {
        $data['url'] = '/contact/store';
        $data['method'] = 'post';
        $data['act'] = 'add';

        return view('admin.forms.contactForm', $data);
    }

    /**
     * Persist a new contact entry.
     */
    public function store(Request $request)
    {
        $request->validate([
            'company_name' => 'required',
        ]);

        try {
            $contact = new Contact();
            $contact->company_name = $request->company_name;
            $contact->code = $request->code ? $request->code : 'bti';
            $contact->description = $request->description;
            $contact->office = $request->office;
            $contact->address_ho = $request->address_ho;
            $contact->address_branch = $request->address_branch;
            $contact->phone = $request->phone;
            $contact->email = $request->email;
            $contact->instagram = $request->instagram;
            $contact->instagram_title = $request->instagram_title;
            $contact->youtube = $request->youtube;
            $contact->linkedin = $request->linkedin;

            $contact->save();

            return redirect('contact')->with('status', 'Contact inserted successfully.');
        }
        catch (Exception $e) {
            return redirect('contact/add')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Show the edit form.
     */
    public function edit($id)
    {
        $data['url'] = '/contact/update/'.$id;
        $data['method'] = 'post';
        $data['act'] = 'edit';
        $data['contact'] = Contact::find($id);

        if (!$data['contact']) {
            abort(404);
        }

        return view('admin.forms.contactForm', $data);
    }

    /**
     * Update an existing contact entry.
     */
    public function update($id, Request $request)
    {
        $request->validate([
            'company_name' => 'required',
        ]);

        try {
            $contact = Contact::find($id);
            if (!$contact) {
                abort(404);
            }

            $contact->company_name = $request->company_name;
            $contact->code = $request->code ? $request->code : $contact->code;
            $contact->description = $request->description;
            $contact->office = $request->office;
            $contact->address_ho = $request->address_ho;
            $contact->address_branch = $request->address_branch;
            $contact->phone = $request->phone;
            $contact->email = $request->email;
            $contact->instagram = $request->instagram;
            $contact->instagram_title = $request->instagram_title;
            $contact->youtube = $request->youtube;
            $contact->linkedin = $request->linkedin;

            $contact->save();

            return redirect('contact')->with('status', 'Contact updated successfully.');
        }
        catch (Exception $e) {
            return redirect('/contact/edit/'.$id)->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }

    /**
     * Remove a contact entry.
     */
    public function destroy($id)
    {
        try {
            $contact = Contact::find($id);
            if (!$contact) {
                abort(404);
            }

            $contact->delete();

            return redirect('contact')->with('status', 'Contact deleted successfully.');
        }
        catch (Exception $e) {
            return redirect('contact')->with('failed', 'Operation failed. '.$e->getMessage());
        }
    }
}
